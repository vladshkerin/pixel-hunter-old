// Функция отрисовки переданного блока на страницу.
export const drawBlock = (elem) => {
  if (!elem) {
    throw new Error(`Argument function is null`);
  }

  const central = document.querySelector(`.central`);
  central.innerHTML = ``;
  central.appendChild(elem);
};
