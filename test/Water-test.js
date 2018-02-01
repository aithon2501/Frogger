const assert = require('chai').assert;
const Water = require('../lib/Water');

describe('Water', function () {

  it('should be a function', function () {
    assert.isFunction(Water);
  });

  it('should have an x-value', function () {
    let water = new Water(235, 480, 20, 20,);
    assert.equal(water.x, 235);
  });

  it('show have a y-value', function () {
    let water = new Water(235, 480, 20, 20);
    assert.equal(water.y, 480);
  });

  it('should have a width', function () {
    let water = new Water(235, 480, 20, 20);
    assert.equal(water.width, 20);
  });

  it('should have a height', function () {
    let water = new Water(235, 480, 20, 30);
    assert.equal(water.height, 30);
  });
})
