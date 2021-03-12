const Joi = require('joi');

const ratingSchema = Joi.object({
  rating: Joi.number().integer().positive().required(),
  book_id: Joi.number().integer().positive().required(),
});

module.exports = ratingSchema;
