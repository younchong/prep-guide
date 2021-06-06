const trigger = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function enter(){
    this.classList.add("trigger-enter");
    this.classList.add("trigger-enter-active");
    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");
    const dropdownInfo = dropdown.getBoundingClientRect();
    
    const navInfo = nav.getBoundingClientRect();

    const backInfo ={
        width: dropdownInfo.width,
        height: dropdownInfo.height,
        x : dropdownInfo.left - navInfo.left,
        y : dropdownInfo.top - navInfo.top
    };
    
    background.style.setProperty("width", `${backInfo.width}px`);
    background.style.setProperty("height", `${backInfo.height}px`);
    background.style.setProperty("transform", `translate(${backInfo.x}px, ${backInfo.y}px)`);   
}

function out(){
    this.classList.remove("trigger-enter");
    this.classList.remove("trigger-enter-active");
    background.classList.remove("open");    
}

trigger.forEach(li => li.addEventListener("mouseenter", enter));
trigger.forEach(li => li.addEventListener("mouseleave", out));
