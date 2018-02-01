var GamePiece = require('./GamePiece.js');
var Frog = require('./Frog.js');
var Car = require('./Car.js');
var Log = require('./Log.js');
var Game = require('./Game.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvas2 = document.getElementById('home');
var context2 = canvas.getContext('2d');
const carsArray = [];
const logsArray = [];
var game = new Game();
var frog1 = new Frog(235, 480, 20, 20, 'green');
var newGameButton = document.querySelector('.new-game-btn');

drawLevelCounter();

canvas2.addEventListener('click', hideHomeScreen);
document.addEventListener('keydown', hideHomeScreen);

function hideHomeScreen() {
  canvas2.style.display = 'none';
}

function generateObstacles () {
  for(let car = 0; car < 20; car++) {
    let rows = [440, 400, 360, 320, 280];
    let rows2 = [200, 160, 120, 80, 40];
    let yLocation = rows[Math.floor(Math.random() * rows.length)];
    let xLocation = Math.floor(Math.random() * canvas.width + 100);
    let car = new Car (xLocation, yLocation, 40, 20, 'orange');
    carsArray.push(car);
    let y2Location = rows2[Math.floor(Math.random() * rows.length)];
    let x2Location = Math.floor(Math.random() * canvas.width + 100);
    let logs = new Log (x2Location, y2Location, 40, 20, 'brown');

    logsArray.push(logs);
  }
  gameLoop(carsArray, logsArray);
}
generateObstacles();

frog1.draw(context);


window.addEventListener('keydown', moveFrog);

var frogCounter = 0;

function moveFrog(e) {
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
  if (frog1.y <= 0) {
    frog1.y = 520;
    frog1.x = 235;
    frog1.color = getRandomColor();
    frogCounter++
    game.levelUp(frogCounter);
    drawLevelCounter();
  }
    isDead();
  if (frogCounter === 3) {
    generateObstacles();
    frogCounter = 0;
  }
}

function drawLevelCounter () {
  context2.beginPath();
  context2.rect(0, 0, 150, 30);
  context2.fillStyle = "greenyellow";
  context2.fill();
  context2.fillStyle = 'white';
  context2.fillText(`Game Level: ${game.level}`, 10, 20);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('controls').style.display = 'none';

function gameLoop () {
  carsArray.forEach( function (car) {
    car.erase(context).move().draw(context);
     if (car.x <= -50) {
      car.x = 500;
      car.erase(context).move().draw(context);
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
  isDead();
  game.collisionDetection(frog1, carsArray);
  game.collisionDetection(frog1, logsArray);
};

function isDead (frog) {
  if (game.dead === true) {
  console.log(game.collisionDetection)
  document.getElementById('controls').style.display = 'block';
  frog.fillStyle = '#FF0000';
  frog.draw(context);
  loadSound("images/350987__cabled-mess__lose-c-05.wav").play;
  }
}

newGameButton.addEventListener('click', startNewGame);

function startNewGame () {
  location.reload();
}
