class Game {
  constructor () {
    this.lives = 3;
    this.time = time; //aprox 45 seconds in traditional game
    this.level = level;
  }

  collisionDetection (gamePieceA, gamePieceArray) {
    var a = gamePieceA;
    var bArray = gamePieceArray;

    bArray.forEach(function (b) {
      if (a.x + a.width > b.x &&
        a.x < b.x + b.width &&
        a.y + a.height > b.y &&
        a.y < b.y + b.height) {
        console.log('You Died.')
      // document.location.reload();
      }
    });
  }
    
  levelUp () {
    var frogCounter = 0;
    var levelArray = [1, 2, 3, 4];
    var levelCounter = 0;
      
    if (frogCounter === 3) {
      levelCounter++     
    }
  }
}