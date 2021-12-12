const router = require('express').Router();
const { createNewuser, updateUser } = require('../controllers/userController');
const { registerAuthenticator, loginAuthenticator, createToken } = require('../middleware');

router.post('/users/', [registerAuthenticator, createNewuser]);
router.post('/login/', [loginAuthenticator, createToken]);

router.put('/users/:id', updateUser);

module.exports = router;
