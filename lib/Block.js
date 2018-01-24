class Frog {
  constructor (x, y, width, height, color) {
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
    if(e.keyCode === 38) {
      this.y -= 15;
    }
    else if(e.keyCode === 37) {
      this.x -= 15;
    }
    else if(e.keyCode === 40) {
      this.y += 15;
    }
    else if(e.keyCode === 39) {
      this.x += 15;
    }
    return this;
  }

  erase(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }
}


module.exports = Frog;