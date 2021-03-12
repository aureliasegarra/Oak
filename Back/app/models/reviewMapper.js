const Review = require('./review');

const db = require('../database');

const reviewMapper = {
  getAllReviews: async () => {
    try {
      const { rows } = await db.query('SELECT * FROM review;');
      if (!rows[0]) {
        throw new Error('There is no review');
      }
      return rows.map((review) => new Review(review));
    } catch (error) {
      throw new Error(error);
    }
  },
  getReviewById: async (id) => {
    try {
      const query = 'SELECT * FROM review WHERE id = $1;';
      const data = [id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The review with the given id ${id} was not found`);
      }
      return new Review(rows[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
  addReview: async (review) => {
    try {
      const { label, user_id, book_id } = review;
      const query = ` INSERT INTO public.review (label, publish_time, user_id, book_id)
      VALUES ($1::text, NOW()::timestamp with time zone, $2::integer, $3::integer)
         returning id,publish_time;`;
      const data = [label, user_id, book_id];
      const { rows } = await db.query(query, data);
      review.id = rows[0].id;
      review.publish_time = rows[0].publish_time;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteReviewById: async (id) => {
    try {
      const query = ` DELETE FROM review
                            WHERE id = $1;`;
      const data = [id];
      await db.query(query, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateReview: async (review) => {
    try {
      const { id, label, user_id, book_id } = review;
      const query = ` UPDATE public.review SET
                      label = $1::text, user_id = $2::integer, book_id = $3::integer
                      WHERE id = $4;`;
      const data = [label, user_id, book_id, id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The review with the given id ${id} was not found`);
      }
      return new Review(rows[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = reviewMapper;
