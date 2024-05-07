const { sendUserCreated, sendAllUsers, sendUserById } = require('../controllers/users');
const { findAllUsers, createUser, findUserById } = require('../middlewares/users');

const usersRouter = require('express').Router()

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  );
usersRouter.get('/users/:id', findUserById, sendUserById)
  
module.exports = usersRouter;