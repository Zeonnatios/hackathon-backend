const { ObjectId } = require('bson');
const { StatusCodes } = require('http-status-codes');
const JWT = require('jsonwebtoken');
const { findById } = require('../models/trailModel');
const { 
  getUserByEmail,
  createNewUser,
  updateUser,
  getAll,
  getUserByid,
} = require('../models/userModel');

const JWT_CONFIG = {
  expiresIn: '12d',
  algorithm: 'HS256',
};

const createNewuser = async (user) => {
  const validateEmail = await getUserByEmail(user);
  if (validateEmail) {
    return {
      error: {
        status: StatusCodes.CONFLICT,
        message: 'Esse e-mail já existe. Tente outro.',
      },
    };
}
  const data = await createNewUser(user);
  delete data.password;
  return data;
};

const createToken = async (user) => {
  const { email, password } = user;

  const verifyUser = await getUserByEmail({ email, password });

  if (!verifyUser) {
    return {
      error: {
        status: StatusCodes.NOT_FOUND,
        message: 'Não existe usuário com esse e-mail ou senha.',
      },
    };
  }

  const token = JWT.sign({ data: verifyUser }, process.env.LOGIN_SECRET, JWT_CONFIG);

  return {
    token,
    user: {
      ...verifyUser,
    },
  };
};

const update = async (user) => {
  const data = await updateUser(user);
  delete data.password;
  return data;
};

const getUsers = async (id) => {
  if (!id) {
    return getAll();
  }
  if (!ObjectId.isValid(id)) {
    return { error: { status: StatusCodes.BAD_REQUEST, message: 'Id inválido' } }; 
  }

  const findUser = await getUserByid(id);
  
  if (!findUser) {
    return { error: { status: StatusCodes.NOT_FOUND, message: 'Usuário não encontrado.' } };
  }
  delete findUser.password;
  return findUser;
};

const getTrailsByUserId = async (userId) => {
  const data = await getUserByid(userId);

  if (!data.trails) {
    return null;
  }

  let foundTrails = data.trails;

  const { myTrails, likedTrails } = foundTrails;

  if (myTrails) {
    const myTrailsMap = await Promise.all(myTrails.map((trailId) => findById(trailId)));
    foundTrails = { ...foundTrails, myTrails: myTrailsMap };
  }

  if (likedTrails) {
    const likedTrailsMap = await Promise.all(likedTrails.map((trailId) => findById(trailId)));
    foundTrails = { ...foundTrails, myTrails: likedTrailsMap };
  }

  return foundTrails;
};

module.exports = {
  createNewuser,
  createToken,
  update,
  getUsers,
  getTrailsByUserId,
};