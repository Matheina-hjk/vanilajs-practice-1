const h1 = document.querySelector("h1");
const backgroundColors = ["#73C8A9", "#a83279", "#0b8793", "#29323c"];
const body = document.body;​

const superEventHandler = {
  handleEnter: function() {
    h1.innerText = "I'm here!";
  },
  handleLeave: function() {
    h1.innerText = "Bye";
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);

function handlerReisze() {
  const handlerReisze = window.innerWidth;
  if (handlerReisze < 400) {
    body.style.backgroundColor = colors[0];
  } else if (handlerReisze < 500) {
    body.style.backgroundColor = colors[1];
  } else if (handlerReisze < 600) {
    body.style.backgroundColor = colors[2];
  } else {
    body.style.backgroundColor = colors[3];
  }
}

window.addEventListener("resize", handlerReisze);
