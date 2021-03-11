const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required(),
  public_api_id: Joi.string().required(),
});

module.exports = bookSchema;
