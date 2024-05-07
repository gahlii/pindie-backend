const { sendUserCreated, sendAllUsers, sendUserById, sendUserUpdated } = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser } = require('../middlewares/users');

const usersRouter = require('express').Router()

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  );
usersRouter.get('/users/:id', findUserById, sendUserById)
usersRouter.put('/users/:id', updateUser, sendUserUpdated)
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
  
module.exports = usersRouter;