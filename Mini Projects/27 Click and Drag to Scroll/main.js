const slider = document.querySelector(".items");
let isHere;
let clickHere;
let scrollLeft;

slider.addEventListener("mousedown" , (e) =>{
    isHere = true;
    slider.classList.add("active");
    clickHere = e.pageX;
    scrollLeft = slider.scrollLeft;
    
})
slider.addEventListener("mouseup" , () =>{
    isHere= false;
    slider.classList.remove("active");
})
slider.addEventListener("mouseleave" , () =>{
    isHere= false;
    slider.classList.remove("active");
})
slider.addEventListener("mousemove" , (e) =>{
    if(!isHere) return;
    const moveHere = e.pageX;
    const move =(moveHere - clickHere)*3;
    slider.scrollLeft = scrollLeft - move;
   
 })