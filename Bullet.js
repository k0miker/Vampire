export default class Bullet {
  constructor(x, y, vx, vy, dmg, ctx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ctx = ctx;
    this.dmg = dmg;
    this.width = 10;
    this.height = 10;
  }
  update(deltaTime) {
    this.x += this.vx * deltaTime * 60;
    this.y += this.vy * deltaTime * 60;
    this.draw();
  }
  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
