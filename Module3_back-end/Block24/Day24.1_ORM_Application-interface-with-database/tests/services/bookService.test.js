const { expect } = require('chai');
const sinon = require('sinon');
const { Book } = require('../../src/models');
const mockBooks = require('../mocks/booksMock');
const bookService = require('../../services/bookService');

describe('Test the books\' service layer', () => {
  describe('The function getAll', () => {
    beforeEach(() => {
      sinon.stub(Book, 'findAll').resolves(mockBooks);
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should return an array', async () => {
      const books = await bookService.getAll();
      expect(books).to.be.an('array');
    });
    it('Should return all the books', async () => {
      const books = await bookService.getAll();
      expect(books).to.be.deep.equal(mockBooks);
    });
  })
})
