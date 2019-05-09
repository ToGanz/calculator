// JavaScript file

//Addition
function add(num1, num2) {
    return num1 + num2;
}

//Subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

//Multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

//Dividation
function divide(num1, num2) {
    return num1 / num2;
}

//Operation
function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Unknown Operator!';

    }
}

//With array
let valueArray =[];
let c = 0;
function populateDisplay2(input) {
    let disp = document.querySelector('#display');
   
    switch(input) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (!isNaN(Number(valueArray[c]))) {
                disp.textContent = '';
                c += 1;
                valueArray[c] = input;
            }
            break;
        case 'clear':
            disp.textContent = '';
            c = 0;
            valueArray =[];
            break;
        case '=':
            if (!isNaN(Number(valueArray[c])) &&
                !(valueArray[c-2] == undefined) && !isNaN(Number(valueArray[c]))) {
                let erg = operate(valueArray[c-1], Number(valueArray[c-2]), Number(valueArray[c]));
                disp.textContent = erg.toFixed(2);;
                c += 1;
                valueArray[c] = erg;   
            }
            break;
        default:
            if (valueArray[c] == undefined) {
                valueArray[c] = input;
            } else if (isNaN(Number(valueArray[c]))) {
                c += 1;
                valueArray[c] = input;
            }
            else { 
            valueArray[c] = valueArray[c] + input;
            }
            disp.textContent = valueArray[c];
    }
    return valueArray, disp.textContent;
}
/* //Populate Display
let displayValue = '';
let displayValueOld = '';
let operator = '';
function populateDisplay(input) {
    let disp = document.querySelector('#display');
    displayValue = disp.textContent;
    if (input == '+' || input == '-' ||input == '*' ||input == '/') {
        if (displayValue != '') {
            displayValueOld  = displayValue;
            operator = input;
            disp.textContent = '';
        }  
    } else if (input == 'clear') {
        disp.textContent = '';
        displayValue = '';
        displayValueOld = '';
    } else if (input == '=') {
        if (displayValueOld != ''){
            let erg = operate(operator, Number(displayValueOld), Number(displayValue));
            disp.textContent = erg;
            displayValueOld = erg;
        }
    } else  {
        disp.textContent = displayValue + input;
    }
    
    return disp.textContent, displayValue, displayValueOld;
} */

// Button Clock
const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', function() {
    populateDisplay2(button.textContent);
}));