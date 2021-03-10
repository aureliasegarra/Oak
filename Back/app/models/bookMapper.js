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
      const query = `SELECT
                    book.id,
                    book.title,
                    book.public_api_id,
                    AVG(rating.rating) AS average_rating
                    FROM book
                    JOIN rating ON rating.book_id = book.id
                    WHERE book.id = $1
                    GROUP BY book.id;`;
      const queryReview = `SELECT
      review.id,
      review.label,
      review.publish_time,
      "user".username
      FROM book
      JOIN review ON review.book_id = book.id
      JOIN "user" ON "user".id = review.user_id
      WHERE book.id = $1
      GROUP BY review.id, review.label, review.publish_time, "user".username;`;
      const data = [id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The book with the given id ${id} was not found`);
      }
      const review = await db.query(queryReview, data);
      const book = rows[0];
      book.reviews = review.rows;
      return new Book(book);
    } catch (error) {
      throw new Error(error);
    }
  },
  getBookByPublicApiId: async (public_api_id) => {
    try {
      const query = 'SELECT * FROM book WHERE public_api_id = $1;';
      const data = [public_api_id];
      const { rows } = await db.query(query, data);
      return rows[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  addBook: async (newBook) => {
    try {
      const { title, public_api_id } = newBook;
      const query = ` INSERT INTO public.book (title, public_api_id)
                      VALUES ($1::text, $2::text)
                      returning id;`;
      const data = [title, public_api_id];
      const { rows } = await db.query(query, data);
      newBook.id = rows[0].id;
    } catch (error) {
      throw new Error(error);
    }
  },
  addBookToList: async (newBook) => {
    try {
      const { id, list_id, user_id } = newBook;
      const queryList = ` INSERT INTO public.list_has_book (book_id, list_id)
                      VALUES ($1::integer, $2::integer)
                      returning id;`;
      const dataList = [id, list_id];
      await db.query(queryList, dataList);
      const queryBookPosition = ` INSERT INTO public.book_position ("position", book_id, user_id)
                                  VALUES ('0'::integer, $1::integer, $2::integer)
                                  returning id;`;
      const dataBookPosition = [id, user_id];
      await db.query(queryBookPosition, dataBookPosition);
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteBookById: async (id) => {
    try {
      const query = ` DELETE FROM book
                            WHERE id = $1;`;
      const data = [id];
      await db.query(query, data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = bookMapper;
