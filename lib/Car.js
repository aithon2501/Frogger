class Car extends GamePiece {
    constructor (x, y, width, height, color) {
        super (x, y, width, height, color);
    }
    moveL() {
        this.x--;
        return this;
      }
    moveR() {
        this.x++;
        return this;
    } 
}

module.exports = Car;