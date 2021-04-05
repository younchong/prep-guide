/*

document.querySelector('.btn2').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-2.png"></div>`
});

document.querySelector('.btn3').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-3.png"></div>`
});

document.querySelector('.btn1').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-1.png"></div>`
});

document.querySelector('.btn4').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-4.png"></div>`
});

document.querySelector('.btn5').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-5.png"></div>`
});
//DRY! btn앞 숫자 translate  변수만 조절해서 

document.querySelector('.next').addEventListener('click', function(){
    document.querySelector('.imgGroup').innerHTML=
});
*/


    let underBtn = document.querySelector('.underBtn');
    underBtn.addEventListener('click', function(event){
       let i = event.target.value;
       function changeImg(i){
        document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-${i}.png" value=${i}></div>`
       };
    
    if(i !== undefined){
        changeImg(i);
    }
});




document.querySelector('.next').addEventListener('click', function(){
    let i=document.getElementsByClassName('inner')[0].children[0].attributes[1].nodeValue;
    let num = parseInt(i);
    
    if(num<5){
        num=num+1;
        document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-${num}.png" value=${num}></div>`
        
    }else
    {     num=1;
        document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-${num}.png" value=${num}></div>`
        
    }
} );

document.querySelector('.prev').addEventListener('click',  function (){
    let i=document.getElementsByClassName('inner')[0].children[0].attributes[1].nodeValue;
    let num = parseInt(i);
    if(num>1){
        num=num-1;
        document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-${num}.png" value=${num}></div>`
        
    }else{
        num=5;
        document.querySelector('.imgGroup').innerHTML= `<div class = 'inner'><img src="images/image-${num}.png" value=${num}></div>`
        
    }
    
    
});

//21.03.30 finally finish!!! 많은걸 배웠다. 이제 js 구동할 수 있다!



