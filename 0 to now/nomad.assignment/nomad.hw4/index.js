/*
const select = document.querySelector(".select"),
    currentValue = select.options[select.selectedIndex].value;
    
const USER_CT = "country";

function saveCountry(value) {
    localStorage.setItem(USER_CT, value);
}

function handleSubmit(event){
    event.preventDefault();
    saveCountry(currentValue);
    }

function askCountry(){
    select.addEventListener("select", handlesubmit);
}


function load(){
    const currentCountry = localStorage.getItem(USER_CT);
    if (currentCountry === null){
        askCountry();
    } else{
        saveCountry();
    }
}

function init() {
    load();    
}

init();
*/
const select = document.querySelector("select");

function handleChnage() {
    let value = select.options[select.selectedIndex].value;
    window.localStorage.setItem("country", value);
}

select.addEventListener("change", handleChnage);

