function GameController(gameView, gameModel) {
  this.init(gameView, gameModel);
}

GameController.prototype.constructor = GameController;

GameController.prototype.init = function (gameView, gameModel) {
  this.gameView = gameView;
  this.gameModel = gameModel;


  //this.gameView.on('irriguateField', this.irriguateField);

  //this.startGame();
};
