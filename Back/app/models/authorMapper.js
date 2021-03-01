const Author = require('./author');

const db = require('../database');

const authorMapper = {
    getAllAuthors: async () => {
        const authors = await db.query('SELECT * FROM author;');
        return authors.rows.map(author => new Author(author));
    },
    getAuthorById: async (id) => {
        const query = 'SELECT * FROM author WHERE id = $1;'
        const data = [id];
        const authors = await db.query(query,data);
        return authors.rows.map(author => new Author(author));
    },
};

module.exports = authorMapper;