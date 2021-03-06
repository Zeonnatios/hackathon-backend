const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/trailServices');

const createNewTrail = rescue(async (req, res) => {
  const {
    title,
    description,
    technologies,
    userName,
  } = req.body;

  const createdTrail = await services.createNewTrail({
    title, description, technologies, userName });

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

const editTrail = async (req, res, next) => {
  const { title, description, steps, userName } = req.body;
  const { id } = req.params;
  const trailEdit = await services.editTrail({ id, title, description, steps, userName });

  if ('error' in trailEdit) {
    return next(trailEdit.error);
  }
  res.status(StatusCodes.OK).json(trailEdit);
};

const getTrailsByTechnology = async (req, res, next) => {
  const { technology } = req.params;
  const trails = await services.findTrailsByTechnology(technology);

  if ('error' in trails) {
    return next(trails.error);
  }
  res.status(StatusCodes.OK).json(trails);
};

const createSteps = rescue(async (req, res, next) => {
  const { steps, id } = req.body;

  const createdStep = await services.createSteps({ steps, id });

  if ('error' in createdStep) {
    return next(createdStep.error);
  }

  return res.status(StatusCodes.OK).json(createdStep);
});
const addNewLike = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;
  const result = await services.updateLikes(id, userId);

  if ('error' in result) return next(result.error);

  return res.status(result.status).json(result.likesCount);
};

module.exports = {
  createNewTrail,
  getTrailsList,
  deleteTrail,
  getTrailById,
  editTrail,
  getTrailsByTechnology,
  createSteps,
  addNewLike,
};
