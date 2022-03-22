// Testing Functions
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

describe('Testing Functions Sum & Subtract', () => {
    // Sum
    test('Sum 20 + 30', () => {
        expect(sum(20, 30)).toBe(50);
    });

    // Subtract
    test('Subtract 10 - 5', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    // Testing sum not is 10
    test('Sum 10 + 10 not be the same ', () => {
        expect(sum(10, 10)).not.toBe(10);
    });

    // Testing subtract not is 10
    test('Subtract 10 - 5 not be the same', () => {
        expect(subtract(10, 5)).not.toBe(2);
    })
});