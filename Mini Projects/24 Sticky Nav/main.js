const main = document.querySelector("#main");
const topOfNav = main.offsetTop;
const logo = document.querySelector(".logo");


function ctrMain(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = main.offsetHeight + "px";
        document.body.classList.add("scrolled");
        
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("scrolled");
        
    }

}

window.addEventListener("scroll", ctrMain)