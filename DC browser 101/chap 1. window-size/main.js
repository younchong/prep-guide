const screen = document.querySelector(".screen"),
    outer = document.querySelector(".outer"),
    inner = document.querySelector(".inner"),
    client = document.querySelector(".client"),
    html = document.querySelector("html");
    
    function sizeChange(){
        screen.textContent = `window.screen : ${window.screen.width}, ${window.screen.height}`;
        outer.textContent = `window.outer : ${window.outerWidth}, ${window.outerHeight}`;
        inner.textContent = `window.inner : ${window.innerWidth}, ${window.innerHeight}`;
        client.textContent =`documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
    };


window.addEventListener("resize", sizeChange);

sizeChange();