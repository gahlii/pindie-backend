const { sendUserCreated, sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');
const { checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require('../middlewares/checkers');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require('../middlewares/users');

const usersRouter = require('express').Router()

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
); 
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
  
module.exports = usersRouter;