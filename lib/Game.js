class Game {
    constructor () {
        // this.lives = 3;
        // this.time = time; //aprox 45 seconds in traditional game
        this.level = 1;      
    }

    collisionDetection (gamePieceA, gamePieceArray) {
        var a = gamePieceA;
        var bArray = gamePieceArray;
        bArray.forEach(function (b) {
          if (a.x + a.width > b.x &&
            a.x < b.x + b.width &&
            a.y + a.height > b.y &&
            a.y < b.y + b.height) {     
                return true;
          }
        });
      }

      levelUp (frogCounter) {
          if(frogCounter === 3) {
              this.level++     
              console.log(this.level)
      }
    }
}

module.exports = Game;
