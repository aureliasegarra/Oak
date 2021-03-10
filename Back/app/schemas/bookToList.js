const Joi = require('joi');

const bookToListSchema = Joi.object({
  title: Joi.string().required(),
  user_id: Joi.number().integer().positive().required(),
  public_api_id: Joi.string().required(),
  list_id: Joi.number().integer().positive().required(),
});

module.exports = bookToListSchema;
