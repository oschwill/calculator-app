export const body = document.querySelector('body');

export const getElements = () => {
  let elements = {};
  return (elements = {
    body: document.querySelector('body'),
    header: document.querySelector('.header'),
    toggleColor: document.querySelector('.toggle-color'),
    toggleBackground: document.querySelector('.header .toggle-switch input'),
    toggleThumb: document.querySelector('.header .toggle-switch input[type="range"]'),
    calcOutput: document.querySelector('.output'),
    calcInput: document.querySelector('.input'),
    calcButtons: document.querySelectorAll('.input button:not(.reset, .equal, .del)'),
    resetButton: document.querySelector('.input .reset'),
    equalButton: document.querySelector('.equal'),
    delButton: document.querySelector('.del'),
  });
};
