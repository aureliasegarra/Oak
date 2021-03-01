const Rating = require('./rating');

const db = require('../database');

const ratingMapper = {
    getAllRatings: async () => {
        const ratings = await db.query('SELECT * FROM rating;');
        return ratings.rows.map(rating => new Rating(rating));
    },
    getRatingById: async (id) => {
        const query = 'SELECT * FROM rating WHERE id = $1;'
        const data = [id];
        const ratings = await db.query(query,data);
        return ratings.rows.map(rating => new Rating(rating));
    },
};

module.exports = ratingMapper;