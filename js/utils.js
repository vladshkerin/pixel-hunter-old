// Функция проверки выбора элемента чекбокса.
export const isChecked = (elem, name) => {
  if (!elem || !name) {
    throw new Error(`Arguments function is null`);
  }

  return elem.querySelector(`input[name="` + name + `"]:checked`);
};
