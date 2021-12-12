const router = require('express').Router();
const {
  deleteTrail,
  createNewTrail,
  getTrailsList,
  getTrailById,
} = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries } = require('../middleware');

router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);
router.get('/home', [jwtValidation, getTrailsList]);
router.delete('/trails/:id', [jwtValidation, deleteTrail]);
router.get('/trails/:id', [jwtValidation, getTrailById]);

module.exports = router;
