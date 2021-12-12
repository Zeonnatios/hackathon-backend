const router = require('express').Router();
const { createNewuser, createToken, updateUser } = require('../controllers/userController');
const { 
  registerAuthenticator, 
  loginAuthenticator, 
  jwtValidation,
  verifyName } = require('../middleware');

router.post('/users/', [registerAuthenticator, verifyName, createNewuser]);
router.post('/login/', [loginAuthenticator, createToken]);
router.put('/users/:id', [jwtValidation, updateUser]);

module.exports = router;