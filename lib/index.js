var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
context.globalCompositeOperation='destination-over';

var frog1 = new Frog(235, 470, 20, 20, 'green');

const obsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 20; obs++) {
    let yLocation = Math.floor((Math.random() * canvas.height) - 35);
    let xLocation = Math.floor(Math.random() * canvas.width + 100);
    let obs = new Obstacle(xLocation, yLocation, 40, 20, 'orange');
    obsArray.push(obs);
  }
  gameLoop(obsArray);
}
generateObstacles();

frog1.draw(context);


window.addEventListener('keydown', moveFrog);


function moveFrog(e) {
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
  if(frog1.y <= 0) {
    frog1.y = 505;
    frog1.color = getRandomColor();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function gameLoop () {
  obsArray.forEach( function (obs) {
    obs.erase(context).move().draw(context);
     if (obs.x <= -50) {
      obs.x = 500;
      obs.erase(context).move().draw(context);
  }
  });
  requestAnimationFrame(gameLoop);
  collisionDetection(obsArray);
};

function collisionDetection (obsArray) {
  var f = frog1;
  var o = obsArray;
 
  o.forEach(function (obs) {
    if (f.x > obs.x &&
      f.x + f.width < obs.x + obs.width &&
      f.y < obs.y &&
      f.y + f.height < obs.y + obs.height) {
        // alert("Game Over")
      console.log('game over');
      }
  })};