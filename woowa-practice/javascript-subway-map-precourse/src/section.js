import clearDiv from './clear.js';
class SectionManager {
  constructor(name) {
    this.name = name;
    this.line = JSON.parse(localStorage[name]);
    this.start = this.line[0];
    this.end = this.line[this.line.length - 1];
  }

  static counter() {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes("호선")) {
        count++;
      }
    }

    return count;
  }

  call() {
    return this.name;
  }

  plus() {
    SectionManager.count++;
  }
}

export default function sectionManageHandler() {
  const sectionManageButton = document.querySelector("#section-manager-button");
  sectionManageButton.addEventListener("click", buttonHandler);
}

function buttonHandler() {
  clearDiv();
  const mainDiv = document.querySelector("#app");
  const topDiv = document.createElement("div");
  const headDiv = document.createElement("div");

  topDiv.id = "topDiv";
  headDiv.textContent = "구간을 수정할 노선을 선택해주세요.";
  topDiv.append(headDiv);
  makeButton(topDiv);
  mainDiv.append(topDiv);
}

function makeButton(board) {
  const lineList = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("호선")) {
      let line = new SectionManager(localStorage.key(i));
      lineList.push(line.call());
    }
  }

  for (let i = 0; i < lineList.length; i++) {
    const button = document.createElement("button");
    button.textContent = lineList[i];
    button.classList.add("section-line-menu-button");
    button.addEventListener("click", () => { sectionController(lineList[i]) });
    board.append(button);
  }
}

function sectionController(name) {
  const mainDiv = document.querySelector("#app");
  const topDiv = document.querySelector("#topDiv");
  const managerDiv = document.createElement("div");
  const headSpan = document.createElement("span");
  headSpan.textContent = `${name} 관리`;
  const sectionTable = document.createElement("table");
  cleanForm();

  makeForm(managerDiv, name);
  mainDiv.append(topDiv);
  topDiv.append(managerDiv);
  managerDiv.append(headSpan);
  managerDiv.append(sectionTable);
  makeInformation(sectionTable);
  makeSection(name);
}

function makeForm(parentDiv, name) {
  const managerForm = document.createElement("form");
  const formSpan = document.createElement("span");
  formSpan.textContent = "구간 등록";
  const selectDiv = document.createElement("div");
  const stationSelect = document.createElement("select");
  stationSelect.id = "section-station-selector";
  const orderInput = document.createElement("input");
  orderInput.placeholder = "순서";
  orderInput.id = "section-order-input";
  const addButton = document.createElement("button");
  addButton.textContent = "등록";
  addButton.id = "section-add-button";
  addButton.addEventListener("click", (e) => { addButtonHandler(name), e.preventDefault() });

  managerForm.append(formSpan);
  managerForm.append(selectDiv);
  selectDiv.append(stationSelect);
  selectDiv.append(orderInput);
  selectDiv.append(addButton);
  parentDiv.append(managerForm);
  makeSelectOption(stationSelect);
}

function addButtonHandler(name) {
  const select = document.querySelector("#section-station-selector");
  const input = document.querySelector("#section-order-input");
  if (stationChecker(select.value)) {
    modifyLine(name, select.value, input.value);
    makeSection(name);
    input.value = "";
  } else {
    alert("이미 등록된 역입니다.");
  }
}

function modifyLine(name, station, order) {
  let line = JSON.parse(localStorage[name]);
  if (order <= line.length && order >= 0) {
    line.splice(order, 0, station);
    localStorage.setItem(name, JSON.stringify(line));
  } else {
    alert("알맞은 순서를 넣어주세요.")
  }

}

function makeSelectOption(select) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage[i] && localStorage[i] !== "delete") {
      const option = document.createElement("option");
      option.value = localStorage[i];
      option.textContent = localStorage[i];
      select.append(option);
    }
  }
}

function makeInformation(div) {
  const informationHead = document.createElement("thead");
  const informationRow = document.createElement("tr");
  const informationOrder = document.createElement("th");
  informationOrder.textContent = "순서";
  const informationName = document.createElement("th");
  informationName.textContent = "이름";
  const informationSetting = document.createElement("th");
  informationSetting.textContent = "설정";

  informationHead.append(informationRow);
  informationRow.append(informationOrder);
  informationRow.append(informationName);
  informationRow.append(informationSetting);
  div.append(informationHead);
}

function makeSection(lineName) {
  cleanTable();
  const lineList = JSON.parse(localStorage[lineName]);
  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");

  for (let i = 0; i < lineList.length; i++) {
    makeRow(lineName, i, tbody);
  }
  table.append(tbody);
}

function cleanTable() {
  const table = document.querySelector("table");
  if (table.children.length > 1) {
    for (let i = 1; i <= table.children.length; i++) {
      table.children[i].remove();
    }
  }

}

function makeRow(lineName, index, parent) {
  const lineList = JSON.parse(localStorage[lineName]);
  const tr = document.createElement("tr");
  const order = document.createElement("td");
  order.textContent = index;
  const name = document.createElement("td");
  name.textContent = lineList[index];
  const button = document.createElement("td");
  const setting = document.createElement("button");
  setting.textContent = "노선에서 제거";

  setting.addEventListener("click", () => { deleteButtonHandler(lineName, index) });

  button.append(setting);
  tr.append(order);
  tr.append(name);
  tr.append(button);
  parent.append(tr);
}

function cleanForm() {
  const topDiv = document.querySelector("#topDiv");
  const count = SectionManager.counter();
  const divCount = topDiv.children.length;

  if (divCount > count + 1) {
    for (let i = count + 1; i < divCount; i++) {
      topDiv.children[i].remove();
    }
  }
}

function stationChecker(station) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("호선") && localStorage[localStorage.key(i)].includes(station)) {
      return false;
    }
  }

  return true;
}

function deleteButtonHandler(name, order) {
  const lineList = JSON.parse(localStorage[name]);
  const table = document.querySelector("table");

  if (lineList.length > 3) {
    lineList.splice(order, 1);
    localStorage.setItem(name, JSON.stringify(lineList));
    makeSection(name);
  } else {
    alert("더이상 삭제할 수 없습니다.");
  }
}
