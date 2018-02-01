const assert = require('chai').assert;
const Log = require('../lib/Log');

describe('Log', function () {

  it('should be a function', function () {
    assert.isFunction(Log);
  });

  it('should have an x-value', function () {
    let log = new Log(160, 33, 24, 29, 'brown');
    assert.equal(log.x, 160);
  });

  it('show have a y-value', function () {
    let log = new Log(235, 480, 20, 20, 'green');
    assert.equal(log.y, 480);
  });

  it('should have a width', function () {
    let log = new Log(235, 480, 20, 20, 'green');
    assert.equal(log.width, 20);
  });

  it('should have a height', function () {
    let log = new Log(235, 480, 20, 30, 'green');
    assert.equal(log.height, 30);
  });

  it('should have a color', function () {
    let log = new Log(235, 480, 20, 20, 'red');
    assert.equal(log.color, 'red');
  });

  it('should float right', function () {
    let log = new Log(235, 480, 20, 20, 'brown');
    assert.equal(log.x, 235);
    log.move();
    assert.equal(log.x, 236);
  });
});