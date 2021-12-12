const { StatusCodes } = require('http-status-codes');
const { verifyName } = require('../models/userModel');

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const nameAlreadyExists = await verifyName(name);

  if (nameAlreadyExists) {
    return next({
      status: StatusCodes.CONFLICT,
      message: 'Esse nome já existe.',
    });
  }

  return next();
};