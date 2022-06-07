const { expect } = require('chai');
const writeFile = require('../Day22.3_exercise4-5');
const fs = require('fs');
const sinon = require('sinon');

sinon.stub(fs.promises, 'writeFile');

describe('writeFile', () => {
  describe('If the function receive valid parameters', () => {
    it('returns a string', async () => {
      const response = await writeFile('file.txt', 'I\'m a content');
      expect(response).to.be.a('string');
    });
    it('returns the string "ok"', async () => {
      const response = await writeFile('file.txt', 'I\'m a content');
      expect(response).to.be.equal('ok');
    });
  });
});
