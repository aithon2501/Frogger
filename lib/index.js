var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frog1 = new Frog(145, 290, 10, 10, 'green');
// var block1 = new Obstacle (300, 275, 30, 10, 'brown');
const obsArray = [];

function generateObstacles () {
  for(let obs = 0; obs < 20; obs++) {
    let yLocation = Math.floor((Math.random() * 300) - 25);
    let obs = new Obstacle(200, yLocation, 30, 10, 'orange');
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
  frog1.erase(context).move(e).draw(context);
}

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

function gameLoop () {
  obsArray.forEach( function (obs) {
    obs.erase(context).move().draw(context);
     if (obs.x <= -30) {
      obs.x = 300;
      obs.erase(context).move().draw(context);
  }
  });
  requestAnimationFrame(gameLoop);
};

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

var collision = function (frog, obstacle) {
  return !(frog1 === obstacle[i] ||
    frog1.center.x + frog1.center.x / 2 < obstacle[i].center.x - obstacle[i].center.x / 2 ||
    frog1.center.y + frog1.center.y / 2 < obstacle[i].center.y - obstacle[i].center.y / 2 ||
    frog1.center.x - frog1.center.x / 2 < obstacle[i].center.x - obstacle[i].center.y / 2 ||
    frog1.center.y - frog1.center.y / 2 < obstacle[i].center.y - obstacle[i].center.y /2
  );
}