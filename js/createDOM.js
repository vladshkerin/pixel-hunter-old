// Функция создания элемента из шаблона.
export const getElementFromTemplate = (template) => {
  if (!template) {
    throw new Error(`Invalid argument function`);
  }

  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};
