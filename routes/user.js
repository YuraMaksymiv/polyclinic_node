const router = require('express').Router();

const registerUser = require('../controllers/user/registerUser');
const loginUser = require('../controllers/user/loginUser');
const allUsers = require('../controllers/user/getAllUsers');
const getCurrentUser = require('../controllers/user/getCurrentUser');

router.get('/', allUsers);
router.get('/current', getCurrentUser);
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
