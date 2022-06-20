const { expect } = require("chai");
const checkNumber = require('../Day22.3_exercise1-3')

describe('checkNumber', () => {
  describe('If the function receives a number', () => {
    describe('bigger than 0', () => {
      it('returns "positive"', () => {
        const response = checkNumber(2);
        expect(response).to.be.a('string');
        expect(response).to.be.equal('positive');
      });
    });
    describe('smaller than 0', () => {
      it('returns "negative"', () => {
        const response = checkNumber(-2);
        expect(response).to.be.equal('negative');
      });
    });
    describe('equal 0', () => {
      it('returns "neutral"', () => {
        const response = checkNumber(0);
        expect(response).to.be.equal('neutral');
      })
    })
  });
  describe('not a number', () => {
    it('throws an error', () => {
      expect(checkNumber).to.throw();
      expect(checkNumber).to.throw('Not a number');
    })
  })
})
