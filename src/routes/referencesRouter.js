const router = require('express').Router();
const { getReferences } = require('../controllers/referenceController');

router.get('/references', [getReferences]);

module.exports = router;