const userModel = require('../models/userModel');

const createNewuser = async (user) => {
  const data = await userModel.createNewUser(user);
  return data;
};

module.exports = {
  createNewuser,
};