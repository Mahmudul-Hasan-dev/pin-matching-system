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