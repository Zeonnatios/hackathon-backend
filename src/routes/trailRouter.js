const router = require('express').Router();
const { createNewTrail, getTrailsList } = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries } = require('../middleware');

router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);
router.get('/home', [jwtValidation, getTrailsList]);

module.exports = router;
