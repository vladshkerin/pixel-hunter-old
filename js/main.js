{
  const KEY_CODES = {
    LEFT_KEYDOWN: 37,
    RIGHT_KEYDOWN: 39,
  };

  const central = document.querySelector(`.central`);

  const screens = [];
  document.querySelectorAll(`template`).forEach((el) => screens.push(el));

  let numScreen = 1;

  const getTemplate = (num) => screens[num];

  const replaceContents = (el, num) => {
    if (el === null) {
      throw new Error(`Element is null`);
    }

    const template = getTemplate(num);
    if (template === null) {
      throw new Error(`Template is null`);
    }

    central.innerHTML = ``;
    central.appendChild(template.content.cloneNode(true));
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

  document.addEventListener(`keydown`, (evt) => {
    if (evt.altKey && evt.keyCode === KEY_CODES.RIGHT_KEYDOWN) {
      nextScreen();
    } else if (evt.altKey && evt.keyCode === KEY_CODES.LEFT_KEYDOWN) {
      prevScreen();
    }
  });

  replaceContents(central, 1);
}
