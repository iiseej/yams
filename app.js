var gameModel = {};
var gameView = {};
var gameController = {};
//var fieldsNumber = 3;
//
$(function() {


  gameModel = new GameModel();
  gameView = new GameView(gameModel);
  gameController = new GameController(gameView, gameModel);
});
