const Review = require('./review');

const db = require('../database');

const reviewMapper = {
    getAllReviews: async () => {
        const reviews = await db.query('SELECT * FROM review;');
        return reviews.rows.map(review => new Review(review));
    },
    getReviewById: async (id) => {
        const query = 'SELECT * FROM review WHERE id = $1;'
        const data = [id];
        const reviews = await db.query(query,data);
        return reviews.rows.map(review => new Review(review));
    },
};

module.exports = reviewMapper;