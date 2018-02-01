const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');
const Car = require('../lib/Car');

describe('Car', function() {
    
    
it('should be a function', function() {
    var car = new Car();
    assert.isFunction(Car);
});

it('should be an instance of GamePiece', function() {
    var car = new Car();
    assert.instanceOf(car, GamePiece);
});

it('should have an x value', function() {
    var car = new Car(10);
    assert.equal(car.x, 10);
});

it('should have a y value', function() {
    var car = new Car(10, 10);
    assert.equal(car.y, 10);
});

it('should have a width', function() {
    var car = new Car (10, 10, 25);
    assert.equal(car.width, 25);
});

it('should have a height', function() {
    var car = new Car (10, 10, 25, 25);
    assert.equal(car.height, 25);
});

it('should have a color', function() {
    var car = new Car(10, 10, 25, 25, '#000000');
    assert.equal(car.color, '#000000');
});

it('should move from right to left', function() {
    var car = new Car(10, 10, 25, 25, '#000000');
    assert.equal(car.x, 10);
    car.move();
    assert.equal(car.x, 9);
});

})