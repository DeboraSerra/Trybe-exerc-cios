const { print, uppercase } = require('../exercise5-9.1');

describe('Test the uppercase function', () => {
  test('Test the word JavaScript', (done) => {
    function callback(str) {
      try {
        expect(str).toBe('JAVASCRIPT');
        done();
      } catch (e) {
        done(e);
      }
    };
    uppercase('JavaScript', callback);
  
  });
  test('Test the word Jest', (done) => {
   function callback(str) {
     try {
       expect(str).toBe("JEST");
       done();
     } catch (e) {
       done(e);
     }
   }
   uppercase("Jest", callback);
  });
})

