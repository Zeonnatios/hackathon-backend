const router = require('express').Router();
const { 
  createNewuser,
  createToken,
  updateUser,
  getUsers,
  getTrailsByUserId,
} = require('../controllers/userController');

const { 
  registerAuthenticator, 
  loginAuthenticator, 
  jwtValidation,
  verifyName } = require('../middleware');

router.get('/users', [getUsers]);
router.get('/users/:id', [getUsers]);
router.get('/users/trails/:userId', [getTrailsByUserId]);
router.post('/users/', [registerAuthenticator, verifyName, createNewuser]);
router.post('/login/', [loginAuthenticator, createToken]);
router.put('/users/:id', [jwtValidation, updateUser]);

module.exports = router;