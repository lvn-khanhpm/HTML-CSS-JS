// Init object
var input = document.querySelector('#input');
var resultButton = document.querySelector('#result');

// Default input
input.innerHTML = 0;

// Handle display when click number input
var numberInputs = document.querySelectorAll('.numbers div');

numberInputs.forEach(numberInput => {
    if (numberInput.id == 'clear') {
        numberInput.onclick = (e) => {
            input.innerHTML = 0;
        }
    } else {
        numberInput.onclick = (e) => {
            let valueInputCur = input.innerHTML == '0' ? '' : input.innerHTML;
            input.innerHTML = handleDuplicate(valueInputCur + e.target.innerHTML);
        }
    }
});

var operatorInputs = document.querySelectorAll('.operators div');

operatorInputs.forEach(operatorInput => {
    operatorInput.onclick = (e) => {
        let valueInputCur = input.innerHTML == '0' ? '' : input.innerHTML;
        input.innerHTML = handleDuplicate(valueInputCur + e.target.innerHTML);
    }
});

// Handle duplicate
var handleDuplicate = (value) => {
    return value
        .replaceAll('..', '.')
        .replaceAll('++', '+')
        .replaceAll('--', '-')
        .replaceAll('\u00D7\u00D7', '\u00D7')
        .replaceAll('\u00F7\u00F7', '\u00F7');
}

// Handle calculate when click button result
resultButton.onclick = () => {
    // Get input string
    var inputString = '';
    var inputCharacters = input.innerHTML;
    var inputCharacterNum = inputCharacters.length;
    var inputItem = '';

    for (let i = 0; i < inputCharacterNum; i++) {
        let inputCharacter = inputCharacters[i];

        if (['+', '-', '\u00D7', '\u00F7'].includes(inputCharacter)) {
            if (inputCharacter == '\u00D7') {
                inputCharacter = '*';
            }

            if (inputCharacter == '\u00F7') {
                inputCharacter = '/';
            }

            inputString += inputItem;
            inputString += inputCharacter;
            inputItem = '';
        } else {
            inputItem += inputCharacter;
        }
    }

    if (inputItem != '') {
        inputString += inputItem;
    }

    // Calculate
    try {
        var result = eval(inputString);

        input.innerHTML = result;
    } catch (error) {
        input.innerHTML = inputString.replaceAll('*', '\u00D7').replaceAll('/', '\u00F7');
    }
}






