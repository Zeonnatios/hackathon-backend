const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const validator = ([title, description, technologies, userName]) => {
  const { error } = Joi.object({
    title: Joi.string()
      .not().empty()
      .required(),
    description: Joi.string()
      .not().empty()
      .required(),
    technologies: Joi.array()
      .not().empty()
      .required(),
    userName: Joi.string()
      .not().empty()
      .required(),
  }).validate({ title, description, technologies, userName });
  return error;
};

const validateTrailEntries = (req, _res, next) => {
  const { title, description, technologies, userName } = req.body;
  const isNotValid = validator([title, description, technologies, userName]);

  if (isNotValid) {
    return next({
      status: StatusCodes.BAD_REQUEST,
      message: 'Formato inválido de trilha.',
    });
  }
  return next();
};

module.exports = validateTrailEntries;
