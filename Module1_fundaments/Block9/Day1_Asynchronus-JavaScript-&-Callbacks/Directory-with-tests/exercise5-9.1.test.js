const { print, uppercase } = require('../exercise5-9.1');

describe('Test the uppercase function', () => {
  test('Test the word JavaScript', () => {
    setTimeout((done) => {
      try {
        expect(uppercase("JavaScript", print)).toBe("JAVASCRIPT");
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });
  test('Test the word Jest', () => {
    setTimeout((done) => {
      try {
        expect(uppercase("Jest", print)).toBe("JEST");
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });
})

