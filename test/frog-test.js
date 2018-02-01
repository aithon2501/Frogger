const assert = require('chai').assert;
const Frog = require('../lib/Frog');

describe('Frog', function () {

  it('should be a function', function () {
    assert.isFunction(Frog);
  });

  it('should have an x-value', function () {
    let frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.x, 235);
  });

  it('show have a y-value', function () {
    let frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.y, 480);
  });

  it('should have a width', function () {
    let frog = new Frog(235, 480, 20, 20, 'green');
    assert.equal(frog.width, 20);
  });

  it('should have a height', function () {
    let frog = new Frog(235, 480, 20, 30, 'green');
    assert.equal(frog.height, 30);
  });

  it('should have a color', function () {
    let frog = new Frog(235, 480, 20, 20, 'red');
    assert.equal(frog.color, 'red');
  });

  it('should move up on arrow-up', function () {
    let frog = new Frog(235, 500, 20, 20, 'green');
    let e = {keyCode: 38};
    assert.equal(frog.y, 500);
    frog.move(e);
    assert.equal(frog.y, 460);
  });

  it('should move down on down-arrow', function () {
    let frog = new Frog(235, 400, 20, 20, 'green');
    let e = {keyCode: 40};
    assert.equal(frog.y, 400);
    frog.move(e);
    assert.equal(frog.y, 440);
  });

  it('should move left on left-arrow', function () {
    let frog = new Frog(235, 400, 20, 20, 'green');
    let e = {keyCode: 37};
    assert.equal(frog.x, 235);
    frog.move(e);
    assert.equal(frog.x, 195);
  });

  it('should move right on right-arrow', function () {
    let frog = new Frog(235, 400, 20, 20, 'green');
    let e = {keyCode: 39};
    assert.equal(frog.x, 235);
    frog.move(e);
    assert.equal(frog.x, 275);
  });

  it('should float right when standing on a log', function () {
    let frog = new Frog(235, 500, 20, 20, 'green');
    assert.equal(frog.x, 235);
    frog.move2();
    assert.equal(frog.x, 236);
  });
});