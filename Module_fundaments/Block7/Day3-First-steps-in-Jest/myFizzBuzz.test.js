const { TestWatcher } = require('jest');
const myFizzBuzz = require('./myFizzBuzz');

describe('Requirement 3', () => {
  test('Return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  test('Return fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  test('Return buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  test('Return false', () => {
    expect(myFizzBuzz("15")).toBeFalsy();
  });
})