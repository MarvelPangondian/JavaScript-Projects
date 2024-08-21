const calculationElement = document.querySelector('.calculation')
const historyElement = document.querySelector('.history');
const buttonElement = document.querySelector('.buttons');
let output = '';
let outputDisplay = '';
let nowOperator = false;

buttonElement.addEventListener('click', (event) => {
    try {
        let value = event.target.dataset.value;
        if (event.target.tagName === "BUTTON") {
            if (value === '=' && output) {
                historyElement.innerText = outputDisplay;
                outputDisplay = +eval(output);
                if (isNaN(outputDisplay)) {
                    throw new Error('Unable to calculate input');
                }
                output = outputDisplay;

            } else if (value === 'AC') {
                historyElement.innerText = '';
                outputDisplay = '';
                output = '';


            } else if (value === 'DEL') {
                outputDisplay.slice(0, -1);
                output = outputDisplay;

            } else {
                if (isNaN(value)) {
                    // if it's an operator
                    output += ' ' + value + ' ';
                    outputDisplay += ' ' + event.target.innerText + ' ';

                } else {
                    output += value;
                    outputDisplay += value;
                }
            }
            console.log(output);
        }
    } catch (e) {
        alert('Something went wrong');
        outputDisplay = '';
        output = '';
    }
    calculationElement.value = outputDisplay;


});

