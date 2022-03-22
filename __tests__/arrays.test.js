// Testing with Array
const car = ['P1', 'P2', 'P3'];

describe('Testing to Car', () => {
    // 3 Elements
    test('Array with 3 elements', () => {
        expect(car).toHaveLength(3);
    });

    // Array of car not empty
    test('Car not empty', () => {
        expect(car).not.toHaveLength(0);
    });
});