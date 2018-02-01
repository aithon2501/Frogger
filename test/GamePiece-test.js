const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', function() {

  it('should be a function', function() {
    let gamePiece = new GamePiece();
    assert.isFunction(GamePiece);
  })

  it('should have an x value', function() {
    let gamePiece = new GamePiece(10);
    assert.equal(gamePiece.x, 10);
  })

  it('should have a y value', function() {
    let gamePiece = new GamePiece(10, 10);
    assert.equal(gamePiece.y, 10);
  });

  it('should have a width', function() {
    let gamePiece = new GamePiece (10, 10, 25);
    assert.equal(gamePiece.width, 25);
  });

  it('should have a height', function() {
    let gamePiece = new GamePiece (10, 10, 25, 25);
    assert.equal(gamePiece.height, 25);
  });

  it('should have a color', function() {
    let gamePiece = new GamePiece(10, 10, 25, 25, '#000000');
    assert.equal(gamePiece.color, '#000000');
  });

});