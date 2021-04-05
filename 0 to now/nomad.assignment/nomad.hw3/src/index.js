function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();
    /*
    let elapsed = xmasDay.getTime() - today.getTime();
    const elapsedSec = elapsed/1000; //xmasDay.getSeconds() - today.getUTCSeconds();
    const elapsedMin = elapsedSec/ 60;
    const elapsedHour = elapsedMin/ 60;
    const elapsedDay = Math.floor(elapsedHour/ 24);  //use directly
    
       

    //let fixHour = Math.floor((elapsedDay - Math.floor(elapsedDay))*24);
    let fixHour = today.getUTCHours() - xmasDay.getHours();
    let fixMin = Math.floor((elapsedHour - Math.floor(elapsedHour))*60);
    let fixSec = Math.floor((elapsedMin - Math.floor(elapsedMin))*60);
    
    const time = document.getElementById("time");
    time.innerText = 
    `${elapsedDay}d ${fixHour<10 ? `0${fixHour}` : fixHour}h ${fixMin<10 ? `0${fixMin}` : fixMin}m ${fixSec < 10 ? `0${fixSec}` : fixSec}s`;
*/
    let hours = today.getUTCHours() - xmasDay.getHours();
    let minutes = today.getUTCMinutes() - xmasDay.getHours();
    let seconds = today.getUTCSeconds() - xmasDay.getSeconds();
    let day = today.getUTCDay() - xmasDay.getDay();


    
    const time = document.getElementById("time");
    time.innerText =`${day}d ${hours < 10? `0${hours}` : hours}h ${minutes < 10? `0${minutes}` : minutes}m ${seconds < 10? `0${seconds}` : seconds}s`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    
}
init();

/*const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    

    */


