import { Notify } from 'notiflix/build/notiflix-notify-aio'; //бібліотека замість alert

const promiseForm = document.querySelector('.form');

let VALUE_FIRST_DELAY = null;
let VALUE_DELAY_STEP = null;
let VALUE_AMOUNT = null;

let count = null;

//-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
         } else {
      reject({position, delay});
        }
  }, delay);
});}
//-------------------------------------------------------------

promiseForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  VALUE_FIRST_DELAY = form.elements.delay.value;
  VALUE_DELAY_STEP = form.elements.step.value;
  VALUE_AMOUNT = form.elements.amount.value;
  let step = Number(VALUE_FIRST_DELAY);

  console.log('CLICK handleSubmit')

  for(let i = 1; i <= VALUE_AMOUNT; i += 1) {
   const prom = createPromise(i, step);
   prom.then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise '${position}' in - ${delay}ms`)
   }).catch(({position, delay}) => {
    return Notify.failure(`❌ Rejected promise '${position}' in - ${delay}ms`)
   })
   step += Number(VALUE_DELAY_STEP);
  }
}



