const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 2;

const validator = (email, password, name) => {
  const { error } = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(MIN_PASSWORD_LENGTH)
      .required(),
    name: Joi.string()
      .min(MIN_NAME_LENGTH)
      .required(),
  }).validate({ email, password, name });
  return error;
};

const registerAuth = (req, _res, next) => {
  const { email, password, name } = req.body;
  const isValid = validator(email, password, name);

  if (isValid) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: 'E-mail ou senha inválidos.',
    });
  }
  return next();
};

module.exports = registerAuth;
