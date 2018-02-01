var GamePiece = require('./GamePiece.js');

class Water extends GamePiece {
  constructor (x, y, width, height, color) {
    super (x, y, width, height, color)
  }
}

module.exports = Water;