const func = require('./encode-decode');

describe('Requirement 4', () => {
  it('Verify if encode and decode are functions', () => {
    expect(func.encode('avocado')).toBeDefined();
    expect(func.decode("avocado")).toBeDefined();
  });
  it('Verify if the vowels are encoded', () => {
    expect(func.encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });
  it('Verify if the vowels are decoded', () => {
    expect(func.decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });
  it('Verify if consonant and numbers aren\'t encoded or decoded', () => {
    expect(func.encode('avocado')).toMatch('1v4c1d4');
    expect(func.decode('1v4c1d4')).toMatch('avocado');
  });
  it('Verify if the string returns with the same length', () => {
    expect(func.encode('avocado')).toHaveLength(7);
    expect(func.decode('1v4c1d4')).toHaveLength(7);
  });
})