const router = require('express').Router();

const getDoctorBySection = require('../controllers/doctor/getDoctorBySection');
const getDoctorById = require('../controllers/doctor/getDoctorById');
const updateDoctor  = require('../controllers/doctor/updateDoctor');
const getAllDoctors = require('../controllers/doctor/getAllDoctors');
const registerDoctor = require('../controllers/doctor/registerDoctor');
const loginDoctor = require('../controllers/doctor/loginDoctor');
const getCurrentDoctor = require('../controllers/doctor/getCurrentDoctor');

router.get('/', getAllDoctors);
router.get('/section/:sectionId', getDoctorBySection);
router.get('/current', getCurrentDoctor);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.post('/login', loginDoctor);
router.post('/register', registerDoctor);

module.exports = router;
