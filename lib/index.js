var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
context.globalCompositeOperation='destination-over';

safetyPatch();

function safetyPatch() {
context.beginPath();
context.rect(0, 125, 300, 50);
context.fillStyle = "lightgreen";
context.fill();
}

fillPond();

function fillPond() {
context.beginPath();
context.rect(0, 0, 300, 150);
context.fillStyle = "blue";
context.fill();
}

// context.globalCompositeOperation='source-over';

var frog1 = new Frog(145, 290, 10, 10, 'green');
// var frog2 = new Frog(145, 305, 10, 10, 'purple');
// var frog3 = new Frog(145, 305, 10, 10, 'red');
// var block1 = new Obstacle (300, 275, 30, 10, 'brown');
// const frogArray = [frog1, frog2, frog3];
const obsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 20; obs++) {
    let yLocation = Math.floor((Math.random() * 300) - 25);
    let xLocation = Math.floor(Math.random() * 300 + 100);
    let obs = new Obstacle(xLocation, yLocation, 30, 10, 'orange');
    obsArray.push(obs);
    // obs.draw(context);
  }
  // console.log(obsArray);
  gameLoop(obsArray);
  
  // requestAnimationFrame(gameLoop);
}
generateObstacles();

// console.log(frog1);
// console.log(context);
// var blocks =[ block1, block2 ];

frog1.draw(context);
// block1.draw(context);

window.addEventListener('keydown', moveFrog);


function moveFrog(e) {
  e.preventDefault();
  // console.log(frogArray);
  frog1.erase(context).move(e).draw(context);
  if(frog1.y <= 0) {
    frog1.y = 305;
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
     if (obs.x <= -30) {
      obs.x = 300;
      obs.erase(context).move().draw(context);
  }
  });
  safetyPatch();
  fillPond()
  requestAnimationFrame(gameLoop);

// function gameLoop (obs) { 
  //   console.log(obs)
  //   obs.erase(context).move().draw(context);
  //   requestAnimationFrame(gameLoop);
  //   if (obs.x <= -30) {
    //     obs.x = 300;
    //     // block1.erase(context).move().draw(context);
    //   }
    // }
    // requestAnimationFrame(gameLoop);

// function gameLoop () {
//   blocks.forEach( function (block) { 
//     if(block.x >= canvas.width - 10 || block.y >= canvas.height - 10) {
//       return;
//     } else {
//       block.erase(context).move().draw(context);
//     }
//   });
//   requestAnimationFrame(gameLoop);
// };

// requestAnimationFrame(gameLoop);

function collisionDetection (obs) {
  var f = frog1;
  var o = obs;
  // console.log(obs);
  // console.log(o);
  o.forEach(function () {
    if (f.x > o.x &&
      f.x + f.x.width < o.x + o.x + o.x.width) {
      console.log('boom');
      }
  })};