const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game');

describe('Game', function() {

    it('should be a function', function () {
        var game = new Game();
        assert.isFunction(Game);
    })

    it('should start at level 1', function () {
        var game = new Game();
        assert.notEqual(game.level, 0);
        assert.equal(game.level, 1);
    })

    it('should level up', function () {
        var game = new Game();
        assert.equal(game.level, 1);
        game.levelUp();
        assert.equal(game.level, 2);
    })
})