class Game {
    constructor () {
      this.dead = false;
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
            document.getElementById('controls').style.display = 'block';
          //test
        };
      });
}

    levelUp (frogCounter) {
      if(frogCounter === 3) {
        this.level++ 
        console.log(frogCounter)
        console.log(this.level)
      };
  };
};

module.exports = Game;
