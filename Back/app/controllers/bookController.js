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
    try {
      // We check if the book is in the database
      const book = await bookMapper.getBookByPublicApiId(
        req.body.public_api_id
      );
      const newBook = new Book(req.body);
      // If the book is not in the database
      if (!book) {
        // we add the book in the database
        await bookMapper.addBook(newBook);
        // then we add the book to the list
        await bookMapper.addBookToList(newBook);
      }
      if (book) {
        newBook.id = book.id;
        await bookMapper.addBookToList(newBook);
      }
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  deleteBookById: async (req, res) => {
    const { id } = req.params;
    try {
      await bookMapper.deleteBookById(id);
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
