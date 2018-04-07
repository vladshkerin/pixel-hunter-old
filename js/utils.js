// Функция проверки выбора элемента чекбокса.
export const isChecked = (elem, name) => {
  if (!elem || !name) {
    throw new Error(`Invalid arguments function`);
  }

  return elem.querySelector(`input[name="` + name + `"]:checked`);
};
