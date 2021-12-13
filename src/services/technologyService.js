const technologyModel = require('../models/technologyModel');

const findTechnologies = async () => {
  const technologies = await technologyModel.findTechnologies();
  return technologies;
};

module.exports = {
  findTechnologies,
};
