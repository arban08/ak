const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay('0');
    } else if (value === '=') {
      if (currentInput && previousInput && operator) {
        const result = calculate(Number(previousInput), Number(currentInput), operator);
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay(currentInput);
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error';
    default:
      return 0;
  }
}
