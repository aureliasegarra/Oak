const Book = require('../models/book');
const ListHasBook = require('../models/listHasBook');
const bookMapper = require('../models/bookMapper');
const listHasbookMapper = require('../models/listHasBookMapper');

const listHasbookController = {
  addBookToList: async (req, res) => {
    try {
      req.body.user_id = req.user.id;
      const ListBelongsToUser = await listHasbookMapper.checkIfListBelongsToUser(
        req.body
      );
      if (!ListBelongsToUser)
        return res
          .status(400)
          .json(
            `The list ${req.body.list_id} does not belong to the user ${req.body.user_id}`
          );
      // We check if the book is in the database
      const book = await bookMapper.getBookByPublicApiId(
        req.body.public_api_id
      );
      const newBook = new Book(req.body);
      newBook.user_id = req.user.id;
      // If the book is not in the database
      if (!book) {
        // we add the book in the database
        await bookMapper.addBook(newBook);
        // then we add the book to the list
        await listHasbookMapper.addBookToList(newBook);
      }
      // If the book is in the database
      if (book) {
        // we add his id to the newBook object
        newBook.id = book.id;
        // then we add the book to the list
        await listHasbookMapper.addBookToList(newBook);
      }
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  deleteBookFromList: async (req, res) => {
    req.body.user_id = req.user.id;
    try {
      const ListBelongsToUser = await listHasbookMapper.checkIfListBelongsToUser(
        req.body
      );
      if (!ListBelongsToUser)
        return res
          .status(400)
          .json(
            `The list ${req.body.list_id} does not belong to the user ${req.body.user_id}`
          );
      await listHasbookMapper.deleteBookFromList(req.body);
      res.json('OK');
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = listHasbookController;
