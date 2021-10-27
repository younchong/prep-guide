export default function Car(name) {
  const board = document.querySelector("#app");
  const nameInput = document.querySelector("#car-names-input");
  const nameButton = document.querySelector("#car-names-submit");
  let canPlay = true;
  let playerNames;

  nameButton.addEventListener("click", nameHandler);

  function nameHandler(e) {
    let canStart = true;
    playerNames = nameInput.value.split(",");
    e.preventDefault();
    let resultNodes = document.querySelectorAll(".result");

    if (resultNodes.length !== 0) {
      for (let i = 0; i < resultNodes.length; i++) {
        board.removeChild(resultNodes[i]);
      }
    }

    for (let i = 0; i < playerNames.length; i++) {
      if (playerNames[i].length > 5) {
        canStart = false;
        break;
      }
    }

    if (canStart && canPlay) {
      makeNumberInput();
      canPlay = false;
    } else if (!canStart) {
      alert("자동차 이름을 5자 이하로 정해주세요.");
      nameInput.value = "";
      playerNames = [];
    }
  }

  function makeNumberInput() {
    const h4 = document.createElement("h4");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("button");
    h4.classList.add("result");
    form.classList.add("result");
    h4.textContent = "시도할 횟수를 입력해주세요."
    input.type = "number";
    input.id = "racing-count-input";
    button.id = "racing-count-submit";
    button.textContent = "확인";
    board.append(h4);
    board.append(form);
    form.append(input);
    form.append(button);
    button.addEventListener("click", (e) => { numberHandler(e, input.value) });
  }

  function numberHandler(e, input) {
    let givenNumber = input;
    e.preventDefault();

    if (input <= 0) {
      alert("1이상의 숫자를 선택해주세요.");
      return;
    }

    if (!canPlay) {
      startGame(playerNames, givenNumber);
      canPlay = true;
    }
  }

  function startGame(player, times) {
    const playerNumber = player.length;
    let result = new Array(playerNumber);
    result.fill("");

    for (let i = 0; i < times; i++) {
      const div = document.createElement("div");
      div.classList.add("result");
      div.style.marginBottom = "1em";
      for (let j = 0; j < playerNumber; j++) {
        const innerDiv = document.createElement("div");
        if (i === 0) {
          result[j] += `${player[j]}: ${randomNumber()} `;
        } else {
          result[j] += `${randomNumber()} `;
        }
        innerDiv.textContent = result[j];
        div.append(innerDiv);
      }
      board.append(div);
    }

    winnerChecker(result, player);
  }

  function randomNumber() {
    const max = 9;
    const min = 0;
    let canGo = true;
    let destinyNumber = Math.random() * (max - min) + min;

    if (destinyNumber <= 3) {
      canGo = false;
    }

    return canGo ? "-" : "";
  }

  function winnerChecker(result, player) {
    const playerNumber = result.length;
    const racingResult = [];
    const winner = [];

    for (let i = 0; i < playerNumber; i++) {
      let count = 0;
      let position = 0;
      while (result[i].indexOf("-", position) !== -1) {
        position = result[i].indexOf("-", position) + 1;
        count++;
      }
      racingResult.push(count);
    }

    const winnerCount = Math.max(...racingResult);
    for (let i = 0; i < playerNumber; i++) {
      if (racingResult[i] === winnerCount) {
        winner.push(player[i]);
      }
    }

    makeResult(winner);
  }

  function makeResult(winner) {
    const h4 = document.createElement("h4");
    const div = document.createElement("div");
    let result = "최종 우승자: ";

    if (winner.length > 1) {
      for (let i = 0; i < winner.length; i++) {
        if (i !== winner.length - 1) {
          result += winner[i] + ", ";
        } else {
          result += winner[i];
        }
      }
    } else {
      result += winner[0];
    }

    h4.classList.add("result");
    div.classList.add("result");
    h4.textContent = "📄 실행 결과";
    div.textContent = result;
    board.append(h4);
    board.append(div);
  }

}

Car();
