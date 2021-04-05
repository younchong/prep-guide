document.getElementById="imgId".src=mainInfo();
function mainInfo(){
let imgSrc;
for(let i=1; i<=5; i++) {
    if(i<6){
        imgSrc =`/images/image-"${i}".png`;
    }else{
        i=1;
    }
}
return imgSrc;
}

function setEventListener(){
    const next = document.querySelector('.next');
    next.addEventListener('click', mainInfo());
}

function changeImag(){
    return `
    /images/image-"${i}".png
    `;
}