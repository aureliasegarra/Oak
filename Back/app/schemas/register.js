const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  avatar: Joi.number().integer().positive().max(4).required(),
});

module.exports = registerSchema;
