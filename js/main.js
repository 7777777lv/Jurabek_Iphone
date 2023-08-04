setInterval(function () {
  loader.style = "z-index: -1000000";
}, 4000);
silver.addEventListener("click", function () {
  iphone.style = "background-image: url(img/Silver.png);";
});

spaceBlack.addEventListener("click", function () {
  iphone.style = "background-image: url(img/space-black.png);";
});

gold.addEventListener("click", function () {
  iphone.style = "background-image: url(img/gold.png);";
});

touch.addEventListener("click", function () {
  lockScreen.style = "transform: translateY(-650px)";
});

touch.addEventListener("dblclick", function () {
  lockScreen.style = "transform: translateY(0px)";
});

clock.addEventListener("click", function () {
  clockDisplay.style = "z-index: 1; display:flex;";
});

stopwatchBtn.addEventListener("click", function () {
  stopwatch.style = "display: flex; z-index: 100;";
  alarmDisplay.style = "display: none; z-index: -1000;";
  currentTime.style = "z-index: -1000; display: none;";
  clockToolbar.style = "z-index: 101;";
});

alarmBtn.addEventListener("click", function () {
  alarmDisplay.style = "display: flex; z-index: 100;";
  currentTime.style = "z-index: -1000; display: none;";
  stopwatch.style = "display: none; z-index: -1000;";
  clockToolbar.style = "z-index: 101;";
});

//  slice(-2) extracts the last two elements in the sequence, adding "0" if string is a single char
function doubleDigits(num) {
  return ("0" + num).slice(-2);
}
// GET LOCAL TIME
function getCurrentTime() {
  const NOW = new Date();
  const HOUR = NOW.getHours();
  const MINUTES = NOW.getMinutes();
  const IS_AM = HOUR >= 0 && HOUR < 12;
  const FULL_TIME = `${HOUR % 12 === 0 ? 12 : HOUR % 12}:${doubleDigits(
    MINUTES
  )} ${IS_AM ? "AM" : "PM"}`;

  time_display.textContent = FULL_TIME;
  clearInterval(getCurrentTime, 1000);
}
setInterval(getCurrentTime, 1000);
