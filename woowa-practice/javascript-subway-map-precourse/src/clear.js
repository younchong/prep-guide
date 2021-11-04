export default function clearDiv() {
  const app = document.querySelector("#app");
  if (app.children.length > 5) {
    for (let i = 5; i < app.children.length; i++) {
      app.children[i].remove();
    }
  }
}