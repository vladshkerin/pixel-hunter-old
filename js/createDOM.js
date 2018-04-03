export const getElementFromTemplate = (str) => {
  const regexp = /<[a-z][a-z0-9]*>/gi;
  const regexpAll = /<\/?[a-z][a-z0-9]*>/gi;

  let elem;
  const tagName = str.match(regexp);
  if (tagName.length > 0) {
    elem = document.createElement(tagName[0].replace(/<*>?/gi, ``));
    elem.innerText = str.replace(regexpAll, ``);
  }

  return elem;
};
