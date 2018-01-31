var assert = require('chai').assert;
var Frog = require('../lib/Frog');

describe('Frog', function () {

  it('should be a function', function () {
    assert.isFunction(Frog);
  });

  it('should have an x-value', function () {
    var frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.x, 235);
  });

  it('show have a y-value', function () {
    var frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.y, 480);
  });

  it('should have a width', function () {
    var frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.width, 20);
  });

  it('should have a height', function () {
    var frog = new Frog(235, 480, 20, 30, 'green');
    assert.equal(frog.height, 30);
  });

  it('should have a color', function () {
    var frog = new Frog(235, 480, 20, 20, 'red');
    assert.equal(frog.color, 'red');
  });

  it('should move up on arrow-up', function () {
    var frog = new Frog(235, 500, 20, 20, 'green');
    var e = {keyCode: 38};
    assert.equal(frog.y, 500);
    //an event is an object
    frog.move(e);
    assert.equal(frog.y, 460);
  });

  it('should move down on down-arrow', function () {
    var frog = new Frog(235, 400, 20, 20, 'green');
    var e = {keyCode: 40};
    assert.equal(frog.y, 400);
    frog.move(e);
    assert.equal(frog.y, 440);
  });

  it('should move left on left-arrow', function () {
    var frog = new Frog(235, 400, 20, 20, 'green');
    var e = {keyCode: 37};
    assert.equal(frog.x, 235);
    frog.move(e);
    assert.equal(frog.x, 215);
  });

  it('should move right on right-arrow', function () {
    var frog = new Frog(235, 400, 20, 20, 'green');
    var e = {keyCode: 39};
    assert.equal(frog.x, 235);
    frog.move(e);
    assert.equal(frog.x, 255);
  });

  it('should float right when standing on a log', function () {
    var frog = new Frog(235, 500, 20, 20, 'green');
    assert.equal(frog.x, 235);
    frog.move2();
    assert.equal(frog.x, 236);
  });
});