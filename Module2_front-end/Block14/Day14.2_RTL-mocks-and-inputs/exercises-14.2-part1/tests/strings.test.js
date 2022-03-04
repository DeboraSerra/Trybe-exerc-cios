const strings = require('../functions/strings');
let { stringToUpper, firstLetterStr, concatStrings } = require('../functions/strings');

describe('Exercise 4', () => {
  it('tests the mock implementationn to the functions', () => {
    const mockStrToUpper = jest
      .spyOn(strings, 'stringToUpper')
      .mockImplementation((str) => str.toLowerCase());
    firstLetterStr = jest.fn((str) => str[str.length -1]);
    concatStrings = jest.fn((str1, str2, str3) => str1 + str2 + str3);

    expect(mockStrToUpper('DEBORA')).toBe('debora');
    expect(firstLetterStr('debora')).toBe('a');
    expect(concatStrings('debora', 'rodrigues', 'serra')).toBe('deborarodriguesserra');

    mockStrToUpper.mockRestore();
    expect(stringToUpper('debora')).toBe('DEBORA');
  })
})