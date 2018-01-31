const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', function() {

it('should be a function', function() {
    var gamePiece = new GamePiece();
    assert.isFunction(GamePiece);
})

it('should have an x value', function() {
    var gamePiece = new GamePiece(10);
    assert.equal(gamePiece.x, 10);
})

it('should have a y value', function() {
    var gamePiece = new GamePiece(10, 10);
    assert.equal(gamePiece.y, 10);
});

it('should have a width', function() {
    var gamePiece = new GamePiece (10, 10, 25);
    assert.equal(gamePiece.width, 25);
});

it('should have a height', function() {
    var gamePiece = new GamePiece (10, 10, 25, 25);
    assert.equal(gamePiece.height, 25);
});

it('should have a color', function() {
    var gamePiece = new GamePiece(10, 10, 25, 25, '#000000');
    assert.equal(gamePiece.color, '#000000');
});



});