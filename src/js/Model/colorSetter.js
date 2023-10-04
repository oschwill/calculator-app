const colors = [
  // Theme 1
  {
    bodyBGColor: 'hsl(222, 26%, 31%)',
    headerFontColor: 'hsl(0, 0%, 100%)',
    toggleBGColor: 'hsl(223, 31%, 20%)',
    toggleThumbColor: 'hsl(6, 63%, 50%)',
    calcOutputBGColor: 'hsl(224, 36%, 15%)',
    calcOutputFontColor: 'hsl(0, 0%, 100%)',
    calcInputBGColor: 'hsl(223, 31%, 20%)',
    buttonBGColor: 'hsl(30, 25%, 89%)',
    buttonShadowColor: '0px 4px hsl(28, 16%, 65%)',
    buttonFontColor: 'hsl(221, 14%, 31%)',
    resetButtonBGColor: 'hsl(225, 21%, 49%)',
    resetButtonShadowColor: '0px 4px hsl(224, 28%, 35%)',
    resetButtonFontColor: 'hsl(0, 0%, 100%)',
    equalButtonBGColor: 'hsl(6, 63%, 50%)',
    equalButtonShadowColor: '0px 4px hsl(6, 70%, 34%)',
    equalButtonFontColor: 'hsl(0, 0%, 100%)',
    delButtonBGColor: 'hsl(225, 21%, 49%)',
    delButtonShadowColor: '0px 4px hsl(224, 28%, 35%)',
    delButtonFontColor: 'hsl(0, 0%, 100%)',
  },
  // Theme 2
  {
    bodyBGColor: 'hsl(0, 0%, 90%)',
    headerFontColor: 'hsl(60, 10%, 19%)',
    toggleBGColor: 'hsl(0, 5%, 81%)',
    toggleThumbColor: 'hsl(25, 98%, 40%)',
    calcOutputBGColor: 'hsl(0, 0%, 93%)',
    calcOutputFontColor: 'hsl(60, 10%, 19%)',
    calcInputBGColor: 'hsl(0, 5%, 81%)',
    buttonBGColor: 'hsl(45, 7%, 89%)',
    buttonShadowColor: '0px 4px hsl(35, 11%, 61%)',
    buttonFontColor: 'hsl(60, 10%, 19%)',
    resetButtonBGColor: 'hsl(185, 42%, 37%)',
    resetButtonShadowColor: '0px 4px hsl(185, 58%, 25%)',
    resetButtonFontColor: 'hsl(0, 0%, 100%)',
    equalButtonBGColor: 'hsl(25, 98%, 40%)',
    equalButtonShadowColor: '0px 4px hsl(25, 99%, 27%)',
    equalButtonFontColor: 'hsl(0, 0%, 100%)',
    delButtonBGColor: 'hsl(185, 42%, 37%)',
    delButtonShadowColor: '0px 4px hsl(185, 58%, 25%)',
    delButtonFontColor: 'hsl(0, 0%, 100%)',
  },
  // Theme 3
  {
    bodyBGColor: 'hsl(268, 75%, 9%)',
    headerFontColor: 'hsl(52, 100%, 62%)',
    toggleBGColor: 'hsl(268, 71%, 12%)',
    toggleThumbColor: 'hsl(176, 100%, 44%)',
    calcOutputBGColor: 'hsl(268, 71%, 12%)',
    calcOutputFontColor: 'hsl(52, 100%, 62%)',
    calcInputBGColor: 'hsl(268, 71%, 12%)',
    buttonBGColor: 'hsl(268, 47%, 21%)',
    buttonShadowColor: '0px 4px hsl(290, 70%, 36%)',
    buttonFontColor: 'hsl(52, 100%, 62%)',
    resetButtonBGColor: 'hsl(281, 89%, 26%)',
    resetButtonShadowColor: '0px 4px hsl(285, 91%, 52%)',
    resetButtonFontColor: 'hsl(0, 0%, 100%)',
    equalButtonBGColor: 'hsl(176, 100%, 44%)',
    equalButtonShadowColor: '0px 4px hsl(177, 92%, 70%)',
    equalButtonFontColor: 'hsl(198, 20%, 13%)',
    delButtonBGColor: 'hsl(281, 89%, 26%)',
    delButtonShadowColor: '0px 4px hsl(285, 91%, 52%)',
    delButtonFontColor: 'hsl(0, 0%, 100%)',
  },
];

const setTheme = (elements, index = 0) => {
  elements.body.style.backgroundColor = colors[index].bodyBGColor;
  elements.header.style.color = colors[index].headerFontColor;
  // Toggle Bar
  elements.toggleBackground.style.backgroundColor = colors[index].toggleBGColor;
  elements.toggleThumb.style.setProperty('--thumbColor', colors[index].toggleThumbColor);
  // Output numbers
  elements.calcOutput.style.backgroundColor = colors[index].calcOutputBGColor;
  elements.calcOutput.style.color = colors[index].calcOutputFontColor;
  elements.calcInput.style.backgroundColor = colors[index].calcInputBGColor;
  // Input Buttons
  elements.calcButtons.forEach((button) => {
    button.style.backgroundColor = colors[index].buttonBGColor;
    button.style.boxShadow = colors[index].buttonShadowColor;
    button.style.color = colors[index].buttonFontColor;
  });
  // Reset Button
  elements.resetButton.style.backgroundColor = colors[index].resetButtonBGColor;
  elements.resetButton.style.boxShadow = colors[index].resetButtonShadowColor;
  elements.resetButton.style.color = colors[index].resetButtonFontColor;
  // Equal Button
  elements.equalButton.style.backgroundColor = colors[index].equalButtonBGColor;
  elements.equalButton.style.boxShadow = colors[index].equalButtonShadowColor;
  elements.equalButton.style.color = colors[index].equalButtonFontColor;
  // del Button
  elements.delButton.style.backgroundColor = colors[index].delButtonBGColor;
  elements.delButton.style.boxShadow = colors[index].delButtonShadowColor;
  elements.delButton.style.color = colors[index].delButtonFontColor;
};

export default setTheme;
