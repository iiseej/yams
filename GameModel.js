function GameModel() {
  EventEmitter.call(this);
  this.init();
}


GameModel.prototype = Object.create(EventEmitter.prototype);
GameModel.prototype.constructor = GameModel;

GameModel.prototype.init = function () {
  this.figures = ['les as','les 2','les 3', 'les 4','les 5','les 6', 'manque','total','le petit','le grand','différence','Petite suite','grande suite','total suite','brelan','full','carré','yams','bonus yams','yams sec','Total bas','Final score' ];
  this.setRow(1);
  this.setGameColumns(3);
  this.setFigures(this.figures);
};

GameModel.prototype.setRow = function (row) {
  this.row = row ;
  this.emit('setRow', this.row);
};

GameModel.prototype.setGameColumns = function (gameColumns) {
  this.gameColumns = gameColumns;
  this.emit('setGameColumns', this.gameColumns);
};

GameModel.prototype.setFigures = function (figures) {
  this.figures = figures;
  this.emit('setFigures', this.figures);
};
