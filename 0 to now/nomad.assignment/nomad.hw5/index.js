const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const finishList= document.querySelector(".finishList");
const idLi = toDolist.value;
const TODOS_LS ="toDos";
let toDos = [];

const FINISH_LS="finishLS";
let finishLS =[];


function deleteToDo(event){
    const btn = event.target; // target이 뭔지 모르겠음 >>event가 일어나는 것
    const li = btn.parentNode; //parentNode?
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
//finish로 넘기는 값 추가
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function moveP(idLi){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    backBtn.innerHTML = "👈👈";
    delBtn.addEventListener("click", deleteToDo);
      
    const span = document.createElement("span");
    
    liC.appendChild(span);
    liC.appendChild(backBtn);
    liC.appendChild(delBtn);
    
    
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "✔";
    checkBtn.addEventListener("click", moveP);
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id =newId;
    toDoList.appendChild(li);

const toDoObj = {
    text: text,
    id: newId
};
toDos.push(toDoObj);
saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos =JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();