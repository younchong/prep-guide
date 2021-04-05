const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler ={  

}
const title = document.getElementById("title");
function mouseEnter () {
    title.style.color = "#1abc9c";
    title.innerHTML = "The mouse is here!";
}
title.addEventListener('mouseenter', mouseEnter);

function mouseLeave() {
    title.style.color = "#3498db";
    title.innerHTML = "The mouse is gone!";
}
title.addEventListener('mouseleave', mouseLeave);

function contextMenu() {
    title.style.color ="#e74c3c";
    title.innerHTML = "That was right click!";
}
title.addEventListener('contextmenu', contextMenu);

function Resize() {
    title.style.color = "#9b59b6";
    title.innerHTML = "You just resized";
}
window.addEventListener('resize', Resize);