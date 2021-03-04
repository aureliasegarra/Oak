const bookMapper = require('../models/bookMapper');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookMapper.getAllBooks();
      res.json(books);
    } catch (error) {
      console.log(error);
    }
  },
  getBookById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await bookMapper.getBookById(id);
      res.json(book);
    } catch (error) {
      console.log(error);
    }
  },
  addBook: async (req, res) => {
    res.send('Hello world !');
  },
  deleteBook: async (req, res) => {
    res.send('Hello world !');
  },
  updateBook: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = bookController;
