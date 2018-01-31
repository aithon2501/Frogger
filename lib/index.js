// var Frog = require('./Block.js');
// var Obstacle = require('./Obstacle.js');
var GamePiece = require('./GamePiece.js');
var Frog = require('./Frog.js');
var Car = require('./Car.js');
var Log = require('./Log.js');

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
const logsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 20; obs++) {
    // let yLocation = Math.floor((Math.random() * canvas.height) + 35);
    let rows = [440, 400, 360, 320, 280];
    let rows2 = [200, 160, 120, 80, 40];
    let yLocation = rows[Math.floor(Math.random() * rows.length)];
    let xLocation = Math.floor(Math.random() * canvas.width + 100);
    let obs = new Car (xLocation, yLocation, 40, 20, 'orange');
    obsArray.push(obs);
    let y2Location = rows2[Math.floor(Math.random() * rows.length)];
    let x2Location = Math.floor(Math.random() * canvas.width + 100);
    let logs = new Log (x2Location, y2Location, 40, 20, 'brown');
    logsArray.push(logs);
  }
  gameLoop(obsArray, logsArray);
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

    frog1.y = 520;

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
  logsArray.forEach( function (log) {
    log.erase(context).move().draw(context);
    if (log.x >= 550) {
      log.x = 0;
      log.erase(context).move().draw(context);
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
        console.log('You Died.')
        // document.location.reload();
    }
  });
}