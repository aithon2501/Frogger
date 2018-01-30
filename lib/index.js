var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');
var GamePiece = require('./GamePiece')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvas2 = document.getElementById('home');
var context2 = canvas.getContext('2d');
var width = canvas2.getAttribute('width');
var height = canvas2.getAttribute('height');
var levelArray = [1, 2, 3, 4];
var levelCounter = 0;

context2.beginPath();
context2.rect(0, 0, 150, 30);
context2.fillStyle = "greenyellow";
context2.fill();
context2.font= "20px Georgia";
context2.fillStyle = 'white';
context2.fillText(`Game Level: ${levelArray[levelCounter]}` , 10, 20);

var frog1 = new Frog(235, 480, 20, 20, 'green');

canvas2.addEventListener('click', hideHomeScreen);
document.addEventListener('keydown', hideHomeScreen);

function hideHomeScreen() {
  canvas2.style.display = 'none';
}

const obsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 20; obs++) {
    let yLocation = Math.floor((Math.random() * canvas.height) + 35);
    let xLocation = Math.floor(Math.random() * canvas.width + 300);
    let obs = new Obstacle(xLocation, yLocation, 40, 20, 'orange');
    obsArray.push(obs);
  }
  gameLoop(obsArray);
}
generateObstacles();

frog1.draw(context);


window.addEventListener('keydown', moveFrog);

var counter = 0;

function moveFrog(e) {
  // var levelArray = [1, 2, 3];
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
  if(frog1.y <= 0) {
    frog1.y = 500;
    frog1.x = 235;
    frog1.color = getRandomColor();
    counter++
    console.log(counter);
    console.log(levelCounter);
  }
    if(counter === 3) {
    levelCounter++
    generateObstacles();
    context2.beginPath();
    context2.rect(0, 0, 150, 30);
    context2.fillStyle = "greenyellow";
    context2.fill();
    context2.fillStyle = 'white';
    context2.fillText(`Game Level: ${levelArray[levelCounter]}`, 10, 20);
    counter = 0;
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
  // collisionDetection(obsArray);
};

// function collisionDetection (obsArray) {
//   var f = frog1;
//   var o = obsArray;
//   o.forEach(function (obs) {
//     console.log(f.x);
//     if (f.x > obs.x &&
//       f.x < obs.x + obs.width &&
//       f.y > obs.y &&
//       f.y < obs.y + obs.height) {
//         console.log("Game Over");
//         document.location.reload();
//     }
//   });
// }