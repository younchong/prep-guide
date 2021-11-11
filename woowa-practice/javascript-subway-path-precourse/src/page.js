import { section } from './lineInfo.js';
export default function makeResultBoard(option, result) {
  const main = document.querySelector("main");
  const resultDiv = document.createElement("div");
  resultDiv.id = "result-page";
  option = option === "time" ? "최소시간" : "최단거리";
  resultDiv.innerHTML = `
  <h1>📝결과</h1>
  <h3>${option}</h3>
  <table>
    <thead>
      <tr>
        <th>총 거리</th>
        <th>총 소요 시간</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${findInformation(result, "distance")}km</td>
        <td>${findInformation(result, "time")}분</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2">${makeResultTable(result)}</th>
      </tr>
    </tfoot>
  </table>
  `
  main.append(resultDiv);
}

function makeResultTable(result) {
  let answer = ""
  for (let i = 0; i < result.length; i++) {
    if (i !== result.length - 1) {
      answer += result[i] + "▶";
    } else {
      answer += result[i];
    }
  }

  return answer;
}

function findInformation(result, option) {
  let answer = 0;
  for (let i = 0; i < result.length - 1; i++) {
    section.map(information => {
      if (information["start"] === result[i] && information["end"] === result[i + 1] || information["end"] === result[i] && information["start"] === result[i + 1]) {
        answer += information[option]
      }
    })
  }

  return answer;
}