export default function randomNumber() {
  const randomBox = [];
  for (let i = 0; i < 3; i++) {
    let randNumb = Math.floor(Math.random() * 10);
    if (!randomBox.includes(randNumb)) {
      randomBox.push(randNumb);
    } else {
      i--;
    }
  }

  return randomBox.join("");
}