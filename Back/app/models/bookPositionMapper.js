const BookPosition = require('./bookPosition');

const db = require('../database');

const bookPositionMapper = {
  getAllBookPositions: async () => {
    try {
      const bookPositions = await db.query('SELECT * FROM book_position;');
      return bookPositions.rows.map(
        (bookPosition) => new BookPosition(bookPosition)
      );
    } catch (error) {
      console.log(error);
    }
  },
  getBookPositionById: async (id) => {
    try {
      const query = 'SELECT * FROM book_position WHERE id = $1;';
      const data = [id];
      const bookPositions = await db.query(query, data);
      return bookPositions.rows.map(
        (bookPosition) => new BookPosition(bookPosition)
      );
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = bookPositionMapper;
