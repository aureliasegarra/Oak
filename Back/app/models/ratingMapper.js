const Rating = require('./rating');

const db = require('../database');

const ratingMapper = {
    getAllRatings: async () => {
        try {
            const ratings = await db.query('SELECT * FROM rating;');
            return ratings.rows.map(rating => new Rating(rating));
        } catch (error) {
            console.log(error)
        }
    },
    getRatingById: async (id) => {
        try {
            const query = 'SELECT * FROM rating WHERE id = $1;'
            const data = [id];
            const ratings = await db.query(query,data);
            return ratings.rows.map(rating => new Rating(rating));
        } catch (error) {
            console.log(error)
        }
    },
};

module.exports = ratingMapper;