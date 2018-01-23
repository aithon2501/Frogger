var Frog = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frog1 = new Frog(145, 290, 10, 10, 'green');
// var block2 = new Block(170, 50, 10, 10, 'red');
console.log(frog1);
console.log(context);
// var blocks =[ block1, block2 ];

frog1.draw(context);

// function gameLoop () {


  // blocks.forEach( function (block) { 
  //   if(block.x >= canvas.width - 10 || block.y >= canvas.height - 10) {
  //     return;
  //   } else {
  //     block.erase(context).move().draw(context);
  //   }
  // });
  // requestAnimationFrame(gameLoop);
// };

// requestAnimationFrame(gameLoop);