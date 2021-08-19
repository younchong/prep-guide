const $startButton = document.querySelector(".start-button");
const $mainBoard = document.querySelector(".main-board");
const $cardElems = document.querySelectorAll(".card");
const $cardPlace = document.querySelector(".card-place");
const $resultBoard = document.querySelector(".result-board");
const $timer = document.querySelector(".left-time");
const $cardCounter = document.querySelector(".left-card");
const bgm = document.querySelector(".bgm");
const defaultUpdateTime = 1000;
const imgList = [
  "img/image1.jpeg",
  "img/image1.jpeg",
  "img/image2.jpeg",
  "img/image2.jpeg",
  "img/image3.jpeg",
  "img/image3.jpeg",
  "img/image4.jpeg",
  "img/image4.jpeg",
  "img/image5.jpeg",
  "img/image5.jpeg",
  "img/image6.jpeg",
  "img/image6.jpeg",
  "img/image7.jpeg",
  "img/image7.jpeg",
  "img/image8.jpeg",
  "img/image8.jpeg",
];
let isPlaying = false;
let time = 50;
let leftCard = 8;
let clickedCard = [];
let pickedImg = [];
let timeIntervalId;
let isWin;

function makeFrontSide() {
  const $cardsFront = document.querySelectorAll(".card-front");

  for (let i = 0; i < $cardsFront.length; i++) {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("src", "img/favicon.ico");
    $cardsFront[i].append(imgElem);
  }
}


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);

  for (let i = 0; i < $cardElems.length; i++) {
    const backSide = $cardElems[i].lastElementChild;
    const imgElem = document.createElement("img");
    $cardElems[i].setAttribute("data-order", i);
    imgElem.setAttribute("src", imgList[i]);
    backSide.append(imgElem);
  }
}

function handleCardClick(e) {
  if (clickedCard.length < 2 && e.currentTarget.classList.length === 1) {
    const clickedElem = e.currentTarget.dataset.order;
    const imgSrc = e.currentTarget.lastElementChild.firstChild.outerHTML;
    $cardElems[clickedElem].classList.add("open");
    clickedCard.push(clickedElem);
    pickedImg.push(imgSrc);

    if (clickedCard.length === 2 && pickedImg[0] !== pickedImg[1]) {
      const wrongAlarm = document.querySelector(".wrong-alarm");
      wrongAlarm.play();
      setTimeout(function () {
        $cardElems[parseInt(clickedCard[0])].classList.remove("open");
        $cardElems[parseInt(clickedCard[1])].classList.remove("open");
        clickedCard = [];
        pickedImg = [];
      }, defaultUpdateTime);
    } else if (clickedCard.length === 2 && pickedImg[0] === pickedImg[1]) {
      const correctAlarm = document.querySelector(".correct-alarm");
      correctAlarm.play();
      clickedCard = [];
      pickedImg = [];
      leftCard--;
      $cardCounter.textContent = `LEFT KEN : ${leftCard}`;
    }

    if (!leftCard) {
      const successAlarm = document.querySelector(".success-alarm");
      bgm.pause();
      successAlarm.play();
      isPlaying = false;
      isWin = true;
      finishHandler(isWin);
      clearInterval(timeIntervalId);
      $resultBoard.textContent = "KEN TOUCH THIS";
    }
  }
}

function finishHandler(result) {
  const imgElem = document.createElement("img");
  imgElem.classList.add("end");
  $cardPlace.classList.add("play");

  if (result) {
    imgElem.setAttribute("src", "img/success.png");
    $mainBoard.append(imgElem);
  } else {
    imgElem.setAttribute("src", "img/failure.jpeg");
    $mainBoard.append(imgElem);
  }
}

function handleTimer() {
  timeIntervalId = setInterval(function () {
    $timer.textContent = `TIME: ${time}`;
    time--;
    if (time < 0) {
      const failAlarm = document.querySelector(".fail-alarm");
      bgm.pause();
      failAlarm.play();
      clearInterval(timeIntervalId);
      isPlaying = false;
      isWin = false;
      finishHandler(isWin);
      $resultBoard.textContent = "KEN'T TOUCH THIS";
    }
  }, defaultUpdateTime);

}

function handleStartButton() {
  const end = document.querySelector(".end");
  if (!isPlaying) {
    isPlaying = true;
    time = 50;
    leftCard = 8;
    clickedCard = [];
    pickedImg = [];
    end && $mainBoard.removeChild(end);
    $cardElems[0].lastElementChild.firstChild && $cardElems.forEach(elem => elem.lastElementChild.firstChild.remove());
    $cardElems.forEach(elem => elem.classList.remove("open"));
    $startButton.textContent = "PLAY AGAIN";
    $cardCounter.textContent = `LEFT KEN : ${leftCard}`;
    bgm.play();
    handleTimer();
    shuffle(imgList);
    $resultBoard.textContent = "";
    setTimeout(() => { $cardPlace.classList.remove("play") }, 100);
  }
}

makeFrontSide();
$startButton.addEventListener("click", handleStartButton)
$cardElems.forEach(elem => elem.addEventListener("click", handleCardClick));