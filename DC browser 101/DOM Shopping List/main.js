const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const container = document.querySelector(".container");
let box = [];

function makeList(e){
    if(e.keyCode === 13){
        box.push(input.value);
    const $li = document.createElement("li");
    const $btn = document.createElement("button");
    $li.setAttribute("id", `${box.length}`);
    $li.textContent = input.value;
    $btn.setAttribute("id", `${box.length}`);
    $btn.textContent = "π";
    ul.append($li);
    $li.append($btn);
    input.value =""; 
    
    
};

}



function removeList(e){
    let liId = document.getElementById(`${e.target.id}`);
    ul.removeChild(liId);
    
    
}
//btns.forEach(btn => btn.addEventListener("click", removeList))
input.addEventListener("keypress", makeList);
container.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        removeList(e);
    }}
    );

// μΌνλͺ©λ‘μ± κ°μ νκΈ° bublling μμλ£κ³  μμ 