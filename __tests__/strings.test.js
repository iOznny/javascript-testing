const password = '123456';

describe('Checking Password', () => {
    // With 6 chrs
    test('Password 6 chrs', () => {
        expect(password).toHaveLength(6);
    });

    // Not Empty
    test('Password not empty', () => {
        expect(password).not.toHaveLength(0);
    });
});