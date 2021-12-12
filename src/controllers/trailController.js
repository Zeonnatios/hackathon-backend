const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/trailServices');

const createNewTrail = rescue(async (req, res) => {
  const {
    title,
    description,
    steps,
    userName,
  } = req.body;

  const createdTrail = await services.createNewTrail({ title, description, steps, userName });

  return res.status(StatusCodes.CREATED).json(createdTrail);
});

const getTrailsList = async (req, res) => {
  const trailsList = await services.findTrails();
  return res.status(StatusCodes.OK).json(trailsList);
};

module.exports = {
  createNewTrail,
  getTrailsList,
};