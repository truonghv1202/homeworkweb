export const e = (tagName, attributes, ...children) => {
  const el = document.createElement(tagName);

  Object.assign(el, attributes);

  el.append(...children);

  return el;
};
