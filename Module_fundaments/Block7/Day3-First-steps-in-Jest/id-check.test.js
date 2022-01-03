const searchEmployee = require('./id-check');

describe('Test function searchEmployee', () => {
  it(`Test if there is a function searchEmployee`, () => {
    expect(searchEmployee(`8579-6`, "firstName")).toBeDefined();
  })
  it('Test if the function works', () => {
    expect(searchEmployee(`8579-6`, 'firstName')).toEqual(`8579-6, firstName: Ana`);
  });
  it('Test if throws ID error', () => {
    expect(() => { searchEmployee('0000-0', 'firstName') }).toThrow();
    expect(() => {
      searchEmployee("0000-0", "firstName");
    }).toThrowError(new Error(`Unidentified ID`));
  });
  it('Test if throws information error', () => {
    expect(() => { searchEmployee('8579-6', 'myName') }).toThrow();
    expect(() => {
      searchEmployee("8579-6", "myName");
    }).toThrowError(new Error(`Information unavailable`));
  });
})