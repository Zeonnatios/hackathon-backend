const router = require('express').Router();
const {
  deleteTrail,
  createNewTrail,
  getTrailsList,
  getTrailById,
  editTrail,
} = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries, verifyUser } = require('../middleware');

router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);
router.get('/home', [jwtValidation, getTrailsList]);
router.delete('/trails/:id', [jwtValidation, deleteTrail]);
router.put('/trails/:id', [jwtValidation, validateTrailEntries, editTrail]);
router.delete('/trails/:id', [jwtValidation, verifyUser, deleteTrail]);
router.get('/trails/:id', [jwtValidation, getTrailById]);

module.exports = router;
