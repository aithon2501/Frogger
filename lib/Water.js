let GamePiece = require('./GamePiece.js');

class Water extends GamePiece {
  constructor (x, y, width, height) {
    super (x, y, width, height)
  }
}

module.exports = Water;