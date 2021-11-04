import clearDiv from './clear.js';
export default function lineHandler() {
  const lineButton = document.querySelector("#line-manager-button");
  lineButton.addEventListener("click", () => { clearDiv(), buttonHandler() });
}

function buttonHandler() {
  const mainBoard = document.querySelector("#app");
  const lineDiv = document.createElement("div");

  makeInputDiv(lineDiv);
  makeFormDiv(lineDiv);
  makeTable(lineDiv);
  mainBoard.append(lineDiv);


  const addButton = document.querySelector("#line-add-button");
  const nameInput = document.querySelector("#line-name-input");
  addButton.addEventListener("click", (e) => { addLineHandler(nameInput.value), e.preventDefault() });


  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes("호선")) {
        const lineName = localStorage.key(i);
        const line = JSON.parse(localStorage[lineName]);
        const endNum = line.length - 1;
        const start = line[0];
        const end = line[endNum];
        addRow(lineName, start, end);
      }
    }
  }
}

function makeInputDiv(parentDiv) {
  const inputDiv = document.createElement("div");
  const titleName = document.createElement("div");
  const lineInput = document.createElement("input");

  titleName.textContent = "노선 이름";
  lineInput.id = "line-name-input";
  lineInput.placeholder = "노선 이름을 입력해주세요."

  inputDiv.append(titleName);
  inputDiv.append(lineInput);
  parentDiv.append(inputDiv);
}

function makeFormDiv(lineDiv) {
  const form = document.createElement("form");
  const headSpan = document.createElement("span");
  const lineNameInput = document.createElement("input");
  const addButton = document.createElement("button");

  headSpan.textContent = "노선이름";
  lineNameInput.placeholder = "노선 이름을 입력해주세요";
  lineNameInput.id = "line-name-input";
  makeSelect(form, "상행 종점", "line-start-station-selector");
  makeSelect(form, "하행 종점", "line-end-station-selector");
  addButton.textContent = "노선 추가";
  addButton.id = "line-add-button";
  form.append(addButton);
  lineDiv.append(form);
}

function makeSelect(parentDiv, content, id) {
  const selectDiv = document.createElement("div");
  const selectSpan = document.createElement("span");
  const select = document.createElement("select");

  selectSpan.textContent = content;
  select.id = id;
  selectDiv.append(selectSpan);
  selectDiv.append(select);
  parentDiv.append(selectDiv);

  makeSelectOption(select);
}

function makeTable(parentDiv) {
  const tableDiv = document.createElement("div");
  const tableSpan = document.createElement("span");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  tableSpan.textContent = "🚉 지하철 노선 목록";
  tableDiv.append(tableSpan);
  makeTableHead(table);
  table.append(tbody);
  tableDiv.append(table);
  parentDiv.append(tableDiv);
}

function makeTableHead(table) {
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const lineName = document.createElement("th");
  const startLineName = document.createElement("th");
  const endLineName = document.createElement("th");
  const settingBox = document.createElement("th");

  lineName.textContent = "노선 이름";
  startLineName.textContent = "상행 종점역";
  endLineName.textContent = "하행 종점역";
  settingBox.textContent = "설정";

  thead.append(headRow);
  headRow.append(lineName);
  headRow.append(startLineName);
  headRow.append(endLineName);
  headRow.append(settingBox);
  table.append(thead);
}

function addLineHandler(lineName) {
  const startStation = document.querySelector("#line-start-station-selector").value;
  const endStation = document.querySelector("#line-end-station-selector").value;
  if (lineNameChecker(lineName) && lineStationChecker(startStation) && lineStationChecker(endStation)) {
    addRow(lineName, startStation, endStation);
    storeLine(lineName, startStation, endStation);
  } else {
    alert("이미 등록된 이름입니다.")
  }

}

function makeSelectOption(select) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage[i] !== "deleted" && typeof localStorage[i] !== "undefined") {
      const option = document.createElement("option");
      option.value = localStorage[i];
      option.textContent = localStorage[i];

      select.append(option);
    }
  }
}

function addRow(name, start, end) {
  const tbody = document.querySelector("tbody");
  const row = document.createElement("tr");
  row.dataset.lineNumber = name;
  const lineNameData = document.createElement("td");
  const lineStartData = document.createElement("td");
  const lineEndData = document.createElement("td");
  const settingData = document.createElement("td");
  const deleteButton = document.createElement("button");

  lineNameData.textContent = name;
  lineStartData.textContent = start;
  lineEndData.textContent = end;
  deleteButton.textContent = "삭제";

  tbody.append(row);
  row.append(lineNameData);
  row.append(lineStartData);
  row.append(lineEndData);
  row.append(settingData);
  settingData.append(deleteButton);
  deleteButton.addEventListener("click", () => { deleteButtonHandler(row) });
}

function deleteButtonHandler(row) {
  const name = row.dataset.lineNumber;
  row.remove();
  localStorage.removeItem(name);
}

function storeLine(lineName, start, end) {
  const lineInfomation = [start, end];
  localStorage.setItem(lineName, JSON.stringify(lineInfomation));
}

function lineNameChecker(name) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("호선") && localStorage.key(i).includes(name)) {

      return false;
    }
  }

  return true;
}

function lineStationChecker(station) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("호선") && localStorage[localStorage.key(i)].includes(station)) {

      return false;
    }
  }

  return true;
}