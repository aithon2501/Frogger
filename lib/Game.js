class Game {
    constructor () {
        // this.lives = 3;
        // this.time = time; //aprox 45 seconds in traditional game
        this.level = 1;  
        this.levelArray = [1, 2, 3, 4];     
    }

    collisionDetection (gamePieceA, gamePieceArray) {
        var a = gamePieceA;
        var bArray = gamePieceArray;
        bArray.forEach(function (b) {
          if (a.x + a.width > b.x &&
            a.x < b.x + b.width &&
            a.y + a.height > b.y &&
            a.y < b.y + b.height) {  
                console.log('boom');
                document.getElementById('controls').style.display = 'block';
                return true;
          }
        });
      };
    
      levelUp () {
        if(frogCounter === 3) {
        game.level++ 
      }
    }
}

module.exports = Game;
