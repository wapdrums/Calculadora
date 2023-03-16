let result = document.getElementById('result');

function updateResult(val) {
  if (result.value == '0') {
    result.value = val;
  } else {
    result.value += val;
  }
}

function calculate() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = '0';
}
