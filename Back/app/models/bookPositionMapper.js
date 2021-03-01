const BookPosition = require('./bookPosition');

const db = require('../database');

const bookPositionMapper = {
    getAllBookPositions: async () => {
        const bookPositions = await db.query('SELECT * FROM bookPosition;');
        return bookPositions.rows.map(bookPosition => new BookPosition(bookPosition));
    },
    getBookPositionById: async (id) => {
        const query = 'SELECT * FROM bookPosition WHERE id = $1;'
        const data = [id];
        const bookPositions = await db.query(query,data);
        return bookPositions.rows.map(bookPosition => new BookPosition(bookPosition));
    },
};

module.exports = bookPositionMapper;