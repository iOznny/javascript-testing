import Citas from '../testing-jest/js/classes/Citas';

describe('Testing class citas', () => {

    // Init class
    const quotes = new Citas();
    const id = Date.now();

    test('Add new quote', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Demo',
            telefono: '1234567890',
            fecha: '01-01-2020',
            hora:'01:00',
            sintomas: 'Duerme'
        };

        // Add quote
        quotes.agregarCita(citaObj);

        // Resolve
        expect(quotes).toMatchSnapshot();
    });

    // Update quote
    test('Update quote', () => {
        const updateQuote = {
            id,
            mascota: 'Luke',
            propietario: 'Demo',
            telefono: '1234567890',
            fecha: '01-01-2020',
            hora:'01:00',
            sintomas: 'Duerme'
        };

        quotes.editarCita(updateQuote);

        // Update quote & update snapshot
        expect(quotes).toMatchSnapshot();
    });

    // Delete quote
    test('Delete quote', () => {
        quotes.eliminarCita(id);

        // Update quote & update snapshot
        expect(quotes).toMatchSnapshot();
    });
});