const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');
const Car = require('../lib/Car');

describe('Car', function() {  
    
  it('should be a function', function() {
    let car = new Car();
    assert.isFunction(Car);
  });

  it('should be an instance of GamePiece', function() {
    let car = new Car();
    assert.instanceOf(car, GamePiece);
  });

  it('should have an x value', function() {
    let car = new Car(10);
    assert.equal(car.x, 10);
  });

  it('should have a y value', function() {
    let car = new Car(10, 10);
    assert.equal(car.y, 10);
  });

  it('should have a width', function() {
    let car = new Car (10, 10, 25);
    assert.equal(car.width, 25);
  });

  it('should have a height', function() {
    let car = new Car (10, 10, 25, 25);
    assert.equal(car.height, 25);
  });

  it('should have a color', function() {
    let car = new Car(10, 10, 25, 25, '#000000');
    assert.equal(car.color, '#000000');
  });

  it('should move from right to left', function() {
    let car = new Car(10, 10, 25, 25, '#000000');
    assert.equal(car.x, 10);
    car.move();
    assert.equal(car.x, 9);
  });

})