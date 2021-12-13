const { StatusCodes } = require('http-status-codes');
const services = require('../services/referencesServices');

const getReferences = async (_req, res) => {
  const referencesList = await services.findReferences();
  return res.status(StatusCodes.OK).json(referencesList);
};

module.exports = {
  getReferences,
};