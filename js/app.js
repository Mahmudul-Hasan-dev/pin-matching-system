// console.log('app connected')

// function varifyPin() {
//     const pincheck = gereatePin();
//     const pincheckstring = pincheck + '';
//     if (pincheckstring === 4) {
//         return pincheck;
//     }
//     else {
//         return varifyPin();
//     }
// }

// function gereatePin() {
//     const pin = Math.round(Math.random() * 1000)
//     return pin;
// }

///////////////////////////////////////////////////////
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    const displayfield = document.getElementById('display-field');
    displayfield.value = pin;
})

//event delegate(event on group of similar element)
document.getElementById('calculator').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const displayField = document.getElementById('number-field');
    const prevNumber = displayField.value;

    if (isNaN(number)) {
        // console.log(number);
        if (number === 'C') {
            displayField.value = '';
        }
        else if (number === '<') {
            const digits = prevNumber.split('');
            digits.pop();
            const remaineddigits = digits.join('');
            displayField.value = remaineddigits;
        }
    }
    else {
        const newNumber = prevNumber + number;
        displayField.value = newNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    // console.log('submit clcik')

    //get generated pin
    const genereateddisplayField = document.getElementById('display-field')
    const generatedPin = genereateddisplayField.value;

    //get user input
    const typedPinField = document.getElementById('number-field');
    const typedPin = typedPinField.value;

    //we have to access message from outside of block element to get them in both condition
    const pinsuccessMessage = document.getElementById('pin-success');
    const pinfailMessage = document.getElementById('pin-fail');

    //compare both
    if (generatedPin == typedPin) {
        // console.log('correct')

        pinsuccessMessage.style.display = 'block';
        pinfailMessage.style.display = 'none';
    }
    else {
        // console.log('incorrect')

        pinfailMessage.style.display = 'block';
        pinsuccessMessage.style.display = 'none';
    }
})