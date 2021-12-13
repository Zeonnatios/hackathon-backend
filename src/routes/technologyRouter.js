const router = require('express').Router();
const { getTechnologies } = require('../controllers/technologyController');

router.get('/technologies', [getTechnologies]);

module.exports = router;