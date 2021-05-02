


function play(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)return;
    audio.play();
    audio.currentTime = 0;
    let keyTouch = document.getElementById(`${e.keyCode}`) 
    keyTouch.classList.toggle("playing");
    
         
}
/*
function removePlaying(e){
console.log(e.propertyName);
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach(key => key.addEventListener("transitionend", function(e){console.log(e)}));
i don't know why?
*/
window.addEventListener("keydown", play);