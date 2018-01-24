class Obstacle {
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

  move() {
    this.x--;
    return this;
  }

  erase(ctx) {
    console.log(ctx)
    ctx.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }
}

module.exports = Obstacle;