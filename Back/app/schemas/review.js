const Joi = require('joi');

const reviewSchema = Joi.object({
  label: Joi.string().min(3).required(),
  book_id: Joi.number().integer().positive().required(),
});

module.exports = reviewSchema;
