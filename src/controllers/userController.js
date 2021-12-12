const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/userServices');

const createNewuser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const data = await services.createNewuser({ name, email, password });

  return res.status(StatusCodes.CREATED).json(data);
});

module.exports = {
  createNewuser,
};