const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let hue =0;
let change = true;
let bold= 1;
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.lineJoin ="round";
ctx.lineCap = "round";


let Drawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!Drawing) return;
    ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
    ctx.lineWidth = bold; 
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(bold>70 || bold<1){
        change = !change;
    }
    if(change){
        bold++
    }else{
        bold--
    }
    }



canvas.addEventListener("mousedown", (e) => {
    Drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => Drawing = false);
canvas.addEventListener("mouseout", () => Drawing = false);
