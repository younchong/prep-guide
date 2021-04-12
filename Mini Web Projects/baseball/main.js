function search(){
let id= document.getElementById("getNumber").value;
let board = document.getElementById("onBoard");
let miss = [];
miss.push(id);
return  board.innerHTML=miss;
}

function makeNumber(){
    let gang= [];
    gang.push(Math.floor(Math.random()*10));
    gang.push(Math.floor(Math.random()*10))
    gang.push(Math.floor(Math.random()*10))
    //gang.join
    return console.log(gang);
    }


document.getElementsByClassName("onBoard").innerHTML="<div>right?</div>";  

let id = document.getElementById("btn");
id.addEventListener("click", search);