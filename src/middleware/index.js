const loginAuthenticator = require('./loginAuthenticator');
const registerAuthenticator = require('./registerAuthenticator');
const createToken = require('./createToken');
const jwtValidation = require('./jwtValidation');
const validateTrailEntries = require('./trailAuthenticator');
const validateStepsEntries = require('./stepAuthenticator');
const verifyName = require('./verifyName');
const verifyUser = require('./verifyUser');

module.exports = {
  loginAuthenticator,
  registerAuthenticator,
  createToken,
  jwtValidation,
  validateTrailEntries,
  verifyName,
  verifyUser,
  validateStepsEntries,
};