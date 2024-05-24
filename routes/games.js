const { sendGameCreated, sendAllGames, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe } = require('../middlewares/checkers');
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require('../middlewares/games');
const { checkAuth } = require("../middlewares/auth.js");

const gamesRouter = require('express').Router();


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  ); 
gamesRouter.delete(
    "/games/:id",
    checkAuth,
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;