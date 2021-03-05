const Book = require('./book');

const db = require('../database');

const bookMapper = {
  getAllBooks: async () => {
    try {
      const { rows } = await db.query('SELECT * FROM book;');
      if (!rows[0]) {
        throw new Error('There is no book');
      }
      return rows.map((book) => new Book(book));
    } catch (error) {
      throw new Error(error);
    }
  },
  getBookById: async (id) => {
    try {
      const query = 'SELECT * FROM book WHERE id = $1;';
      const data = [id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The book with the given id ${id} was not found`);
      }
      return rows.map((book) => new Book(book));
    } catch (error) {
      throw new Error(error);
    }
  },
  addBook: async (book) => {
    try {
      const { title, year, page, synopsis } = book;
      const query = ` INSERT INTO public.book (
        title, year, page, synopsis) VALUES (
        $1::text, $2::text, $3::integer, $4::text)
         returning id;`;
      const data = [title, year, page, synopsis];
      const { rows } = await db.query(query, data);
      book.id = rows[0].id;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteBookById: async (id) => {
    try {
      const query = ` DELETE FROM book
                            WHERE id = $1 CASCADE;`;
      const data = [id];
      await db.query(query, data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = bookMapper;
