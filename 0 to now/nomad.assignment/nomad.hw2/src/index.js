//import "./styles.css";
const body = document.querySelector("body");

const colors = ["blue", "purple", "yellow"];



function Resize() {
    let wframe = window.innerWidth;
    if(wframe < 500){
        body.style.backgroundColor = colors[0];
    } else if(wframe >=500 && wframe < 650){
        body.style.backgroundColor = colors[1];
    } else{
        body.style.backgroundColor = colors[2];
    }

}

window.addEventListener("resize", Resize);


