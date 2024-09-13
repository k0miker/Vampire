export default class Bullet {
  constructor(x, y, vx, vy, ctx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ctx = ctx;
    this.width = 10;
    this.height = 10;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
