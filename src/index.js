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

/* CONTAINER */
let elements = null;
const buttons = document.querySelector('button');

/* PROPERTIES */
let calc;

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
};

/* RUN SITE */
buildSite();

/* Eventlistener */
elements.toggleColor.addEventListener('change', (e) =>
  setTheme(elements, Number(elements.toggleColor.value))
);

elements.calcButtons.forEach((b) => {
  b.addEventListener('click', (e) => {
    let bVal = b.innerText;
    console.log(b);
  });
});
