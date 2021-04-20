const sum = require('./exercise1');

describe('Teste a função sum', () => {
    test('A soma da função será 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });

    test('A soma de 0 e 0 é 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });

    test('')
});