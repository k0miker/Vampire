import Bloodsplosion from "./Bloodsplosion.js";

export default class Bullet {
  constructor(x, y, vx, vy, dmg, ctx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ctx = ctx;
    this.dmg = dmg;
    this.width = 8;
    this.height = 8;
  }
  update(deltaTime, enemies) {
    let bulletDelete = -1;
    this.x += this.vx * deltaTime * 30;
    this.y += this.vy * deltaTime * 30;
    this.draw();
    bulletDelete = this.collisionEnemy(enemies, deltaTime);
    return bulletDelete;
  }
  draw() {
    this.ctx.fillStyle = "grey";
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
