const panels = document.querySelectorAll(".panel");
console.log(panels)

function toggleOpen(){
    this.classList.toggle("open");
}

function active(e){
    console.log(e.propertyName);
    if(e.propertyName === "flex-grow"){
        this.classList.toggle("active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

panels.forEach(panel => panel.addEventListener("transitionend", active));