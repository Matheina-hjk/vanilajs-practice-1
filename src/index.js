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
