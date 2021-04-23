const exercise1 = require('./exercise1');

test('Test return 10', () => {
    exercise1.numToHundred = jest.fn().mockReturnValue(10);

    expect(exercise1.numToHundred()).toBe(10);
    expect(exercise1.numToHundred).toHaveBeenCalled();
    expect(exercise1.numToHundred).toHaveBeenCalledTimes(1);
})