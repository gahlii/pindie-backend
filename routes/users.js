const { sendUserCreated, sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const { checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require('../middlewares/checkers');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, filterPassword, hashPassword } = require('../middlewares/users');

const usersRouter = require('express').Router()

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
); 
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
); 
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  
module.exports = usersRouter;