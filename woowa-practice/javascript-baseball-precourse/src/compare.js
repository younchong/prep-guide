export default function compareNumber(answerArr, inputArr) {
  let strike = 0;
  let ball = 0;
  let answer = null;
  let isDifferent = true;
  let isEnough = inputArr.length === 3 ? true : false;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr.indexOf(inputArr[i]) !== inputArr.lastIndexOf(inputArr[i])) {
      isDifferent = false;
      break;
    }
  }

  if (!isEnough || !isDifferent) {
    alert("1~9까지의 수 중복없이 3개 입력해주세요");

    return answer = null;
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (answerArr.includes(inputArr[i])) {
      answerArr[i] === inputArr[i] ? strike++ : ball++;
    }
  }

  if (strike === 3) {
    answer = "정답";
  } else if (strike && ball) {
    answer = `${ball}볼 ${strike}스트라이크`;
  } else if (strike) {
    answer = strike + "스트라이크";
  } else if (ball) {
    answer = ball + "볼";
  } else {
    answer = "낫씽";
  }

  return answer;
}