 // Array de calculadora
let resultElement = document.getElementById('result');
    let currentValue = '0';
    let operator = null;
    let waitingForNextNumber = false;

    function updateDisplay() {
      resultElement.value = currentValue;
    }

    function appendNumber(number) {
      if (currentValue === '0' || waitingForNextNumber) {
        currentValue = number.toString();
        waitingForNextNumber = false;
      } else {
        currentValue += number.toString();
      }
      updateDisplay();
    }

    function appendOperator(op) {
      if (operator !== null) {
        calculate();
      }
      operator = op;
      currentValue += ' ' + op + ' ';
      waitingForNextNumber = true;
      updateDisplay();
    }

    function calculate(){
      const expression = currentValue.split(' ');
      const firstNumber = parseFloat(expression[0]);
      const secondNumber = parseFloat(expression[2]);
      let result = 0;
      
      switch (operator) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          result = firstNumber / secondNumber;
          break;
      }
    }

