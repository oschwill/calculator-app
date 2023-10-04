class Calculator {
  constructor(elements) {
    this.output = elements.calcOutput;
    this.operators = {};
    this.outputArray = [];
    this.number = '';
    this.horizontalScroll = 0;
  }

  showInput(inputVal) {
    switch (inputVal) {
      case 'DEL':
        if (this.number.length > 0) {
          this.number = this.number.slice(0, -1);
          // clear UI
          this.output.innerText = this.number;
        } else if (this.outputArray.length > 0) {
          this.outputArray.slice(0, -1);
        }
        break;
      case '=':
        // Do Calculation
        break;
      case '.':
        this.number += this.number === '' ? '' : this.number.includes('.') ? '' : inputVal;
        // clear UI
        this.output.innerText = this.number;
        break;

      default:
        if (isNaN(inputVal) && this.number !== '' && inputVal !== '.') {
          this.outputArray.push(
            `${
              this.number[this.number.length - 1] === '.' ? this.number.slice(0, -1) : this.number
            }`
          );
          this.outputArray.push(` ${inputVal} `);

          this.number = '';
          // Update UI
          console.log(this.outputArray);
          this.output.innerText = this.outputArray.join(' ');
          // check for scroll
          this.#scrollCalcOutput();
          return;
        }

        this.number += `${!isNaN(inputVal) ? inputVal : ''}`;
        this.output.innerText += `${!isNaN(inputVal) ? inputVal : ''}`;

        break;
    }

    // check for scroll
    this.#scrollCalcOutput();
  }

  #scrollCalcOutput() {
    if (this.output.innerText.length > 14) {
      console.log(this.horizontalScroll);
      this.horizontalScroll += 15;
      this.output.scroll(this.horizontalScroll, 0);
    }
  }
}

export default Calculator;
