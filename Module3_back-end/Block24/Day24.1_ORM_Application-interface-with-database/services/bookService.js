const { Book } = require('../src/models');
const { Op } = require('sequelize');

const book = {
  getAll: async () => {
    const list = await Book.findAll();
    return list;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },
  addBook: async ({ author, title, pageQuantity, publisher }) => {
    if (!author) return { code: 400, message: 'Author is required' };
    if (!title) return { code: 400, message: 'Title is required' };
    if (!pageQuantity) return { code: 400, message: 'Page quantity is required' };
    if (!publisher) return { code: 400, message: 'Publisher is required' };
    const book = await Book.create({ author, title, pageQuantity, publisher });
    if (!book) return { code: 500, message: 'Internal server error' };
    return book;
  },
  upDateBook: async ({ id, author, title, pageQuantity, publisher }) => {
    if (!author) return { code: 400, message: 'Author is required' };
    if (!title) return { code: 400, message: 'Title is required' };
    if (!pageQuantity) return { code: 400, message: 'Page quantity is required' };
    if (!publisher) return { code: 400, message: 'Publisher is required' };
    const book = await Book.update({ title, author, pageQuantity, publisher }, {
      where: { id },
    });
    if (!book[0]) return { code: 404, message: 'Book not found' };
    if (!book) return { code: 500, message: 'Internal server error' };
    return book;
  },
  delete: async ({ id }) => {
    const book = await Book.destroy({ where: { id } });
    if (!book) return { code: 404, message: 'Book not found' }
    return { code: 204 };
  },
  getByAuthor: async ({ author }) => {
    const books = await Book.findAll({ where: { author: {
      [Op.like]: `%${author}%`,
    } } });
    if (!books[0]) return { code: 404, message: 'Author not found' };
    return books;
  }
};

module.exports = book;
