const bookService = require('../services/bookService');

const book = {
  getAll: async (req, res) => {
    const { author } = req.query;
    let books;
    if (author) {
      books = await bookService.getByAuthor({ author });
    } else {
      books = await bookService.getAll();
    }
    if (books.message) return res.status(books.code).json({ message: books.message });
    books.sort((a, b) => a.title < b.title ? -1 : 1);
    res.status(200).json({ books });
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const book = await bookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ book });
  },
  addBook: async (req, res) => {
    const { title, author, pageQuantity, publisher } = req.body;
    const book = await bookService.addBook({ title, author, pageQuantity, publisher });
    if (book.message) return res.status(book.code).json({ message: book.message });
    res.status(201).json({ book });
  },
  updateBook: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;
    const book = await bookService.upDateBook({ id, title, author, pageQuantity, publisher });
    if (book.code === 404) return res.status(book.code).json({ message: book.message });
    res.status(201).json({ message: 'Book updated!' });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const { code, message } = await bookService.delete({ id });
    if (message) return res.status(code).json({ message });
    res.status(code).end();
  }
};

module.exports = book;
