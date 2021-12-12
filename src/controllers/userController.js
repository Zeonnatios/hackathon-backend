const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/userServices');

const createNewuser = rescue(async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = await services.createNewuser({ name, email, password });

  if ('error' in data) return next(data.error);

  return res.status(StatusCodes.CREATED).json(data);
});

module.exports = {
  createNewuser,
};