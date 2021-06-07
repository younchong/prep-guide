const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let click;


function speedController(e){
    if(!click)return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent*100) + "%";
    const playRate = percent*(max-min) + min;
    bar.textContent = playRate.toFixed(2) + "x";
    bar.style.height =height;
    video.playbackRate = playRate;
    
}


speed.addEventListener("mouseleave", ()=>{click=false;})
speed.addEventListener("mouseup", ()=>{click=false;})
speed.addEventListener("mousedown", ()=>{click=true;})
speed.addEventListener("mousemove", speedController)