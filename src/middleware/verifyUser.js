const { StatusCodes } = require('http-status-codes');
const { findById } = require('../models/trailModel');

module.exports = async (req, _res, next) => {
  const { name } = req.user.data;
  const { id } = req.params;

  const trail = await findById(id);

  if (!trail) {
    return next({
      status: StatusCodes.NOT_FOUND,
      message: 'Trilha não encontrada',
    });
  }

  const samePerson = trail.userName === name;

  if (!samePerson) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: 'Você não é o dono dessa trilha',
    });
  }

  return next();
};