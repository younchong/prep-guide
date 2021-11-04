import clearDiv from './clear.js';
export default function stationHandler() {
  const stationButton = document.querySelector("#station-manager-button");
  stationButton.addEventListener("click", buttonHandler);
}


function buttonHandler(e) {
  const mainBoard = document.querySelector("#app");
  const madeDivs = document.createElement("div");
  clearDiv();
  makeInputDiv(madeDivs);
  makeListDiv(madeDivs);
  mainBoard.append(madeDivs);

  const addStationButton = document.querySelector("#station-add-button");
  const stationInput = document.querySelector("#station-name-input");
  addStationButton.addEventListener("click", (e) => { stationAddHandler(stationInput.value), e.preventDefault(), stationInput.value = "" });

  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage[i] !== "deleted" && typeof localStorage[i] !== "undefined") {
        makeBoard(localStorage[i], i);
      }
    }
  }
}

function makeInputDiv(parentDiv) {
  const inputDiv = document.createElement("div");
  const headSpan = document.createElement("span");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  headSpan.textContent = "역 이름";
  input.type = "text";
  input.placeholder = "역 이름을 입력해주세요.";
  input.id = "station-name-input";
  button.textContent = "역 추가";
  button.id = "station-add-button";
  inputDiv.append(headSpan);
  inputDiv.append(form);
  form.append(input);
  form.append(button);
  parentDiv.append(inputDiv);
}

function makeListDiv(parentDiv) {
  const listDiv = document.createElement("div");
  const listSpan = document.createElement("span");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const informationRow = document.createElement("tr");
  const stationName = document.createElement("th");
  const settingRow = document.createElement("th");

  listSpan.textContent = "🚉 지하철 역 목록"
  stationName.textContent = "역 이름";
  settingRow.textContent = "설정";
  informationRow.append(stationName);
  informationRow.append(settingRow);
  thead.append(informationRow);
  table.append(thead);
  table.append(tbody);
  listDiv.append(table);
  parentDiv.append(listDiv);
}

class Station {
  static index = localStorage.length;
  constructor(name) {
    this.name = name;
    this.index = Station.index++;
    localStorage.setItem(this.index, this.name);
  }

  information() {
    return [this.name, this.index];
  }
}


function stationAddHandler(station) {

  if (station.length < 2) {
    alert("2글자 이상 입력해주세요.");
  } else if (!valueChecker(station)) {
    alert("이미 등록된 역입니다.")
  } else {
    let addedStation = new Station(station);
    let index = addedStation.information()[1];
    makeBoard(station, index);
  }
}

function valueChecker(station) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage[i] === station) {
      return false;
    }
  }

  return true;
}

function makeBoard(station, index) {
  const tbody = document.querySelector("tbody");
  const row = document.createElement("tr");
  row.id = index;
  const indexNum = index;
  const stationName = document.createElement("td");
  stationName.textContent = station;
  const deleteButtonData = document.createElement("td");
  const deletebutton = document.createElement("button");
  deletebutton.textContent = "삭제";
  deletebutton.classList.add("station-delete-button");
  deleteButtonData.append(deletebutton);
  row.append(stationName);
  row.append(deleteButtonData);
  tbody.append(row);

  deletebutton.addEventListener("click", () => { deleteButtonHandler(row, indexNum) });
}

function deleteButtonHandler(row, index) {
  row.remove();
  localStorage.setItem(index, "deleted");
}