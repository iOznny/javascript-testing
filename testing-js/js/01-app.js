// Cheking two values
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Sum
let result = sum(2, 2);
let response = 3;

if (result != response) {
    console.error('El resultado es diferente a lo esperado.');
} else {
    console.log('La suma paso correctamente.');
}

// Subtract
let result_subtract = subtract(10, 5);
let response_subtract = 5;

if (result_subtract != response_subtract) {
    console.error('El resultado es diferente a lo esperado.');
} else {
    console.log('La resta paso correctamente.');
}