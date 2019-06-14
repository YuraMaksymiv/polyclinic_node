const router = require('express').Router();

const getAllSections = require('../controllers/section/getAllSections');


router.get('/', getAllSections);

module.exports = router;