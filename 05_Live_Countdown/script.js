const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();

  const remainTime = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(remainTime / day);
  const h = Math.floor((remainTime % day) / hour);
  const m = Math.floor((remainTime % hour) / minute);
  const s = Math.floor((remainTime % minute) / second);

  dayEl.innerHTML = d;
  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;

  setTimeout(updateCountdown, 1000);
}
