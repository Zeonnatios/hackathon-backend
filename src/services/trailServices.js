const trailModel = require('../models/trailModel');

const createNewTrail = async (trail) => {
  const newTrail = { ...trail, likes: 0 };
  const data = await trailModel.createNewTrail(newTrail);
  return data;
};

module.exports = {
  createNewTrail,
};