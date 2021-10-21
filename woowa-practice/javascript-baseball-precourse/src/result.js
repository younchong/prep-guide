export default function makeBoard(result, input, count) {
  const board = document.querySelector("#app");
  const div = document.createElement("div");

  if (result === "정답") {
    board.append(div);
    div.id = "result";
    div.textContent = "🎉정답을 맞추셨습니다!🎉";

    return makeButton(board, "game-restart-button");
  } else if (count === 10) {
    board.append(div);
    div.id = "result";
    div.textContent = "틀렸습니다.😂"

    return makeButton(board, "game-restart-button");
  }

  board.append(div);
  div.textContent = `${result}, ${input}, count : ${count}`;
  div.id = "result";
}

function makeButton(parent, btnName) {
  const button = document.createElement("button");

  button.id = btnName;
  button.textContent = "게임 재시작";
  parent.append(button);

  return button;
}