// 'use strict';

(function () {
  const consts = {
    ALT_LEFT_KEYDOWN: 37,
    ALT_RIGHT_KEYDOWN: 39,
    isDebug: true
  };

  const central = document.querySelector(`.central`);

  const screens = [];
  [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`].forEach((el) => {
    screens.push(document.querySelector(`#` + el));
  });

  let numScreen = 1;

  const getTemplate = (num) => screens[num];

  const replaceContents = (el, num) => {
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

  const nextScreen = () => {
    if (numScreen < screens.length - 1) {
      numScreen++;
    }
    replaceContents(central, numScreen);
  };

  const prevScreen = () => {
    if (numScreen > 1) {
      numScreen--;
    }
    replaceContents(central, numScreen);
  };

  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === consts.ALT_RIGHT_KEYDOWN) {
      nextScreen();
    } else if (evt.keyCode === consts.ALT_LEFT_KEYDOWN) {
      prevScreen();
    }
  });

  replaceContents(central, 1);
})();
