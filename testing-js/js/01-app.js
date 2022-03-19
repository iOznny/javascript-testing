// Cheking two values

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
let response = 3;

if (result != response) {
    console.error('El resultado es diferente a lo esperado.');
} else {
    console.log('La prueba paso correctamente.');
}