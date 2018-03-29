'use strict';

(function () {
  const consts = {
    ALT_LEFT_KEYDOWN: 37,
    ALT_RIGHT_KEYDOWN: 39,
    isDebug: true
  };

  const central = document.querySelector(`.central`);

  const screens = [];
  [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`]
    .forEach((el) => screens.push(document.querySelector(`#` + el)));

  let num_screen = 1;

  const getTemplate = (num) => screens[num];

  const replace_contents = (el, num) => {
    if (consts.isDebug) {
      console.log(el);
      console.log(num);
    }

    if (el === null) {
      throw new Error(`Element is null`);
    }

    const templ = getTemplate(num);
    if (templ === null) {
      throw new Error(`Template is null`);
    }

    central.innerHTML = ``;
    central.appendChild(templ.content.cloneNode(true));
  };

  const next_screen = () => {
    if (num_screen < screens.length - 1) {
      num_screen++;
    }
    replace_contents(central, num_screen);
  };

  const prev_screen = () => {
    if (num_screen > 1) {
      num_screen--;
    }
    replace_contents(central, num_screen);
  };

  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === consts.ALT_RIGHT_KEYDOWN) {
      if (consts.isDebug) {
        console.log(`press ALT_RIGHT_KEYDOWN`);
      }
      next_screen();
    } else if (evt.keyCode === consts.ALT_LEFT_KEYDOWN) {
      if (consts.isDebug) {
        console.log(`press ALT_LEFT_KEYDOWN`);
      }
      prev_screen()
    }
  });

  replace_contents(central, 1);
})();
