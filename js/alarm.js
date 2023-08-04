let alarmTime;
let ringtone = new Audio("./audio/iphone_alarm.mp3");
let isAlarmSet = false;

alarmBack.addEventListener("click", function () {
  alarmDisplay.style = "display: none;";
  currentTime.style = "z-index: 10; display: block;";
  clockToolbar.style = "z-index: 101;";
  stopwatch.style = "display: none;";
});

setInterval(() => {
  let date = new Date();
  (h = date.getHours()),
    (m = date.getMinutes()),
    (s = date.getSeconds()),
    (ampm = "AM");

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  alarmCurrentTime.textContent = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    timeSelectBlock.classList.remove("disable");
    setAlarmBtn.textContent = "Set Alarm";
    return (isAlarmSet = false);
  }
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please, select a valid to set Alarm!");
  }
  alarmTime = time;
  isAlarmSet = true;
  timeSelectBlock.classList.add("disable");
  setAlarmBtn.textContent = "Clear Alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);

