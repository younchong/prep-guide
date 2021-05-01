

function play(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    audio.currentTime = 0;
    let keyTouch = document.getElementById(`${e.keyCode}`) 
    keyTouch.classList.toggle("playing");
      
}


window.addEventListener("keydown", play);