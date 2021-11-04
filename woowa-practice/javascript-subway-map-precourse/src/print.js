import clearDiv from './clear.js';
export default function printHandler() {
  const printButton = document.querySelector("#map-print-manager-button");

  printButton.addEventListener("click", printLine);
}




function printLine() {
  const mainDiv = document.querySelector("#app");
  const printListDiv = document.createElement("div");
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("호선")) {
      const lineName = localStorage.key(i);
      printInfomation(lineName, printListDiv);
    }
  }

  clearDiv();
  mainDiv.append(printListDiv);
}

function printInfomation(name, div) {
  const headDiv = document.createElement("div");
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  const ul = document.createElement("ul");
  const lineList = JSON.parse(localStorage[name]);

  for (let i = 0; i < lineList.length; i++) {
    const list = document.createElement("li");
    list.textContent = lineList[i];

    ul.append(list);
  }

  headDiv.append(nameSpan);
  headDiv.append(ul);
  div.append(headDiv);
}