const router = require('express').Router();
const { createNewuser } = require('../controllers/userController');
const { registerAuth } = require('../middleware/registerAuthenticator');

router.post('/users/', [registerAuth, createNewuser]);

module.exports = router;
