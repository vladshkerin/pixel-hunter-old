// Функция отрисовки переданного блока на страницу.
export const drawBlock = (elem) => {
  if (!elem) {
    throw new Error(`Invalid argument function`);
  }

  const central = document.querySelector(`.central`);
  central.innerHTML = ``;
  central.appendChild(elem);
};
