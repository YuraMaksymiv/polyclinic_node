const router = require('express').Router();

const createComment = require('../controllers/comment/createComment');
const updateComment = require('../controllers/comment/updateComment');
const deleteComment = require('../controllers/comment/deleteComment');
const getCommentByDoctorID = require('../controllers/comment/getCommentByDoctorID');

router.get('/:id', getCommentByDoctorID);
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;
