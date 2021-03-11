const Joi = require('joi');

const bookHasListSchema = Joi.object({
  title: Joi.string().required(),
  public_api_id: Joi.string().required(),
  list_id: Joi.number().integer().positive().required(),
});

module.exports = bookHasListSchema;
