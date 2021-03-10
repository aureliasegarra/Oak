const Joi = require('joi');

const listSchema = Joi.object({
  label: Joi.string().required(),
  position: Joi.number().integer().positive().required(),
  description: Joi.string().min(3).required(),
  user_id: Joi.number().integer().positive().required(),
});

module.exports = listSchema;
