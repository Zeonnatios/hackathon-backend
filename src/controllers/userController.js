const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const services = require('../services/userServices');

const createNewuser = rescue(async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = await services.createNewuser({ name, email, password });
  const userWithToken = await services.createToken({ email, password });

  if ('error' in data || 'error' in userWithToken) return next(data.error);

  return res.status(StatusCodes.CREATED).json(userWithToken);
});

const createToken = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const token = await services.createToken({ email, password });

  if ('error' in token) return next(token.error);

  return res.status(StatusCodes.OK).json(token);
});

const updateUser = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, email, password, technologies } = req.body;
  const data = await services.update({ id, name, email, password, technologies });

  return res.status(StatusCodes.OK).json(data);
});

const getUsers = rescue(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    const getAll = await services.getUsers();
    return res.status(StatusCodes.OK).json(getAll);
  }

  const getUser = await services.getUsers(id);
  if (getUser.error) return next(getUser.error);
  return res.status(StatusCodes.OK).json(getUser);
});

const getTrailsByUserId = rescue(async (req, res) => {
  const { userId } = req.params;
  const trails = await services.getTrailsByUserId(userId);

  if (!trails) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Usuário ainda não possui trilhas' });
  }

  return res.status(StatusCodes.OK).json(trails);
});

module.exports = {
  createNewuser,
  createToken,
  updateUser,
  getUsers,
  getTrailsByUserId,
};