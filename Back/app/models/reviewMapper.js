const Review = require('./review');

const db = require('../database');

const reviewMapper = {
    getAllReviews: async () => {
        try {
            const reviews = await db.query('SELECT * FROM review;');
            return reviews.rows.map(review => new Review(review));
        } catch (error) {
            console.log(error)
        }
    },
    getReviewById: async (id) => {
        try {
            const query = 'SELECT * FROM review WHERE id = $1;'
            const data = [id];
            const reviews = await db.query(query,data);
            return reviews.rows.map(review => new Review(review));
        } catch (error) {
            console.log(error)
        }
    },
};

module.exports = reviewMapper;