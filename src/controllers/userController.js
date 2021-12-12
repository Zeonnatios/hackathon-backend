const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/userServices');

const createNewuser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const data = await services.createNewuser({ name, email, password });

  return res.status(StatusCodes.CREATED).json(data);
});

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, technologies } = req.body;
  const data = await services.updateUser({ id, name, email, password, technologies });

  return res.status(StatusCodes.OK).json(data);
  };

module.exports = {
  createNewuser,
  updateUser,
};