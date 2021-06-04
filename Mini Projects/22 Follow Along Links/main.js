const a = document.querySelectorAll("a");

const span = document.createElement("span");
span.classList.add("highlight");
document.body.append(span);

function highlight(){
    const sizeInfo = this.getBoundingClientRect();
    const aSize = {
        width : sizeInfo.width,
        height : sizeInfo.height,
        top : sizeInfo.top + scrollY,
        left : sizeInfo.left + scrollX
    };

    span.style.width = `${aSize.width}px`;
    span.style.height = `${aSize.height}px`;
    span.style.transform = ` translate(${aSize.left}px, ${aSize.top}px)`;
    
}


a.forEach(a => {a.addEventListener("mouseenter", highlight)});