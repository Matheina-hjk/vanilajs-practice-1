import "./styles.css";

const h1 = document.querySelector("h1");
const body = document.body;​
const colors = ["#73C8A9", "#a83279", "#0b8793", "#29323c"];

function handleReisze {
  const currentSize = window.innerWidth;
  if (currentSize < 400) {
    h1.innerText="Oh, it's too small!";
    body.style.backgroundColor = colors[0];
  } else if (currentSize < 500) {
    h1.innerText ="Well..";
    body.style.backgroundColor = colors[1];
  } else if (currentSize < 600) {
    h1.innerText ="I like this size!";
    body.style.backgroundColor = colors[2];
  } else {
    h1.innerText ="Wow, it't too big!";
    body.style.backgroundColor = colors[3];
  }
}

window.addEventListener("resize", handleReisze);

const NINE_HOURS_MILLISECONDS = 32400000;
const clockTitle = document.querySelector("h4");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const distance = xmasDay - today;
  
  const days = Math.floor(distance / (1000 *60 *60 *24));
  const hours = Math.floor(distance / (1000*60*60) % 24);
  const minutes = Math.floor(distance / (1000*60) % 60 );
  const seconds = Math.floor(distance / 1000 %60);

  clockTitle.innerText = `${days<10 ? `0${days}` : days}d : ${hours  < 10 ? `0${hours }` : hours }h : ${minutes<10 ? `0${minutes}` : minutes}m : ${seconds <10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime,1000);
}
init();
