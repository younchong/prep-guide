
let list= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ansArr= [];
for(let i=0; i<3; i++){
    let choice= list.splice(Math.random()*list.length, 1);
 ansArr[i]=choice;
}
function makeNumber(){
    
    for(let i=0; i<3; i++){
        let choice= list.splice(Math.random()*list.length, 1);
     ansArr[i]=parseInt(choice);
    }
    
    return console.log(ansArr);
    };

let startBtn= document.getElementById("startBtn");
startBtn.addEventListener("click", makeNumber);

function winSound(){
    let winSound= document.getElementById("winSound");
    winSound.play;
}

let count = 0;
let out=0;
let giveNumberArr= [];
function give(){
    let numbers = document.getElementById("giveNumber");
    let independence = numbers.value;
    giveNumberArr = independence.split("");
    count++;

    if(independence.length!=3){
        count--;
        alert("3자리 숫자를 입력해주세요")
    }

let strike = 0;
let ball = 0;


    if(count>10){
        independence=null;
        alert("over");
        location.reload();
    } 
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(ansArr[i]==giveNumberArr[j] && i===j){
                strike++;
                if(strike===3){
                alert("win")
                winSound();
                location.reload();}
            }else if(ansArr[i]==giveNumberArr[j]){
                ball++;
                
                }
            }
            
        }
        if(strike===0 && ball===0 && independence.length == 3){
            out++;
        }
        
        document.querySelector("#onBoard").innerHTML=`<div class=onBoard-status> ${independence} count: ${count}, strike: ${strike}, ball: ${ball}, out: ${out} </div>`
    }


let giveNumberBtn = document.getElementById("giveNumberBtn");
giveNumberBtn.addEventListener("click", give);

function tryagain(){
    location.reload();
}

document.querySelector("#tryAgain").addEventListener("click", tryagain);