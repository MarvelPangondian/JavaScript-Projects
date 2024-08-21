const calculationElement = document.querySelector('.calculation');
const historyElement = document.querySelector('.history');
const buttonElement = document.querySelector('.buttons');
let output = '';
let outputDisplay = '';

buttonElement.addEventListener('click', (event) => {
    try {
        let value = event.target.dataset.value;
        if (event.target.tagName === "BUTTON") {
            if (value === '=' && output) {
                calculateResult();

            } else if (value === 'AC') {
                clearAll();

            } else if (value === 'DEL') {
                deleteLastEntry();

            } else {
                appendValue(value, event.target.innerText);
            }
        }
    } catch (e) {
        alert('Something went wrong');
        clearAll();
    }
    calculationElement.value = outputDisplay;
});


function clearAll() {
    historyElement.innerText = '';
    outputDisplay = '';
    output = '';
}

function deleteLastEntry() {
    outputDisplay = outputDisplay.slice(0, outputDisplay.length - 1);
    output = output.slice(0,output.length - 1);
}

function appendValue(value, displayValue) {
    if (isNaN(value)) { // Assuming 'value' is operator if not a number
        output += `${value}`;
        outputDisplay += `${displayValue}`;
    } else {
        output += value;
        outputDisplay += value;
    }
}

function calculateResult() {
    if (!output) return;

    const result = +eval(output);
    if (isNaN(result)) throw new Error('Unable to calculate input');

    historyElement.innerText = outputDisplay;
    outputDisplay = result.toString();
    output = outputDisplay;
}


