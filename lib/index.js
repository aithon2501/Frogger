let Frog = require('./Frog.js');
let Car = require('./Car.js');
let Log = require('./Log.js');
let Game = require('./Game.js');
let Water = require('./Water.js');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let canvasHome = document.getElementById('home');
let contextHome = canvas.getContext('2d');

const cars = [];
const logs = [];
const waters = [];

let game = new Game();
let frog = new Frog(235, 480, 20, 20, 'green');
let water = new Water (0, 40, 500, 200);


let newGameButton = document.querySelector('.new-game-btn'); 

newGameButton.addEventListener('click', startNewGame);
canvasHome.addEventListener('click', hideHomeScreen);
document.addEventListener('keydown', hideHomeScreen);
window.addEventListener('keydown', moveFrog);

document.getElementById('controls').style.display = 'none';

drawLevelCounter();

function hideHomeScreen() {
  canvasHome.style.display = 'none';
}

function generateObstacles () {
  for (let car = 0; car < 20; car++) {
    let carRows = [440, 400, 360, 320, 280];
    let logRows = [200, 160, 120, 80, 40];
    let carYLocation = carRows[Math.floor(Math.random() * carRows.length)];
    let carXLocation = Math.floor(Math.random() * canvas.width + 100);

    let car = new Car (carXLocation, carYLocation, 40, 20, 'orange');
    
    cars.push(car);
    let logYLocation = logRows[Math.floor(Math.random() * logRows.length)];
    let logXLocation = Math.floor(Math.random() * canvas.width + 100);

    let log = new Log (logXLocation, logYLocation, 40, 20, 'brown');

    logs.push(log);

    waters.push(water);
  }
  gameLoop(cars, logs);
}
generateObstacles();

frog.draw(context);

function moveFrog(e) {
  e.preventDefault();
  frog.erase(context).move(e).draw(context);
  if (frog.y <= 0) {
    frog.y = 520;
    frog.x = 235;
    frog.color = getRandomColor();
    frog.frogCounter++
    game.levelUp(frog.frogCounter);
    drawLevelCounter();
  }
  if (frog.frogCounter === 3) {
    generateObstacles();
    frog.frogCounter = 0;
  }
}

function drawLevelCounter () {
  contextHome.beginPath();
  contextHome.rect(0, 0, 150, 30);
  contextHome.fillStyle = "forestgreen";
  contextHome.fill();
  contextHome.font = '18px Georgia';
  contextHome.fillStyle = 'white';
  contextHome.fillText(`Game Level: ${game.level}`, 20, 20);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function gameLoop () {
  cars.forEach( function (car) {
    car.erase(context).move().draw(context);
    if (car.x <= -50) {
      car.x = 500;
      car.erase(context).move().draw(context);
    }
  });
  logs.forEach( function (log) {
    log.erase(context).move().draw(context);
    if (log.x >= 550) {
      log.x = 0;
      log.erase(context).move().draw(context);
    }
  });
  requestAnimationFrame(gameLoop);
  collisionDetection(frog, cars);
  collisionDetection(frog, logs);
  isDead(frog)
}

function collisionDetection (gamePieceA, gamePieceArray) {
  let a = gamePieceA;

  gamePieceArray.forEach(function (b) {
    if (a.x + a.width > b.x &&
      a.x < b.x + b.width &&
      a.y + a.height > b.y &&
      a.y < b.y + b.height) {
      frog.collision = true;
    }
  });
}

function isDead (frog) {
  if (frog.collision === true) {
    cancelAnimationFrame(gameLoop);
    document.getElementById('controls').style.display = 'block';
    frog.color = '#FF0000';
    frog.draw(context);
  }
}

function startNewGame () {
  location.reload();
}