// Cheking two values
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Funtion async
async function sumAsync(a, b) {
    return Promise.resolve(sum(a, b));
}

// Sum
let result = sum(2, 2);
let response = 3;
// expected(response).toBe(result);

// Subtract
let result_subtract = subtract(10, 5);
let response_subtract = 5;

// expected(response_subtract).toBe(result_subtract);
// expected(response_subtract).toEqual(result_subtract);

testing('Sum 10 + 20 = 30', async () => {
    const result = await sumAsync(10, 20);
    const response = 30;
    expected(response).toBe(result);    
});


async function testing(message, callback) {
    try {
        await callback();
        console.log(`El testing: ${ message } fue exitoso.`);
    } catch (error) {
        console.error(error);
    }
}

function expected(response) {
    return {
        toBe(result) {
            if (result != response) {
                console.error('El resultado es diferente a lo esperado.');
            } else {
                console.log('La prueba paso correctamente.');
            }
        },
        toEqual(result) {
            if (result != response) {
                console.error('El resultado no es igual a lo esperado.');
            } else {
                console.log('La prueba paso correctamente.');
            }
        }
    }
}