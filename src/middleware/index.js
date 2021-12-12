const loginAuthenticator = require('./loginAuthenticator');
const registerAuthenticator = require('./registerAuthenticator');
const createToken = require('./createToken');
const jwtValidation = require('./jwtValidation');
const validateTrailEntries = require('./trailAuthenticator');

module.exports = {
  loginAuthenticator,
  registerAuthenticator,
  createToken,
  jwtValidation,
  validateTrailEntries,
};