// STOP WATCH

class Counter {
  constructor(minutes = 0, seconds = 0, milliseconds = 0) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;

    this.startTimer = function () {
      this.milliseconds++;
      if (this.milliseconds > 99) {
        this.seconds++;
        this.milliseconds = 0;
      }
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      }
    };
  }
}

let IS_COUNTING = false;
let INTERVAL;
let LAPS = [];
let CURRENT_COUNTER;
let MAIN_COUNTER = new Counter();

function doubleDigits(num) {
  return ("0" + num).slice(-2);
}

function updateHTML() {
  startBtn.style.display = IS_COUNTING ? "none" : "block";
  pauseBtn.style.display = IS_COUNTING ? "block" : "none";
  resetBtn.style.display = IS_COUNTING ? "none" : "block";
  lapBtn.style.display = IS_COUNTING ? "block" : "none";

  timer.innerHTML = `
      <span class = "minutes">${doubleDigits(
        MAIN_COUNTER.minutes
      )}</span>:<span class="seconds">${doubleDigits(
    MAIN_COUNTER.seconds
  )}</span>.<span class= "milliseconds">${doubleDigits(
    MAIN_COUNTER.milliseconds
  )}</span>
 `;
}

// TRACK LAPS
function updateLapHTML() {
  tracker.innerHTML = LAPS.map(
    (lap, index) => `
      <div class="lap-data">
       <span>Lap ${index + 1}</span>    <span>${doubleDigits(
      lap.minutes
    )}:${doubleDigits(lap.seconds)}:${doubleDigits(lap.milliseconds)}</span>
     </div>`
  )
    .reverse()
    .join(" ");
}

// CREATE && PUSH NEW LAP
function addLap() {
  CURRENT_COUNTER = new Counter();
  LAPS = [...LAPS, CURRENT_COUNTER];
}

lapBtn.addEventListener("click", addLap);

// START
startBtn.addEventListener("click", (event) => {
  IS_COUNTING = true;

  // only add new lap on first click
  // must hit lap button to add additional laps
  if (!LAPS.length) addLap();

  INTERVAL = setInterval(() => {
    MAIN_COUNTER.startTimer();
    CURRENT_COUNTER.startTimer();
    updateHTML();
    updateLapHTML();
  }, 10);
});

// PAUSE
pauseBtn.addEventListener("click", () => {
  IS_COUNTING = false;
  clearInterval(INTERVAL);
  updateHTML();
});

// RESET
resetBtn.addEventListener("click", () => {
  IS_COUNTING = false;
  MAIN_COUNTER.minutes = 0;
  MAIN_COUNTER.seconds = 0;
  MAIN_COUNTER.milliseconds = 0;
  LAPS = [];
  updateLapHTML();
  updateHTML();
  resetBtn.style.display = "none";
  lapBtn.style.display = "block";
});

stopwatchBack.addEventListener("click", function () {
  stopwatch.style = "display: none;";
  alarmDisplay.style = "display: none;";
  currentTime.style = "z-index: 10; display: block;";
  clockToolbar.style = "z-index: 101;";
});
