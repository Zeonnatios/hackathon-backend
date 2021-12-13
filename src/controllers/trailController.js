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

const getTrailsList = async (_req, res) => {
  const trailsList = await services.findTrails();
  return res.status(StatusCodes.OK).json(trailsList);
};

const deleteTrail = async (req, res) => {
  const { id } = req.params;
  const deletedTrail = await services.deleteTrail(id);

  if (!deletedTrail) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'id inválido' });
  }

  return res.status(StatusCodes.OK).json({ message: 'Trilha deletada com sucesso' });
};

const getTrailById = async (req, res, next) => {
  const { id } = req.params;
  const trail = await services.findTrailById(id);

  if ('error' in trail) {
    return next(trail.error);
  }
  res.status(StatusCodes.OK).json(trail);
};

module.exports = {
  createNewTrail,
  getTrailsList,
  deleteTrail,
  getTrailById,
};