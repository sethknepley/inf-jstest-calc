// self executing main function
(function() {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------
  const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    console.log(calculator);
  }

function updateDisplay() {
  const display = document.querySelector('.form-control');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calcontainer');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('btn-warning')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('btn-c')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
  console.log(calculator);

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }


});

const performCalculation = {

'x': (firstOperand, secondOperand) => firstOperand * secondOperand,

'+': (firstOperand, secondOperand) => firstOperand + secondOperand,

'-': (firstOperand, secondOperand) => firstOperand - secondOperand,

'=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
};


  // input field for the calculator screen
  var output = document.getElementById('output');

  // calculator button
  var bttn1 = document.querySelector('[name="bttn1"]');
})();
