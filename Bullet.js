import Bloodsplosion from "./Bloodsplosion.js";

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
  update(deltaTime, enemies) {
    this.x += this.vx * deltaTime * 60;
    this.y += this.vy * deltaTime * 60;
    this.draw();
    const bulletDelete = this.collisionEnemy(enemies, deltaTime);
    return bulletDelete;
  }
  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  collisionEnemy(enemies, deltaTime) {
    for (let i = 0; i < enemies.length; i++) {
      if (
        this.x < enemies[i].x + enemies[i].width &&
        this.x + this.width > enemies[i].x &&
        this.y < enemies[i].y + enemies[i].height &&
        this.y + this.height > enemies[i].y
      ) {
        enemies[i].x += this.vx * deltaTime * 120;
        enemies[i].y += this.vy * deltaTime * 120;
        enemies[i].health -= this.dmg;

        return i;
      }
    }
  }
}
