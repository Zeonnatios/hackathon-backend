const trailModel = require('../models/trailModel');
const userModel = require('../models/userModel');

const createNewTrail = async (trail) => {
  const newTrail = { ...trail, likes: 0 };
  const data = await trailModel.createNewTrail(newTrail);
  await userModel.updateUserByName(trail);
  return data;
};

const findTrails = async () => {
  const trailsList = await trailModel.findTrailsList();
  return trailsList;
};

module.exports = {
  createNewTrail,
  findTrails,
};