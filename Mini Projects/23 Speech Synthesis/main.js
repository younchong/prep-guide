const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector("[name=text]").value;
  const textArea = document.querySelector("[name=text]");
    const inputAll = document.querySelectorAll("input");
  function changeVoice(){
    voices= this.getVoices();
     voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name}  (${voice.lang})</option>`)
        .join("");   
  }

function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    speak();    
}

function textChange(){
    msg.text = textArea.value;
}

function changeValue(){
    msg[this.name] = this.value;
    speak();    
}

inputAll.forEach(input => input.addEventListener("change", changeValue));

function speak(startOver = true){
    speechSynthesis.cancel();
    if(startOver){
    speechSynthesis.speak(msg)};
}

speechSynthesis.addEventListener("voiceschanged", changeVoice);
voicesDropdown.addEventListener("change", setVoice);
textArea.addEventListener("change", textChange);
speakButton.addEventListener("click", speak)
stopButton.addEventListener("click", function(){
    speak(startOver = false);
})
