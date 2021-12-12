const router = require('express').Router();
const { createNewTrail } = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries } = require('../middleware');

router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);

module.exports = router;
