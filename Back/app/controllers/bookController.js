const bookMapper = require('../models/bookMapper');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookMapper.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  getBookById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await bookMapper.getBookById(id);
      res.json(book);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addBook: async (req, res) => {
    res.send('Hello world !');
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      await bookMapper.deleteListById(id);
      res.json('OK');
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  updateBook: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = bookController;
