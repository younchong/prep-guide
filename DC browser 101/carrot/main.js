const section = document.querySelector("section");
const imgs = document.querySelector(".imgs");
const startBtn = document.querySelector(".start");
const afterMsg = document.querySelector(".after");
const time = document.querySelector(".time");
const countTable = document.querySelector(".count");
const bugSound = document.querySelector("#bugPull");
const carrotSound = document.querySelector("#carrotPull");
const startSound = document.querySelector("#start");
const winSound = document.querySelector("#win");
const bgm = document.querySelector("#bg");
let stop;
let countDown;
let carrotCount;
let timer;

function makeBug(){
    const $bug = document.createElement("img");
    let randomX =   Math.round(Math.random()*(723-0)+0);
    let randomY =   Math.round(Math.random()*(361-200)+200);
    // 배경화면 마당 위에 top. left 위치


    $bug.setAttribute("src", "img/bug.png")
    $bug.setAttribute("style", `left:${randomX}px; top:${randomY}px`);
    $bug.setAttribute("data-id", "bug");
    imgs.append($bug);
        
}

function makeCarrot(){
    const $carrot = document.createElement("img");
    let randomX =   Math.round(Math.random()*(723-0)+0);
    let randomY =   Math.round(Math.random()*(361-200)+200);
    //각자 다르게 함수 설정한 이유는 random숫자를 다르게 하기 위해

    $carrot.setAttribute("src", "img/carrot.png")
    $carrot.setAttribute("style", `left:${randomX}px; top:${randomY}px`);
    $carrot.setAttribute("data-id", "carrot");
    imgs.append($carrot);
    
}

function timeOut(){
    if(countDown === 0 || stop === true){
        time.textContent = countDown;     
         bgm.pause();
         clearInterval(timer);
        /*
         afterMsg.setAttribute("style", `z-index: 1`);
        afterMsg.innerHTML = `
        <span>
        you lost
        </span>
        <button>
        <i data-id="again" class="fas fa-reply"></i>
        </button>
        ` 
        */    
    }else{
    time.textContent = countDown;
    countDown--;
}
    if(countDown === 0){
        afterMsg.setAttribute("style", `z-index: 1`);
        afterMsg.innerHTML = `
        <span>
        you lost, time over⏱
        </span>
        <button>
        <i data-id="again" class="fas fa-reply"></i>
        </button>
        ` 
        clearInterval(timer);
    }
}

function gamePlay(){
    startBtn.innerHTML = `<i class="fas fa-stop"></i>` 
    startBtn.setAttribute("data-id", "break");
    startSound.play();
    stop = false;
    countDown = 10;
    carrotCount = 10;
    timer = setInterval(timeOut, 1000);
    for(let i=0; i<10; i++){
    makeBug();
    makeCarrot();       
     };
     bgm.play();
     countTable.textContent = carrotCount;
}

    
section.addEventListener("click", (e)=> {    
    if(e.target.dataset.id ==="play"){
        gamePlay();
       }

    if(e.target.dataset.id === "break"){
        bgm.pause();
        afterMsg.setAttribute("style", `z-index: 1`);
        afterMsg.innerHTML = `
        <span>
        play again?
        </span>
        <button>
        <i data-id="again" class="fas fa-reply"></i>
        </button>
        `      
        stop = true;
    }

    if(e.target.dataset.id === "bug"){
        bugSound.play();
        stop = true;      
        afterMsg.setAttribute("style", `z-index: 1`);
        afterMsg.innerHTML = `
        <span>
        you lost, it's bug 🕷
        </span>
        <button>
        <i data-id="again" class="fas fa-reply"></i>
        </button>
        ` 
        
    }


    if(e.target.dataset.id === "carrot"){
        carrotSound.play();
        imgs.removeChild(e.target);
        carrotCount--;
        countTable.textContent = carrotCount;
        if(carrotCount ===0){
            stop = true;
            winSound.play();
            afterMsg.setAttribute("style", `z-index: 1`);
            afterMsg.innerHTML = `
            <button>
            <i data-id="again" class="fas fa-reply"></i>
            </button>
            <span>
            Are you rabbit?🐇
            </span>
            `
            winSound.play();
    }
    }

    if(e.target.dataset.id === "again"){
        while(imgs.hasChildNodes()){
            imgs.removeChild(imgs.firstChild);
        }
        afterMsg.removeAttribute("style");     
        gamePlay();       
    }
        
})