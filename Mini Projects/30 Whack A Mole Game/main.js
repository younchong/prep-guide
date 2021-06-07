const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let count = 0; 
let timeUp = false;

function randomTime(min, max){
 let random =Math.round(Math.random()*(max - min) + min);
 return random;
}

function randomHole(){
 let random = Math.floor(Math.random()*holes.length);
 let setHole = holes[random];
 //holes[random].classList.add("up");
 if(setHole === lastHole){
    console.log("same thing"); 
    return randomHole();
 }
 lastHole = setHole;
 return setHole;
}

function boom(){
    const random = randomTime(200, 1000);
    let wHole = randomHole();
    wHole.classList.add("up");
    
    setTimeout(()=>{
        wHole.classList.remove("up");
        if(!timeUp)boom();
    }, random);
}


function startGame(e){
    count = 0;
    scoreBoard.textContent = count;
    const random = randomTime(5000, 20000);
    boom();
    timeUp = false;
    setTimeout(()=> timeUp= true, random)
    
}

function counter(e){
    if(!e.isTrusted)return;
    
    count++;
    scoreBoard.textContent = count;
        
}

moles.forEach(mole => mole.addEventListener("click", counter));