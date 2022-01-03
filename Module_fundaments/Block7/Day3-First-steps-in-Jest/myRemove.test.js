const { TestWatcher } = require('jest');
const myRemove = require('./myRemove');

describe('Requisito 2', () => {
  test('Retorna a array sem o número 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Não retorna a array original', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Retorna a array original', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})