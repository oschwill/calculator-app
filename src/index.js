// UI
import renderHeader from './js/View/header';
import renderMain from './js/View/main';
import renderAttribution from './js/View/attribution';
import { getElements } from './js/View/baseElements';

// FUNCTIONS
import setTheme from './js/Model/colorSetter';

// CLASS
import Calculator from './js/Model/calculator';

// CSS
import './styles/styles.css';

/* PROPERTIES */
let calc, buttons, elements;

const buildSite = () => {
  renderHeader();
  renderMain();
  renderAttribution();

  // get elements
  elements = getElements();
  // set styles
  setTheme(elements);

  // init Calculator Functionality
  calc = new Calculator(elements);

  // create for all Buttons an array for event
  buttons = Array.from(elements.calcButtons);
  buttons.push(elements.resetButton, elements.equalButton, elements.delButton);
};

/* RUN SITE */
buildSite();

/* Eventlistener */
elements.toggleColor.addEventListener('change', (e) =>
  setTheme(elements, Number(elements.toggleColor.value))
);

buttons.forEach((b) => {
  b.addEventListener('click', (e) => {
    let bVal = b.innerText;
    // Show / Delete in Calc Output
    calc.showInput(bVal);
  });
});
