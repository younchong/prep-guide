const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress"),
    progressBar = player.querySelector(".progress__filled"),
    toggle = player.querySelector(".toggle"),
    skipButtons = player.querySelectorAll('[data-skip]'),
    ranges = player.querySelectorAll(".player__slider");

function playBtn(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function changeIcon(){
    const icon = this.paused ? "▶" : "⏸";
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeCtr(){
    video[this.name] = this.value;
    
}

function progressCtr(){
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
    
}

function changeProgress(e){
    const scrubTime = ( e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", playBtn);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
video.addEventListener("timeupdate", progressCtr);
toggle.addEventListener("click", playBtn);
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("change", rangeCtr))
ranges.forEach(range => range.addEventListener("mousemove", rangeCtr))

let ready = false;
progress.addEventListener("click", changeProgress);
progress.addEventListener("mousemove", (e)=> ready && changeProgress(e));
progress.addEventListener("mousedown", () => ready = true);
progress.addEventListener("mouseup", ()=> ready=true);
