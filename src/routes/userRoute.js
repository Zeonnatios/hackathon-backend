const router = require('express').Router();
const { createNewuser, createToken } = require('../controllers/userController');
const { registerAuthenticator, loginAuthenticator } = require('../middleware');

router.post('/users/', [registerAuthenticator, createNewuser]);
router.post('/login/', [loginAuthenticator, createToken]);

module.exports = router;