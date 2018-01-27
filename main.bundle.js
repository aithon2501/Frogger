/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(1);
	var Obstacle = __webpack_require__(2);

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');

	var frog1 = new Frog(145, 290, 10, 10, 'green');
	// var block1 = new Obstacle (300, 275, 30, 10, 'brown');
	const obsArray = [];

	function generateObstacles() {
	  for (let obs = 0; obs < 20; obs++) {
	    let yLocation = Math.floor(Math.random() * 300 - 25);
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
	  frog1.collision(frog1, block1);
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

	function gameLoop() {
	  obsArray.forEach(function (obs) {
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
	  return !(frog1 === obstacle[i] || frog1.center.x + frog1.center.x / 2 < obstacle[i].center.x - obstacle[i].center.x / 2 || frog1.center.y + frog1.center.y / 2 < obstacle[i].center.y - obstacle[i].center.y / 2 || frog1.center.x - frog1.center.x / 2 < obstacle[i].center.x - obstacle[i].center.y / 2 || frog1.center.y - frog1.center.y / 2 < obstacle[i].center.y - obstacle[i].center.y / 2);
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	class Frog {
	  constructor(x, y, width, height, color) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  }

	  move(e) {
	    if (e.keyCode === 38) {
	      this.y -= 15;
	    } else if (e.keyCode === 37) {
	      this.x -= 15;
	    } else if (e.keyCode === 40) {
	      this.y += 15;
	    } else if (e.keyCode === 39) {
	      this.x += 15;
	    }
	    return this;
	  }

	  erase(ctx) {
	    console.log(ctx);
	    ctx.clearRect(this.x, this.y, this.width, this.height);
	    return this;
	  }
	}

	module.exports = Frog;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	class Obstacle {
	  constructor(x, y, width, height, color) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  }

	  move() {
	    this.x--;
	    return this;
	  }

	  erase(ctx) {
	    ctx.clearRect(this.x, this.y, this.width, this.height);
	    return this;
	  }
	}

	module.exports = Obstacle;

/***/ })
/******/ ]);