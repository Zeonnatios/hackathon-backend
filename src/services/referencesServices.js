const refencesModel = require('../models/referenceModel');

const findReferences = async () => {
  const technologies = await refencesModel.getAll();
  return technologies;
};

module.exports = {
  findReferences,
};
