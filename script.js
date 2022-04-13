'use strict';

/////////////////////////////////////////////////
// DATA
const items = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

////////////////////////////////////////////////
// ELEMENTS

const tracingEl = document.querySelector('.tracing');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-item');

////////////////////////////////////////////////
// CREATE CARD

const newCard = function (item, timeframe = 'weekly') {
  const marker = item.title.toLowerCase().replaceAll(' ', '-');
  const times = { weekly: 'Week', daily: 'Day', monthly: 'Month' };
  const timeLower = timeframe.toLowerCase();

  return `
    <li class="time--card ${marker}--color">
      <div class="image-wrap">
        <img src="./images/icon-${marker}.svg" alt="" aria-hidden="true" />
      </div>
      <div class="content">
        <header>
          <h2 class="title">${item.title}</h2>
          <a href="#"
            ><img src="./images/icon-ellipsis.svg" alt="options"
          /></a>
        </header>

        <div class="info">
          <p class="hours">${item.timeframes[timeLower].current}hrs</p>
          <small class="last--hours">Last ${times[timeLower]} - ${item.timeframes[timeLower].previous}hrs</small>
        </div>
      </div>
    </li>
  `;
};

const updateUI = function (items, timeframe, lable) {
  tracingEl.innerHTML = '';

  items.forEach(item => {
    const el = newCard(item, timeframe, lable);
    tracingEl.insertAdjacentHTML('beforeend', el);
  });
};

updateUI(items);

menu.addEventListener('click', e => {
  if (e.target.classList.contains('link') === false) return;

  e.preventDefault();

  const link = e.target;
  links.forEach(el => el.classList.remove('active'));

  link.parentNode.classList.add('active');

  updateUI(items, link.textContent);
});
