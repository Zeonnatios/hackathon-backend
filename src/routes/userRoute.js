const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/users/', controller.createNewuser);

module.exports = router;
