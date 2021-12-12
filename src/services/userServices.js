const { StatusCodes } = require('http-status-codes');
const userModel = require('../models/userModel');

const createNewuser = async (user) => {
  const validateEmail = await userModel.getUserByEmail(user);
  if (validateEmail) {
    return {
      error: {
        status: StatusCodes.CONFLICT,
        message: 'Esse e-mail já existe. Tente outro.',
      },
    };
}
  const data = await userModel.createNewUser(user);
  delete data.password;
  return data;
};

module.exports = {
  createNewuser,
};