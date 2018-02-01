let Frog = require('./Frog.js');
let Car = require('./Car.js');
let Log = require('./Log.js');
let Game = require('./Game.js');
let Water = require('./Water.js');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let canvas2 = document.getElementById('home');
let context2 = canvas.getContext('2d');

const carsArray = [];
const logsArray = [];
const waterArray = [];

let game = new Game();
let frog1 = new Frog(235, 480, 20, 20, 'green');
let water = new Water (0, 40, 500, 200);

let newGameButton = document.querySelector('.new-game-btn'); 

newGameButton.addEventListener('click', startNewGame);
canvas2.addEventListener('click', hideHomeScreen);
document.addEventListener('keydown', hideHomeScreen);
document.getElementById('controls').style.display = 'none';

drawLevelCounter();

function hideHomeScreen() {
  canvas2.style.display = 'none';
}

function generateObstacles () {
  for (let car = 0; car < 20; car++) {
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

    waterArray.push(water);
  }
  gameLoop(carsArray, logsArray);
}
generateObstacles();

frog1.draw(context);

window.addEventListener('keydown', moveFrog);

function moveFrog(e) {
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
  if (frog1.y <= 0) {
    frog1.y = 520;
    frog1.x = 235;
    frog1.color = getRandomColor();
    frog1.frogCounter++
    game.levelUp(frog1.frogCounter);
    drawLevelCounter();
  }
  if (frog1.frogCounter === 3) {
    generateObstacles();
    frog1.frogCounter = 0;
  }
}

function drawLevelCounter () {
  context2.beginPath();
  context2.rect(0, 0, 150, 30);
  context2.fillStyle = "forestgreen";
  context2.fill();
  context2.font = '18px Georgia';
  context2.fillStyle = 'white';
  context2.fillText(`Game Level: ${game.level}`, 20, 20);
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
  collisionDetection(frog1, carsArray);
  collisionDetection(frog1, logsArray);
  isDead(frog1)
}

function collisionDetection (gamePieceA, gamePieceArray) {
  let a = gamePieceA;

  gamePieceArray.forEach(function (b) {
    if (a.x + a.width > b.x &&
      a.x < b.x + b.width &&
      a.y + a.height > b.y &&
      a.y < b.y + b.height) {
      frog1.collision = true;
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