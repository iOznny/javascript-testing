import { sum, subtract } from '../testing-jest/js/funciones.js';

describe('Sum of tow numbers', () => {
    test('Sum 10 + 20', () => {
        expect(sum(10, 20)).toBe(30);
    });
});