import { Notify } from 'notiflix/build/notiflix-notify-aio'; //бібліотека замість alert

const promiseForm = document.querySelector('.form');

let VALUE_FIRST_DELAY = null;
let VALUE_DELAY_STEP = null;
let VALUE_AMOUNT = null;

let count = null;

//-------------------------------------------------------------
promiseForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  VALUE_FIRST_DELAY = form.elements.delay.value;
  VALUE_DELAY_STEP = form.elements.step.value;
  VALUE_AMOUNT = form.elements.amount.value;
  let step = Number(VALUE_FIRST_DELAY);

  setTimeout(() => {
    const setIntervalId = setInterval(() => {
      count += 1;

      if (count > VALUE_AMOUNT) {
        clearInterval(setIntervalId);
        Notify.warning('Припиняємо інтервал');
        count = 0;
        console.log('ОБНУЛЯЄМО count');
        return;
      }

      console.log(`Викликаємо функцію createPromise: '${count}'`);

      //console.log('STEP::', step);

      createPromise(count, step);

      step += Number(VALUE_DELAY_STEP);
    }, step);
  }, VALUE_FIRST_DELAY);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // console.log('POSITION:', position);
  // console.log('DELAY:', delay);
  if (shouldResolve) {
    // Fulfill
    Notify.success(`✅ Fulfilled promise ${position} in  ${delay}ms`);
    console.log(`✅ Fulfilled promise '${position}' in - ${delay}ms`);
  } else {
    // Reject
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise '${position}' in - ${delay}ms`);
  }
}
//--------------------------------

const createPromiseP = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    console.log('ТУТ ПРОМІС');

    if (shouldResolve) {
      resolve('Success!');
    } else {
      reject('Error!');
    }
  }, 5000);
});

createPromiseP
  .then(({ position, delay }) => {
    console.log(`✅ '2'Fulfilled promise '${position}' in '${delay}'ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ '2'Rejected promise ${position} in ${delay}ms`);
  });

//--------------------------------------
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//---*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-------
