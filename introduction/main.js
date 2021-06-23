const steps = document.querySelectorAll(".step");
const graphicItems = document.querySelectorAll(".graphic-item");
let currentImg;

function makeIndex(){
    for(let i=0; i<steps.length; i++){
        steps[i].setAttribute("data-index", i);
        graphicItems[i].setAttribute("data-index", i);

    }
}

function changeImg(){
    let step
    let rect;

    
    for(let i=0; i<steps.length; i++){
        step = steps[i]
        rect =step.getBoundingClientRect();  
        
        if( rect.top>window.innerHeight * 0.1 && rect.top<window.innerHeight * 0.8){
            
            if(currentImg){
                currentImg.classList.remove("visible");
            }

            currentImg = graphicItems[step.dataset.index];
            currentImg.classList.add("visible");
        }
    }
}

function init(){
    makeIndex();
}

window.addEventListener("scroll", changeImg);
init();
