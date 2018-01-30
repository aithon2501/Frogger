class Frog extends GamePiece {
    constructor (x, y, width, height, color) {
        super (x, y, width, height, color)
        // this.left = (x, y);
        // this.right = (x + width, y.width);
    }
    move(e) {
        if(e.keyCode === 38) {
          this.y -= 20;
        }
        else if(e.keyCode === 37) {
          this.x -= 20;
        }
        else if(e.keyCode === 40) {
          this.y += 20;
        }
        else if(e.keyCode === 39) {
          this.x += 20;
        }
        return this;
      }
}

module.exports = Frog;