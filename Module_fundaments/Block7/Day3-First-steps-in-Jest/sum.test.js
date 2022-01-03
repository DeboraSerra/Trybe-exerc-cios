const sum = require('./sum');

describe('Requisito 1', () => {
  test('Soma 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('Soma 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  test('Lança um erro', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })
  test('Testa a mensagem de erro', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
})