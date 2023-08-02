(function () {
  let ctx = time.getContext("2d"),
    cWidth = ctx.canvas.width,
    cHeight = ctx.canvas.height,
    hours = Array(12)
      .fill(undefined)
      .map((_, index) => index + 1),
    t;

  class Clock {
    constructor() {
      this.r = cWidth / 2 - 20;
    }

    init() {
      this.draw();
      t = setInterval(this.draw.bind(this), 1000);
    }

    draw() {
      ctx.clearRect(0, 0, cWidth, cHeight);
      const { hours, minutes, seconds } = getTime();

      ctx.save();
      this.drawPanel();
      this.drawHourNums();

      this.drawSecondIndicator(seconds);
      this.drawMinuteIndicator(minutes);
      this.drawHourIndicator(hours, minutes);
      this.drawCentralPointer();
      ctx.restore();
    }

    drawPanel() {
      ctx.beginPath();
      ctx.translate(cWidth / 2, cWidth / 2);
      ctx.fillStyle = "#fff";
      ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
      ctx.fill();
    }

    drawHourNums() {
      ctx.font = "40px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";

      hours.forEach((text, k) => {
        let rad = ((2 * Math.PI) / 12) * (k - 2);
        let x = Math.cos(rad) * (this.r - 40);
        let y = Math.sin(rad) * (this.r - 40);
        ctx.beginPath();
        ctx.fillText(text, x, y);
      });
    }

    drawCentralPointer() {
      ctx.beginPath();
      ctx.fillStyle = "#333";
      ctx.arc(0, 0, 13, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "#666";
      ctx.arc(0, 0, 6, 0, 2 * Math.PI);
      ctx.fill();
    }

    drawHourIndicator(hours, minutes) {
      const rad = ((2 * Math.PI) / 12) * hours,
        mRad = ((2 * Math.PI) / 12 / 60) * minutes;
      ctx.save();

      ctx.rotate(rad + mRad);

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      ctx.moveTo(0, 0);
      ctx.lineTo(0, -this.r / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 7;
      ctx.moveTo(0, -this.r / 5);
      ctx.lineTo(0, -this.r / 1.8);
      ctx.stroke();

      ctx.restore();
    }
    drawMinuteIndicator(minutes) {
      const rad = ((2 * Math.PI) / 60) * minutes;
      ctx.save();
      ctx.rotate(rad);

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -this.r / 1.5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 7;

      ctx.moveTo(0, -this.r / 5);
      ctx.lineTo(0, -this.r / 1.2);
      ctx.stroke();
      ctx.restore();
    }
    drawSecondIndicator(seconds) {
      const rad = ((2 * Math.PI) / 60) * seconds;
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "orange";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.rotate(rad);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -this.r / 1.1);
      ctx.stroke();
      ctx.restore();
    }
  }

  function getTime() {
    let d = new Date();
    return {
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };
  }

  window.Clock = Clock;
})();

new Clock().init();
