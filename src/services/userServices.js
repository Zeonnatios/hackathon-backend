const userModel = require('../models/userModel');

const createNewuser = async (user) => {
  const data = await userModel.createNewUser(user);
  delete data.password;
  return data;
};

module.exports = {
  createNewuser,
};