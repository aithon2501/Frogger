class Game {
  constructor () {
    this.dead = false;
    this.level = 1;   
  }

  levelUp (frogCounter) {
    if (frogCounter === 3) {
      this.level++ 
    }
  }
}

module.exports = Game;
