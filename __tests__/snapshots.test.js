const client = {
    name: 'Demos',
    balance: 500,
    type: 'Premium'
}

describe('Testing Client', () => {
    // Testing
    test('Is Demo', () => {
        expect(client.name).toBe('Demo');
    });

    // Snapshot
    test('Testing with Snapshot', () => {
        // Create snapshot
        expect(client).toMatchSnapshot();        
    });
}); 

// Update snapshot in console command:
// npm test -- -u