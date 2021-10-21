import randomNumber from './random.js';
import makeBoard from './result.js';
import compareNumber from './compare.js';
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    const computerInputArr = computerInputNumbers.split("");
    const userInputArr = userInputNumbers.split("");
    let answer = compareNumber(computerInputArr, userInputArr);

    return answer;
  }
}

function restartController(button) {
  let box = document.querySelectorAll("#result");

  for (let i = 0; i < box.length; i++) {
    box[i].remove();
    i === box.length - 1 ? button.remove() : null;
  }

}

function submitController() {
  const Baseball = new BaseballGame();
  const submit = document.querySelector("#submit");
  const input = document.querySelector("#user-input");
  let randomNum = randomNumber();
  let count = 0;

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let result = Baseball.play(randomNum, input.value);

    if (result) {
      count++;
      let btn = makeBoard(result, input.value, count);
      btn ? btn.addEventListener("click", () => {
        restartController(btn); count = 0; randomNum = randomNumber();
      }) : 0;
    }

    input.value = "";
  })
}
submitController();
