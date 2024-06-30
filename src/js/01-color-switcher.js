const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);
stop.disabled = true;

let startId = null;

function onStart() {
  console.log('click start');
  start.disabled = true; //кнопка НЕ активна (disabled)
  stop.disabled = false;

  body.style.backgroundColor = getRandomHexColor();

  startId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  console.log('click stop');
  start.disabled = false; //кнопка Активна (disabled)
  stop.disabled = true;

  clearInterval(startId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
