import { stations } from './lineInfo.js';
import findRoute from './route.js';
export default function findButtonHandler() {
  const form = document.querySelector("form");
  const departureStation = document.querySelector("#departure-station-name-input");
  const arrivalStation = document.querySelector("#arrival-station-name-input");

  form.addEventListener("submit", function (e) {
    const data = new FormData(form);
    const resultPage = document.querySelector("#result-page");

    if (resultPage) {
      resultPage.remove();
    }

    if (inputChecker(departureStation.value) && inputChecker(arrivalStation.value) && departureStation.value !== arrivalStation.value) {
      for (const result of data) {
        findRoute(departureStation.value, arrivalStation.value, result[1]);
      }
    }

    e.preventDefault();
  })

}

findButtonHandler();

function inputChecker(station) {


  if (station.length < 2) {
    alert("2글자 이상 적어주세요.")
    return false;
  }

  if (!stations.includes(station)) {
    alert("존재하지 않는 역입니다.")
    return false;
  }

  return true;
}