var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');
var GamePiece = require('./GamePiece.js')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvas2 = document.getElementById('home');
var context2 = canvas.getContext('2d');
var width = canvas2.getAttribute('width');
var height = canvas2.getAttribute('height');

var frog1 = new Frog(235, 480, 20, 20, 'green');

canvas2.addEventListener('click', hideHomeScreen);

function hideHomeScreen() {
  console.log('second canvas')
  canvas2.style.display = 'none';
  generateObstacles();
  frog1.draw(context);
}

const obsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 40; obs++) {
    // let yLocation = Math.floor((Math.random() * canvas.height) + 35);
    let rows = [440, 400, 360, 320, 280, 200, 160, 120, 80, 40];
    let yLocation = rows[Math.floor(Math.random() * rows.length)];
    let xLocation = Math.floor(Math.random() * canvas.width + 100);
    let obs = new Obstacle (xLocation, yLocation, 40, 20, 'orange');
    obsArray.push(obs);
  }
  gameLoop(obsArray);
}
// generateObstacles();

// frog1.draw(context);


window.addEventListener('keydown', moveFrog);


function moveFrog(e) {
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
  if(frog1.y <= 0) {
    frog1.y = 520;
    frog1.x = 235;
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
  collisionDetection(frog1, obsArray);
};

function collisionDetection (frog1, obsArray) {
  var f = frog1;
  var o = obsArray;
  o.forEach(function (obs) {
    if (f.x + f.width > obs.x &&
      f.x < obs.x + obs.width &&
      f.y + f.height > obs.y &&
      f.y < obs.y + obs.height) {
        alert('You Died.')
        document.location.reload();
    }
  });
}