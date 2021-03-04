const Book = require('./book');

const db = require('../database');

const bookMapper = {
  getAllBooks: async () => {
    try {
      const books = await db.query('SELECT * FROM book;');
      return books.rows.map(book => new Book(book));
    } catch (error) {
      console.log(error);
    }
  },
  getBookById: async id => {
    try {
      const query = 'SELECT * FROM book WHERE id = $1;';
      const data = [id];
      const books = await db.query(query, data);
      return books.rows.map(book => new Book(book));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = bookMapper;
