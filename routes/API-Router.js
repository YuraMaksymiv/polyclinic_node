const ApiRouter = require('express').Router();
const doctorRouter = require('./doctor');
const sectionRouter = require('./section');
const markRouter = require('./mark');
const userRouter = require('./user');
const commentRouter = require('./comment');

ApiRouter.use('/doctor', doctorRouter);
ApiRouter.use('/section', sectionRouter);
ApiRouter.use('/mark', markRouter);
ApiRouter.use('/user', userRouter);
ApiRouter.use('/comment', commentRouter);

module.exports = ApiRouter;