const Book = require('../models/book');
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
  getBookByPublicApiId: async (req, res) => {
    const { public_api_id } = req.params;
    try {
      const book = await bookMapper.getBookByPublicApiId(public_api_id);
      res.json(book);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addBook: async (req, res) => {
    const { public_api_id } = req.body;

    const book = await bookMapper.getBookByPublicApiId(public_api_id);
    if (book) {
      const newBook = new Book(book);
      res.json(newBook);
    }

    if (!book) {
      const newBook = new Book(req.body);
      await bookMapper.addBook(newBook);
      const bookFound = await bookMapper.getBookByPublicApiId(public_api_id);
      const bookAdded = new Book(bookFound);
      res.json(bookAdded);
    }
  },
};

module.exports = bookController;
