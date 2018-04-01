{
  const KEY_CODES = {
    LEFT_KEYDOWN: 37,
    RIGHT_KEYDOWN: 39,
  };

  const screens = [];
  document.querySelectorAll(`template`).forEach((elem) => screens.push(elem));

  const central = document.querySelector(`.central`);

  let numScreen = 1;

  const replaceContents = (elem) => {
    const template = screens[numScreen];
    if (template === null) {
      throw new Error(`Template is null`);
    }

    elem.innerHTML = ``;
    elem.appendChild(template.content.cloneNode(true));
  };

  const nextScreen = (elem) => {
    if (numScreen < screens.length - 1) {
      numScreen++;
    }
    replaceContents(elem, numScreen);
  };

  const prevScreen = (elem) => {
    if (numScreen > 1) {
      numScreen--;
    }
    replaceContents(elem, numScreen);
  };

  document.addEventListener(`keydown`, (evt) => {
    if (evt.altKey && evt.keyCode === KEY_CODES.RIGHT_KEYDOWN) {
      nextScreen(central);
    } else if (evt.altKey && evt.keyCode === KEY_CODES.LEFT_KEYDOWN) {
      prevScreen(central);
    }
  });

  replaceContents(central);
}
