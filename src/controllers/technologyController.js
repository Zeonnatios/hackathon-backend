const { StatusCodes } = require('http-status-codes');
const services = require('../services/technologyService');

const getTechnologies = async (_req, res) => {
  const technologiesList = await services.findTechnologies();
  return res.status(StatusCodes.OK).json(technologiesList);
};

module.exports = {
  getTechnologies,
};