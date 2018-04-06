// Функция создания элемента из шаблона.
export const getElementFromTemplate = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template;

  return container.content.cloneNode(true);
};
