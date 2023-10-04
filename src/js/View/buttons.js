const buttonValues = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '='];

const renderButtons = () => {
  return buttonValues
    .map((button) => {
      if (button === 'DEL') {
        return `<button class="del">DEL</button>`;
      }

      if (button === 'RESET') {
        return `<button class="reset">RESET</button>`;
      }

      if (button === '=') {
        return `<button class="equal">=</button>`;
      }

      return `<button>${button}</button>`;
    })
    .join('');
};

export default renderButtons;
