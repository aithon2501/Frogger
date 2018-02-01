var assert = require('chai').assert;
var Water = require('../lib/Water');

describe('Water', function () {

  it('should be a function', function () {
    assert.isFunction(Water);
  });

  it('should have an x-value', function () {
    var water = new Water(235, 480, 20, 20,);
    assert.equal(water.x, 235);
  });

  it('show have a y-value', function () {
    var water = new Water(235, 480, 20, 20);
    assert.equal(water.y, 480);
  });

  it('should have a width', function () {
    var water = new Water(235, 480, 20, 20);
    assert.equal(water.width, 20);
  });

  it('should have a height', function () {
    var water = new Water(235, 480, 20, 30);
    assert.equal(water.height, 30);
  });
})
