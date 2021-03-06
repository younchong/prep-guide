const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode =>{
        const [min, secs] = timeCode.split(":").map(parseFloat);
        return (min * 60) + secs;
        
    })
    .reduce((total, vidSecs) => total + vidSecs);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const minutes = Math.floor(secondsLeft /60);
    secondsLeft = secondsLeft % 60;
    console.log(hours, minutes, secondsLeft);



