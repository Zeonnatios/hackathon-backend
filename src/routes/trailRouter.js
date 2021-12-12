const router = require('express').Router();
const { createNewTrail, getTrailsList, getTrailById } = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries } = require('../middleware');

router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);
router.get('/home', [jwtValidation, getTrailsList]);
router.get('/trails/:id', [jwtValidation, getTrailById]);

module.exports = router;
