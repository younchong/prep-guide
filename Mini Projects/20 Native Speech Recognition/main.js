window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement("p");
const post = document.querySelector(".post");
post.appendChild(p);

recognition.addEventListener("result", e=> {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

    p.innerText = transcript;
    post.appendChild(p);
    if(e.results[0].isFinal){
        p = document.createElement("p");
        post.appendChild(p);
    }

    if(transcript.includes("바보")){
        p = document.createElement("p");
        p.innerText = "😁😁😁😁";
        post.appendChild(p);
    }
    console.log(transcript);
    
});

recognition.start();


recognition.addEventListener("end", recognition.start);