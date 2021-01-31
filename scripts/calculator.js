const digitButtons = document.querySelectorAll('.digit');
const funcButtons = document.querySelectorAll('.func-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal');
const input = document.querySelector('#input');

digitButtons.forEach(buttonClickEvent);
operatorButtons.forEach(buttonClickEvent);

funcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.innerText) {
            case 'AC':
                input.value = '';
            case 'DEL':
                input.value = input.value.slice(0, -1);
            case '=':
                if (input.value.match(/[A-Za-z]+/)) {
                    input.value = 'Variables are not supported!';
                }
                else {
                    // remove all whitespaces
                    input.value = input.value.replace(/\s+/g, '');
                    input.value = evaluate(input.value);
                }
        }
    });
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!input.value) return;
        equalButton.click();
    }
});

function buttonClickEvent(button) {
    button.addEventListener('click', () => {
        input.value += button.innerText;
    });
}
