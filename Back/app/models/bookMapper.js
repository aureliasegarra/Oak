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
  getBookByPublicApiId: async (public_api_id) => {
    try {
      const query = `SELECT
                    book.id,
                    book.title,
                    book.public_api_id
                    FROM book
                    WHERE book.public_api_id = $1
                    GROUP BY book.id;`;
      const data = [public_api_id];
      const { rows } = await db.query(query, data);
      const book = rows[0];

      if (rows[0]) {
        const queryReview = `SELECT
        review.id,
        review.label,
        review.publish_time,
        "user".username
        FROM book
        JOIN review ON review.book_id = book.id
        JOIN "user" ON "user".id = review.user_id
        WHERE book.public_api_id = $1
        GROUP BY review.id, review.label, review.publish_time, "user".username;`;
        const queryRating = `SELECT
        AVG(rating.rating)::integer AS average_rating
        FROM book
        JOIN rating ON rating.book_id = book.id
        WHERE book.public_api_id = $1
        GROUP BY book.id;`;
        const review = await db.query(queryReview, data);
        const result = await db.query(queryRating, data);

        if (result.rows[0]) {
          const { average_rating } = result.rows[0];
          book.average_rating = average_rating;
        } else {
          book.average_rating = null;
        }
        book.reviews = review.rows;
      }

      return book;
    } catch (error) {
      throw new Error(error);
    }
  },
  getBookById: async (id) => {
    try {
      const query = 'SELECT * FROM book WHERE id = $1;';
      const data = [id];
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
};

module.exports = bookMapper;
