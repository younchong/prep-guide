
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


let count = 0;
let giveNumberArr= [];
function give(){
    let numbers = document.getElementById("giveNumber");
    let independence = numbers.value;
    giveNumberArr = independence.split("");
    console.log(giveNumberArr);
    count++;
    

let strike = 0;
let ball = 0;
let out=0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(ansArr[i]==giveNumberArr[j] && i===j){
                strike++;
                if(strike===3){
                console.error("win")}
            }else if(ansArr[i]==giveNumberArr[j]){
                ball++;
                
                }else if(ansArr[i]!=giveNumberArr[j] && i!==j){
                    out++;
                }
            }
            
        }
        console.error("count : ", count, "strike :", strike, "ball : ", ball, "out : ", out );
    }


let giveNumberBtn = document.getElementById("giveNumberBtn");
giveNumberBtn.addEventListener("click", give);

