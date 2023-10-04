class Calculator {
  constructor(elements) {
    this.output = elements.calcOutput;
    this.outputArray = [];
    this.number = '';
    this.horizontalScroll = 0;
  }

  showInput(inputVal) {
    switch (inputVal) {
      case 'RESET':
        this.outputArray = [];
        this.number = '';
        this.output.innerText = '';
        break;
      case 'DEL':
        if (this.outputArray.length > 0) {
          // this.#scrollCalcOutput(false);
          if (
            isNaN(this.outputArray[this.outputArray.length - 1]) ||
            (this.outputArray[this.outputArray.length - 1].length < 2 &&
              this.outputArray.length > 1)
          ) {
            this.outputArray = this.outputArray.slice(0, -1);
            this.output.innerText = this.outputArray.join('');
            return;
          }

          this.outputArray[this.outputArray.length - 1] = this.outputArray[
            this.outputArray.length - 1
          ].slice(0, -1);

          this.number = this.outputArray[this.outputArray.length - 1];
        }

        this.output.innerText = this.outputArray.join('');
        return;
      case '=':
        this.#calculateResult();
        break;
      default:
        if (isNaN(inputVal) && this.number !== '' && inputVal !== '.') {
          this.outputArray[this.outputArray.length - 1] =
            this.outputArray[this.outputArray.length - 1].slice(-1) === '.'
              ? this.outputArray[this.outputArray.length - 1].slice(0, -1)
              : this.outputArray[this.outputArray.length - 1];

          this.outputArray.push(` ${inputVal} `);

          this.number = '';
          // Update UI
          this.output.innerText = this.outputArray.join('');
          // check for scroll
          this.#scrollCalcOutput();
          return;
        }

        // check if user choose a second operator as a result
        if (isNaN(this.number[this.number.length - 1]) && isNaN(inputVal)) {
          return;
        }

        this.number += `${!isNaN(inputVal) ? inputVal : this.number.includes('.') ? '' : inputVal}`;

        // Fill First Values
        if (this.outputArray.length === 0) {
          this.outputArray.push(this.number);
        }

        if (this.outputArray.length === 1) {
          this.outputArray[0] = this.number;
        }

        // Fill the next values
        if (isNaN(this.outputArray[this.outputArray.length - 1]) && this.outputArray.length > 1) {
          this.outputArray.push(this.number);
        } else if (
          !isNaN(this.outputArray[this.outputArray.length - 1]) &&
          this.outputArray.length > 1
        ) {
          this.outputArray[this.outputArray.length - 1] = this.number;
        }

        this.output.innerText = `${this.outputArray.join('')}`;

        break;
    }

    // check for scroll
    this.#scrollCalcOutput(true);
  }

  #scrollCalcOutput(bool) {
    if (this.output.innerText.length > 14) {
      bool === true ? (this.horizontalScroll += 30) : (this.horizontalScroll -= 30);
      this.output.scroll(this.horizontalScroll, 0);
    }
  }

  #calculateResult() {
    if (this.outputArray.length % 2 === 0) {
      this.outputArray = this.outputArray.slice(0, -1);
    }

    let result = this.outputArray
      .map((val, key) => {
        if (key % 2 === 0) {
          return Number(val);
        }

        return val;
      })
      .join('');

    result = String(eval(result.replace(/[^-()\d/*+.]/g, '')));
    this.output.innerText = result;

    this.outputArray = [];
    this.outputArray.push(result);
    this.number = result;
  }
}

export default Calculator;
