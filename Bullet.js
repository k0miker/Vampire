import Bloodsplosion from "./Bloodsplosion.js";

export default class Bullet {
  constructor(x, y, vx, vy, dmg, ctx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ctx = ctx;
    this.dmg = dmg;
    this.width = 4;
    this.height = 4;
    
    this.speed = 20;
  }

  static createBullet(player, mouseX, mouseY, ctx) {
    let dx = player.x - mouseX;
    let dy = player.y - mouseY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    return new Bullet(
      player.x,
      player.y,
      (dx / dist) * -15,
      (dy / dist) * -15,
      25,
      ctx
    );
  }

  static updateAndDrawBullets(bullets, deltaTime, enemies, ctx, bloodsplosions) {
    for (let i = 0; i < bullets.length; i++) {
      if (
        bullets[i].x < 0 ||
        bullets[i].y < 0 ||
        bullets[i].x > window.innerWidth + bullets[i].width ||
        bullets[i].y > window.innerHeight + bullets[i].height
      ) {
        bullets.splice(i, 1);
        i--;
      } else {
        let hitIndex = undefined;
        hitIndex = bullets[i].update(deltaTime, enemies, 0, 0);
        if (hitIndex > -1) {
          bloodsplosions.push(
            new Bloodsplosion(
              bullets[i].x,
              bullets[i].y,
              bullets[i].vx,
              bullets[i].vy,
              20
            )
          );

          bullets.splice(i, 1);
          i--;
        }
      }
    }
  }

  update(deltaTime, enemies, backgroundX, backgroundY,obstacleCollision) {
    let bulletDelete = -1;
    this.x += this.vx * deltaTime * this.speed;
    this.y += this.vy * deltaTime * this.speed;
    this.draw(backgroundX, backgroundY);
    if (obstacleCollision.collision(this)) return 1000;

    bulletDelete = this.collisionEnemy(
      enemies,
      deltaTime,
      backgroundX,
      backgroundY,obstacleCollision
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
  collisionObstacles() {
    
  }
  collisionEnemy(enemies, deltaTime, backgroundX, backgroundY, obstacleCollision) {
    for (let i = 0; i < enemies.length; i++) {
      if (enemies[i].status === "alive" && // Überprüfen, ob der Gegner "alive" ist
        this.x < enemies[i].x + enemies[i].width / 2 &&
        this.x + this.width > enemies[i].x - enemies[i].width / 2 &&
        this.y < enemies[i].y + enemies[i].height / 2 &&
        this.y + this.height > enemies[i].y - enemies[i].height / 2
      ) {
        enemies[i].x += this.vx * 1;
        if (obstacleCollision.collision(enemies[i])) enemies[i].x -= this.vx * 1;
        enemies[i].y += this.vy * 1;
        if (obstacleCollision.collision(enemies[i])) enemies[i].y -= this.vy * 1;
        enemies[i].takeDamage(this.dmg);
        enemies[i].isAggro = true; // Setze aggro auf true, wenn der Zombie getroffen wird
  
        return i;
      }
    }
    return -1; // Keine Kollision
  }

}