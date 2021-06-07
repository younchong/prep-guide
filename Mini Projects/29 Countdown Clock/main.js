const displayTimeLeft = document.querySelector(".display__time-left");
const displayEndTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const custom = document.querySelector("#custom");
let countdown;

function timer(sec){
    let now = Date.now();
    let then = now + sec*1000;
    clearInterval(countdown);
    displayTime(sec);
    endTime(Math.round(sec/60));
    
    countdown = setInterval(()=>{
    const secondsLeft = Math.round((then- Date.now()) / 1000);
    if(secondsLeft <0)return;
    displayTime(secondsLeft);
}, 1000);
    
}

function displayTime(sec){
    const min = Math.floor(sec/60);
    const seconds = sec%60;
    const adjustedSec = seconds <10 ? '0' : '';
    displayTimeLeft.textContent = `${min} : ${adjustedSec}${seconds}`;
}

function endTime(minuate){
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let aftHour = hours + Math.round(minuate/60);
    let aftMin = min + minuate;
    let adjMin = aftMin<10 ? "0" : "";
    displayEndTime.textContent = `Come back at ${hours} : ${adjMin}${aftMin} `;
    
}

function checkout(){
    timer(this.dataset.time);
    
}

function forCus(e){
    e.preventDefault();
    timer((this.minutes.value)*60);
}

buttons.forEach(button => button.addEventListener("click", checkout));
custom.addEventListener("submit", forCus)