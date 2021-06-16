const text = document.querySelector(".mouseText");
const horizon = document.querySelector(".horizon");
const perpendicular = document.querySelector(".perpen");

function forMouse(e){
    let x = e.pageX;
    let y = e.pageY;
    text.innerHTML = `<img src="img/target.png"/> ${x}px, ${y}px`;
    text.style.transform = `translate(${x - 60}px, ${y-60}px)`;
    
    horizon.style.transform =`translateY(${y}px)`;
    perpendicular.style.transform =`translateX(${x}px)`;
   
    
    
    
}

window.addEventListener("mousemove", forMouse)

//top, left로 변경하면 layout까지 일어나서 성능개선을 위해 transform으로 변경