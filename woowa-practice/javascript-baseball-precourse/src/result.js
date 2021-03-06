export default function makeBoard(result, input, count) {
  const board = document.querySelector("#app");
  const div = document.createElement("div");

  if (result === "μ λ΅") {
    board.append(div);
    div.id = "result";
    div.textContent = "πμ λ΅μ λ§μΆμ¨μ΅λλ€!π";

    return makeButton(board, "game-restart-button");
  } else if (count === 10) {
    board.append(div);
    div.id = "result";
    div.textContent = "νλ Έμ΅λλ€.π"

    return makeButton(board, "game-restart-button");
  }

  board.append(div);
  div.textContent = `${result}, ${input}, count : ${count}`;
  div.id = "result";
}

function makeButton(parent, btnName) {
  const button = document.createElement("button");

  button.id = btnName;
  button.textContent = "κ²μ μ¬μμ";
  parent.append(button);

  return button;
}