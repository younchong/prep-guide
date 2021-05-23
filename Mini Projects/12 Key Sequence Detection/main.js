const box = [];
const secretWord = "chong";
function tell(e){
    
    box.push(e.key);
    
    box.splice(-secretWord.length-1, box.length-secretWord.length )
    console.log(box.join(""));
    if(box.join('').includes(secretWord)){
        console.log("you made it");
    }
}

window.addEventListener("keyup", tell)