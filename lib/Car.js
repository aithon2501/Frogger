var GamePiece = require('./GamePiece.js');

class Car extends GamePiece {
  constructor (x, y, width, height, color) {
    super (x, y, width, height, color);
  }
  move() {
    this.x--;
    return this;
  }
}

module.exports = Car;