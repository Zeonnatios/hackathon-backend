const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/userServices');

const createNewuser = rescue(async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = await services.createNewuser({ name, email, password });
  const userWithToken = await services.createToken({ email, password });

  if ('error' in data || 'error' in userWithToken) return next(data.error);

  return res.status(StatusCodes.CREATED).json(userWithToken);
});

const createToken = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const token = await services.createToken({ email, password });

  if ('error' in token) return next(token.error);

  return res.status(StatusCodes.CREATED).json(token);
});

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, technologies } = req.body;
  const data = await services.updateUser({ id, name, email, password, technologies });

  return res.status(StatusCodes.OK).json(data);
  };

module.exports = {
  createNewuser,
  createToken,
  updateUser,
};