const router = require('express').Router();
const { createNewuser } = require('../controllers/userController');
const { registerAuthenticator, loginAuthenticator, createToken } = require('../middleware');

router.post('/users/', [registerAuthenticator, createNewuser]);
router.post('/login/', [loginAuthenticator, createToken]);

module.exports = router;
