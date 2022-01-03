const sum = require('./sum');

describe('Requirement 1', () => {
  test('Sum 4 and 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('Sum 0 and 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  test('Throw an error', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })
  test('Test the error message', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
})