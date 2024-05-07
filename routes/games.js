const { sendGameCreated, sendAllGames, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe } = require('../middlewares/checkers');
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require('../middlewares/games');

const gamesRouter = require('express').Router();


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
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
    updateGame,
    sendGameUpdated
  ); 
gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;