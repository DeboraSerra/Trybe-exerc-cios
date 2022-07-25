const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const bookModel = require('../../src/models/Book');

describe('The books\' model layer', () => {
  const Book = bookModel(sequelize, dataTypes);
  const book = new Book;
  describe('Have the name `Book`', () => {
    checkModelName(Book)('Book');
  });
  describe('Have the right properties', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  })
})
