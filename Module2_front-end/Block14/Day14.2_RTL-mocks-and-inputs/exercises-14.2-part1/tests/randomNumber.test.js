let randomNumber = require('../functions/randomNumber');

afterEach(() => jest.clearAllMocks());

describe('Exercise 1', () => {
  it('tests the return of the function randomNumber and if the function was called', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
});

describe('Exercise 2', () => {
  it('tests the  implementation of a mock function to randomNumber', () => {
    randomNumber = jest.fn()
      .mockImplementationOnce((num1, num2) => num1/num2);
    
    expect(randomNumber(10, 2)).toBe(5);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber(10, 2)).not.toBe(5);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});

describe('Exercise 3', () => {
  afterEach(() => jest.clearAllMocks());
  it('tests the implementation of a new mock', () => {
    randomNumber = jest.fn((num1, num2, num3) => num1 * num2 * num3);
    const multNum = randomNumber(2, 3, 4);
    const multNum2 = randomNumber(1, 2, 3);
    expect(multNum).toBe(24);
    expect(multNum2).toBe(6);
    randomNumber.mockClear();
    
    randomNumber = jest.fn((num) => num * 2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber(5)).toBe(10);
  });
})