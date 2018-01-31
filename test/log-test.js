var assert = require('chai').assert;
var Log = require('../lib/Log');

describe('Log', function () {

  it('should be a function', function () {
    assert.isFunction(Log);
  });

  it('should have an x-value', function () {
    var log = new Log(160, 33, 24, 29, 'brown');
    assert.equal(log.x, 160);
  });

  it('show have a y-value', function () {
    var log = new Log(235, 480, 20, 20, 'green');
    assert.equal(log.y, 480);
  });

  it('should have a width', function () {
    var log = new Log(235, 480, 20, 20, 'green');
    assert.equal(log.width, 20);
  });

  it('should have a height', function () {
    var log = new Log(235, 480, 20, 30, 'green');
    assert.equal(log.height, 30);
  });

  it('should have a color', function () {
    var log = new Log(235, 480, 20, 20, 'red');
    assert.equal(log.color, 'red');
  });

  it('should float right', function () {
    var log = new Log(235, 480, 20, 20, 'brown');
    assert.equal(log.x, 235);

    log.move();

    assert.equal(log.x, 236);
  });
});