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

  update(deltaTime, enemies, backgroundX, backgroundY) {
    let bulletDelete = -1;
    this.x += this.vx * deltaTime * 30;
    this.y += this.vy * deltaTime * 30;
    this.draw(backgroundX, backgroundY);
    bulletDelete = this.collisionEnemy(
      enemies,
      deltaTime,
      backgroundX,
      backgroundY
    );
    return bulletDelete;
  }

  draw(backgroundX, backgroundY) {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(
      this.x - backgroundX,
      this.y - backgroundY,
      this.width,
      this.height
    );
  }

  collisionEnemy(enemies, deltaTime, backgroundX, backgroundY) {
    for (let i = 0; i < enemies.length; i++) {
      if (
        this.x < enemies[i].x + enemies[i].width &&
        this.x + this.width > enemies[i].x &&
        this.y < enemies[i].y + enemies[i].height &&
        this.y + this.height > enemies[i].y
        // this.x < enemies[i].x - backgroundX + enemies[i].width &&
        // this.x + this.width > enemies[i].x - backgroundX &&
        // this.y < enemies[i].y - backgroundY + enemies[i].height &&
        // this.y + this.height > enemies[i].y - backgroundY
      ) {
        enemies[i].x += this.vx * 4;
        enemies[i].y += this.vy * 4;
        enemies[i].takeDamage(this.dmg);
        enemies[i].isAggro = true; // Setze aggro auf true, wenn der Zombie getroffen wird

        return i;
      }
    }
  }
}
