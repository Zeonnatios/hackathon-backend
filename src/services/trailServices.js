const { StatusCodes } = require('http-status-codes');

const trailModel = require('../models/trailModel');
const userModel = require('../models/userModel');

const createNewTrail = async (trail) => {
  const newTrail = { ...trail, likes: 0 };
  const data = await trailModel.createNewTrail(newTrail);
  await userModel.updateUserByName(data);
  return data;
};

const findTrails = async () => {
  const trailsList = await trailModel.findTrailsList();
  return trailsList;
};

const deleteTrail = async (id) => {
  const deletedTrail = await trailModel.deleteTrail(id);
  return deletedTrail;
};

const findTrailById = async (id) => {
  const trail = await trailModel.findById(id);

  if (!trail) {
    return {
      error: {
        status: StatusCodes.NOT_FOUND,
        message: 'Trilha não localizada',
      },
    };
  }
  return trail;
};

const editTrail = async ({ id, ...newTrail }) => {
  const edit = await trailModel.editTrail({ id, newTrail });

  if (edit.acknowledged) {
    return trailModel.findById(id);
  }
};

const findTrailsByTechnology = async (technology) => {
  const trails = await trailModel.findByTechnology(technology);

  if (!trails) {
    return {
      error: {
        status: StatusCodes.NOT_FOUND,
        message: 'Não há trilhas com essa tecnologia',
      },
    };
  }
  return trails;
};

const createSteps = async ({ id, steps }) => {
  console.log(id, steps)
  await trailModel.findById(id);

  await trailModel.updateSteps({ id, steps });

  const trailWithNewStep = await trailModel.findById(id);

  return trailWithNewStep;
};

module.exports = {
  createNewTrail,
  findTrails,
  deleteTrail,
  findTrailById,
  editTrail,
  findTrailsByTechnology,
  createSteps,
};
