var GamePiece = require('./GamePiece.js');

class Frog extends GamePiece {

    constructor (x, y, width, height, color) {
        super (x, y, width, height, color)
        this.frogCounter = 0;
    }

  move(e) {
    if (e.keyCode === 38) {
      this.y -= 40;
    } else if (e.keyCode === 37) {
      this.x -= 40;
    } else if (e.keyCode === 40) {
      this.y += 40;
    } else if (e.keyCode === 39) {
      this.x += 40;
    }
    return this;
  }

  move2() {
    this.x++;
  }
}

module.exports = Frog;