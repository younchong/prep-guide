function debounce(func, wait=20, immediate =true){
    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate)func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow)func.apply(context, args);
        };
    };
//이해가 안됨 무슨, 무엇을 위한 코드인지

const slideImages = document.querySelectorAll(".slide-in");

function scrollCtr(e){
    slideImages.forEach(slideImage=> {
        const slideAt =(window.scrollY + window.innerHeight) - slideImage.height/2;
        const imgBottom = slideImage.offsetTop + slideImage.height;
        const halfImg = slideAt > slideImage.offsetTop;
        const scrollPast = window.scrollY < imgBottom;
        if(halfImg && scrollPast){
            slideImage.classList.add("active");
        }else{
            slideImage.classList.remove("active");
        }
        
    });
}

window.addEventListener("scroll", debounce(scrollCtr));