class GamePiece {
    constructor (x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        return this;
      }
      erase(ctx) {
        ctx.clearRect(this.x, this.y, this.width, this.height);
        return this;
      }
}

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

class Log extends GamePiece {
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

module.exports = GamePiece;