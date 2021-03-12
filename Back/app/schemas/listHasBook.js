const Joi = require('joi');

const bookSchema = Joi.object({
  book_id: Joi.number().integer().positive().required(),
  list_id: Joi.number().integer().positive().required(),
});

module.exports = bookSchema;
