// <i class="fa-solid fa-pause"></i>
const $ = document.getElementById.bind(document);
const playButton = $("btn-play");
const pauseButton = $("btn-pause");
const stopButton = $("btn-stop");
const counterEl = document.querySelector(".counter");

let [hour, min, sec] = [0, 0, 0];
let clearTime;

function resetTimer() {
  [hour, min, sec] = [0, 0, 0];
  if (clearTime) {
    clearTimeout(clearTime);
  }
  counterEl.innerHTML = `00 : 00 : 00`;
}

function updateTimer() {
  sec += 1;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    hour++;
    min = 0;
  }
  let secs = sec < 10 ? "0" + sec : sec;
  let mins = min < 10 ? "0" + min : min;
  let hours = hour < 10 ? "0" + hour : hour;
  counterEl.innerHTML = `${hours} : ${mins} : ${secs}`;
  //   clearTime = setTimeout(() => {
  //     updateTimer();
  //   }, 1);
}

playButton.addEventListener("click", () => {
  playButton.classList.toggle("hidden");
  pauseButton.classList.toggle("hidden");
  clearTime = setInterval(updateTimer, 1000);
  //   updateTimer();
});

pauseButton.addEventListener("click", () => {
  playButton.classList.toggle("hidden");
  pauseButton.classList.toggle("hidden");
  clearInterval(clearTime);
  //   clearTimeout(clearTime);
});

stopButton.addEventListener("click", () => {
  playButton.classList.remove("hidden");
  pauseButton.classList.add("hidden");
  resetTimer();
});
