const { sendGameCreated, sendAllGames, sendGameById } = require('../controllers/games');
const { findAllGames, createGame, findGameById } = require('../middlewares/games');

const gamesRouter = require('express').Router();


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter;