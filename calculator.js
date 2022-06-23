// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const firstNumber = parseFloat(prompt('Enter first number: '));
const secondNumber = parseFloat(prompt('Enter second number: '));

//performing the computation
let result;

// using if...else if... else
if (operator == '+') {
    result = firstNumber + secondNumber ;
}
else if (operator == '-') {
    result = firstNumber - secondNumber ;
}
else if (operator == '*') {
    result = firstNumber * secondNumber ;
}
else {
    result = firstNumber / secondNumber ;
}

// display the result
console.log(`${firstNumber} ${operator} ${secondNumber } = ${result}`);
