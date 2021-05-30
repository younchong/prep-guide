const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
const checkAll = document.querySelector("[name=all]");
const unCheck = document.querySelector("[name=nAll]");
const clear = document.querySelector("[name=clear]");

function submitCtr(e){
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        check : false
    };

    items.push(item);
    makeList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();

}

function makeList(plates = [], platesList){
    platesList.innerHTML= plates.map((plate, i) => {
        return`
        <li>
            <input type="checkbox" id="${i}" ${plate.check ? "checked" : ""} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');

}

function saveIn(item){
    localStorage.setItem("items", JSON.stringify(item));    
}


function cbCtr(e){    
    if( !items[e.target.id].check){
        items[e.target.id].check = true;
    }else{
        items[e.target.id].check = false;
    }

    localStorage.setItem("items", JSON.stringify(items));
}

function allCk(){
    const checkboxes = document.querySelectorAll("[type=checkbox]");
    for(let i=0; i<items.length; i++){
        items[i].check = true;
        checkboxes[i].checked = true;
    }
    localStorage.setItem("items", JSON.stringify(items));

}


function allNo(){
    const checkboxes = document.querySelectorAll("[type=checkbox]");
    for(let i=0; i<items.length; i++){
        items[i].check = false;
        checkboxes[i].checked = false;
    }
    localStorage.setItem("items", JSON.stringify(items));
}

function allClear(){
    console.log("last one");
    /*
    for(let i=0; i<items.length; i++){
        delete items[i];
    }
    */
   items= [];
    localStorage.setItem("items", JSON.stringify(items));
    makeList(items, itemsList);
}

addItems.addEventListener("submit", submitCtr);
itemsList.addEventListener("click", cbCtr);
checkAll.addEventListener("click", allCk);
unCheck.addEventListener("click", allNo);
clear.addEventListener("click", allClear);

makeList(items, itemsList);