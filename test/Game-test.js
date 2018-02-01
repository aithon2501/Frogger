const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game');

describe('Game', function() {

  it('should be a function', function () {
    let game = new Game();
    assert.isFunction(Game);
  })

  it('should start at level 1', function () {
    let game = new Game();
    assert.notEqual(game.level, 0);
    assert.equal(game.level, 1);
  })

  it('should level up', function () {
    let game = new Game();
    let frogCounter = 2;
    assert.equal(game.level, 1);
    frogCounter++
    game.levelUp(frogCounter);
    assert.equal(game.level, 2);
  })
})