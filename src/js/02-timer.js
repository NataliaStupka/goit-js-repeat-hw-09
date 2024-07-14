import flatpickr from 'flatpickr'; //бібліотека календар
import 'flatpickr/dist/flatpickr.min.css'; //стилі до бібліотеки

import { Notify } from 'notiflix/build/notiflix-notify-aio'; //бібліотека замість alert

refs = {
  startBtn: document.querySelector('[data-start]'),
  //таймер:
  daysTimer: document.querySelector('[data-days]'),
  hoursTimer: document.querySelector('[data-hours]'),
  minutesTimer: document.querySelector('[data-minutes]'),
  secondsTimer: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true; //спочатку кнопка не активна

//бібліотека доп опції, другим аргументом-----
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentTime = selectedDates[0].getTime(); //вибрана в ms від 01.01.70р

    console.log('сьогоднішня в ms:', Date.now());
    console.log('вибрана в ms:', currentTime);

    //перевірка, як вибрано минулу дату то виходимо
    if (Date.now() > currentTime) {
      console.log('Вибрано Минулий час');
      Notify.failure('Please choose a date in the future');
      return;
    }
    //якщо пройшло по умові
    refs.startBtn.disabled = false;

    refs.startBtn.addEventListener('click', () => {
      console.log('click start');
      timer.start(currentTime);
    });
  },
};

// на якому елементі ініціалізують та необов'язковий об'єкт параметрів.
flatpickr('input[type="text"]', options);
//--------

const timer = {
  intervalId: null, // для зупинки інтервалу

  //метод початок таймера
  start(value) {
    refs.startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      let startTime = Date.now(); // Поточний час
      const deltaTime = value - startTime; //різниця часу

      if (deltaTime <= 0) {
        console.log('STOP Timer');
        clearInterval(this.intervalId);
        Notify.info('Час закінчився');

        return;
      }
      const time = convertMs(deltaTime); //різниця у звичному форматі

      updateClockface(time); //малюємо інтерфейс
    }, 1000);
  },
};

//малюємо інтерфейс
function updateClockface({ days, hours, minutes, seconds }) {
  refs.daysTimer.textContent = String(days).padStart(2, '0');
  refs.hoursTimer.textContent = String(hours).padStart(2, '0');
  refs.minutesTimer.textContent = String(minutes).padStart(2, '0');
  refs.secondsTimer.textContent = String(seconds).padStart(2, '0');
}

//=*=*=* готова функція для пірахунку значень (звичний формат) =*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
