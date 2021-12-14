const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const validator = ([step]) => {
  const { error } = Joi.object({
    step: Joi.array()
      .not().empty()
      .required(),
  }).validate({ step });
  return error;
};

const validateTrailEntries = (req, _res, next) => {
  const { steps } = req.body;
  const isNotValid = validator([steps]);

  if (isNotValid) {
    return next({
      status: StatusCodes.BAD_REQUEST,
      message: '"Passo" inserido não é válido.',
    });
  }
  return next();
};

module.exports = validateTrailEntries;
