// Testing with Objects
const client = {
    name: 'Testing',
    balance: 500
};

describe('Testing at Client', () => {
    // Client balance greater than 400 is Client Premium
    test('Check balance greater than 400', () => {
        expect(client.balance).toBeGreaterThan(400);
    });

    // Clien is Testing
    test('Check name is Testing', () => {
        expect(client.name).toBe('Testing');
    });

    // Other client name
    test('Other client name', () => {
        expect(client.name).not.toBe('Demo');
    });

    // Other client balance
    test('Other client balance', () => {
        expect(client.balance).not.toBe(300);
    });
});
