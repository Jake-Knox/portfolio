let result = document.getElementById('result');

function clearResult() {
  result.value = '';
}

function appendNumber(num) {
  result.value += num;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}