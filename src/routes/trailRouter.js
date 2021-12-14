const router = require('express').Router();
const {
  deleteTrail,
  createNewTrail,
  getTrailsList,
  getTrailById,
  editTrail,
  getTrailsByTechnology,
  addNewLike,
} = require('../controllers/trailController');
const { jwtValidation, validateTrailEntries, verifyUser } = require('../middleware');

router.get('/home', [jwtValidation, getTrailsList]);
router.get('/trails/:id', [jwtValidation, getTrailById]);
router.get('/trails/tech/:technology', [jwtValidation, getTrailsByTechnology]);
router.post('/trails/', [jwtValidation, validateTrailEntries, createNewTrail]);
router.put('/trails/:id', [jwtValidation, validateTrailEntries, editTrail]);
router.post('/trails/:id', [jwtValidation, addNewLike]);
router.delete('/trails/:id', [jwtValidation, verifyUser, deleteTrail]);

module.exports = router;
