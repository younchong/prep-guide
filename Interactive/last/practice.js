(function(){
    const stageElem = document.querySelector(".stage");
    const houseElem = document.querySelector(".house");
    const barElem = document.querySelector(".progress-bar");
    const selectElem = document.querySelector(".select-character");
    let maxScrollValue;

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    function move(){
        let scrollPer = pageYOffset / maxScrollValue;
        let moveForward = scrollPer * 980 - 490;
        houseElem.style.transform =`translateZ(${moveForward}vw)`;
        
        barElem.style.width = `${scrollPer* 100}%`;
    }
   
    function mouseMove(e){
        let x = -1 + (e.clientX / window.innerWidth) * 2;
        let y = 1 - (e.clientY / window.innerHeight) * 2;
        //식 이해하자
        stageElem.style.transform =`rotateY(${x * 5}deg) rotateX(${y * 5}deg)`;
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("scroll", move);
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    stageElem.addEventListener("click", function(e){
        new PracCharacter({
            xPos : e.clientX / window.innerWidth * 100,
            speed : Math.random() * 0.5 + 0.2
        });
    });
    
    selectElem.addEventListener("click", function(e){
        let value =e.target.getAttribute("data-char");
        document.querySelector("body").setAttribute("data-char", value);
    })

})();