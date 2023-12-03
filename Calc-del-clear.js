equationDisplay = document.getElementById('equation-display');

function clearDisplay() {
  equationDisplay.innerText = '';
}

function deleteLast() {
  let currentEquation = equationDisplay.innerText;
  equationDisplay.innerText = currentEquation.slice(0, -1);
}

function calculate() {
    equationDisplay.innerText = eval(equationDisplay.innerText);
}
