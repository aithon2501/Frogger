let GamePiece = require('./GamePiece.js');

class Log extends GamePiece {
  constructor (x, y, width, height, color) {
    super (x, y, width, height, color);
  }
  move() {
    this.x++;
    return this;
  }
}

module.exports = Log;