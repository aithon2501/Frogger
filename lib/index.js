var Frog = require('./Block.js');
var Obstacle = require('./Obstacle.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frog1 = new Frog(145, 290, 10, 10, 'green');
var block1 = new Obstacle (300, 275, 30, 10, 'brown');

console.log(frog1);
// console.log(context);
// var blocks =[ block1, block2 ];

frog1.draw(context);
block1.draw(context);

window.addEventListener('keydown', moveFrog);

function moveFrog(e) {
  e.preventDefault();
  frog1.erase(context).move(e).draw(context);
}

function gameLoop () {
  block1.erase(context).move().draw(context);
  requestAnimationFrame(gameLoop);
  if (block1.x <= -30) {
    block1.x = 300;
    // block1.erase(context).move().draw(context);
  }
}
requestAnimationFrame(gameLoop);

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