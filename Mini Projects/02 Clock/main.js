const hour = document.getElementById("hour"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

const clock= document.querySelector(".clock");    

function moveClock(){
    
const today = new Date(),
tHourDeg = today.getHours()*30+90,
tMinDeg = today.getMinutes()*6+90,
tSecDeg = today.getSeconds()*6+90;

    sec.style.transform =`rotate(${tSecDeg}deg)`;
    min.style.transform =`rotate(${tMinDeg}deg)`;
    hour.style.transform=`rotate(${tHourDeg}deg)`;
    if(today.getSeconds()==0){
        clock.style.transform = "scale(1.2)";
    }
    if(today.getSeconds()==1){
        clock.style.transform = "scale(1)";
    }
}

setInterval(moveClock, 1000);