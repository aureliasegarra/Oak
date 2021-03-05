const Rating = require('./rating');

const db = require('../database');

const ratingMapper = {
  getAllRatings: async () => {
    try {
      const { rows } = await db.query('SELECT * FROM rating;');
      if (!rows[0]) {
        throw new Error('There is no rating');
      }
      return rows.map((rating) => new Rating(rating));
    } catch (error) {
      console.log(error);
    }
  },
  getRatingById: async (id) => {
    try {
      const query = 'SELECT * FROM rating WHERE id = $1;';
      const data = [id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The rating with the given id ${id} was not found`);
      }
      return new Rating(rows[0]);
    } catch (error) {
      console.log(error);
    }
  },
  addRating: async (rating) => {
    try {
      const { rating, user_id, book_id } = rating;
      const query = ` INSERT INTO public.rating (rating, user_id, book_id)
                      VALUES ($1::integer, $2::integer, $3::integer)
                      returning id;`;
      const data = [rating, user_id, book_id];
      const { rows } = await db.query(query, data);
      rating.id = rows[0].id;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteRatingById: async (id) => {
    try {
      const query = ` DELETE FROM rating
                            WHERE id = $1;`;
      const data = [id];
      await db.query(query, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateRating: async (rating) => {
    try {
      const { id, rating, user_id, book_id } = rating;
      const query = ` UPDATE public.rating SET
      rating = $1::integer, user_id = $2::integer, book_id = $3::integer WHERE
      id = $4;`;
      const data = [rating, user_id, book_id, id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The rating with the given id ${id} was not found`);
      }
      return new Rating(rows[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = ratingMapper;
