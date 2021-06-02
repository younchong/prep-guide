const hero = document.querySelector(".hero");
const title = hero.querySelector("h1");
const walk = 100;

function makeShadow(e){
    let x = e.offsetX,
        y = e.offsetY;
    const width = hero.offsetWidth,
        height= hero.offsetHeight;
if(this !== e.target){
    x= x + e.target.offsetLeft;
    y= y + e.target.offsetTop;
}  

 const shadowX= Math.round((x / width *walk) - (walk/2)),
        shadowY= Math.round((y / height *walk) - (walk/2));

 title.style.textShadow = `
 ${shadowX}px ${shadowY}px 0 rgba(255, 0, 255, 0.7),
 ${shadowX * -1}px ${shadowY}px 0 rgba(0, 255, 255, 0.7),
 ${shadowY}px ${shadowX-1}px 0 rgba(0, 0, 255, 0.7),
 ${shadowY *-1}px ${shadowX}px 0 rgba(255, 0, 0, 0.7)
 `;
 
}

hero.addEventListener("mousemove", makeShadow)