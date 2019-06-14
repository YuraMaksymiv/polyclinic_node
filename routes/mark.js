const router = require('express').Router();

const getMarkByDoctor = require('../controllers/mark/getMarkByDoctor');
const createMark = require('../controllers/mark/createMark');


router.get('/:id', getMarkByDoctor);
router.post('/', createMark);


module.exports = router;
