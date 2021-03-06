const { StatusCodes } = require('http-status-codes');
const JWT = require('jsonwebtoken');
const { getUserByEmail } = require('../models/userModel');

const JWT_CONFIG = {
  expiresIn: '12d',
  algorithm: 'HS256',
};

// espalha isso aqui em MSC

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const verifyUser = await getUserByEmail({ email, password });

  if (!verifyUser) {
    return next({
      status: StatusCodes.NOT_FOUND,
      message: 'Não existe usuário com esse e-mail ou senha.',
    });
  }

  const token = JWT.sign({ data: verifyUser }, process.env.LOGIN_SECRET, JWT_CONFIG);

  return res.status(StatusCodes.CREATED).json({
    token,
    user: {
      ...verifyUser,
    },
  });
};