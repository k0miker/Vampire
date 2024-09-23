import Map from "../MapHandler.js";
import Enemy from "../Enemy.js";
import ObstacleCollision from "../ObstaclesCollision.js";
import Bloodsplosion from "../Bloodsplosion.js";
import Bullet from "../Bullet.js";

export default class Map4 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount = Math.ceil(Math.random() * 0);
    this.bossCount = 1;
    this.shootTimer = 50;
    this.boss = new Enemy(1400, 310, 120, 120, 0);
    this.boss.health = 1700;
    this.boss.aggroRange = 1200;
    this.boss.speed = 3;
    this.bossBullets = [];
    this.bulletDmg = 20;

    this.map = [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 259,
      9, 9, 7, 225, 225, 225, 263, 44, 6, 44, 44, 44, 263, 6, 44, 144, 44, 225, 263, 225, 6, 44, 225, 44, 44, 44, 105,
      7, 7, 6, 225, 263, 263, 30, 225, 44, 225, 225, 6, 6, 6, 225, 6, 225, 263, 6, 6, 68, 6, 263, 263, 6, 263, 105,
      9, 263, 44, 6, 263, 44, 225, 6, 44, 263, 225, 263, 44, 44, 225, 8, 263, 44, 6, 225, 44, 263, 6, 263, 44, 6, 105,
      7, 253, 225, 6, 44, 6, 263, 175, 6, 44, 263, 263, 225, 225, 225, 44, 263, 6, 263, 44, 6, 225, 263, 85, 263, 44, 105,
      46, 6, 225, 6, 8, 44, 263, 6, 225, 263, 225, 85, 144, 263, 6, 263, 179, 225, 225, 6, 6, 44, 6, 6, 225, 225, 105,
      40, 225, 44, 6, 44, 263, 225, 44, 6, 263, 44, 225, 263, 6, 263, 263, 225, 225, 44, 8, 107, 44, 44, 225, 225, 225, 105,
      7, 263, 6, 30, 263, 225, 144, 6, 44, 6, 263, 225, 225, 263, 263, 175, 263, 225, 225, 263, 44, 225, 44, 8, 263, 263, 105,
      7, 7, 44, 225, 44, 44, 263, 6, 44, 263, 44, 225, 263, 263, 263, 6, 263, 6, 225, 225, 263, 6, 6, 44, 6, 263, 105,
      9, 106, 263, 263, 44, 6, 8, 225, 6, 68, 85, 6, 263, 8, 225, 263, 263, 44, 225, 6, 85, 6, 225, 44, 225, 225, 105,
      7, 7, 7, 225, 6, 263, 44, 6, 225, 225, 225, 225, 263, 44, 6, 44, 144, 6, 6, 6, 225, 225, 6, 180, 225, 6, 105,
      7, 9, 7, 6, 144, 44, 263, 263, 6, 6, 6, 225, 44, 6, 44, 44, 263, 44, 263, 6, 225, 263, 44, 263, 44, 225, 105,
      143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 105];
    this.overlay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  bossHandler(
    ctx,
    deltaTime,
    player,
    obstacleCollision,
    bullets,
    bloodsplosions,
    gameWindowWidth,
    gameWindowHeight
  ) {
    this.boss.update(
      player.x,
      player.y,
      deltaTime,
      0,
      0,
      obstacleCollision,
      player
    );
    this.boss.draw(ctx, deltaTime, 0, 0, player.x, player.y);
    //bulletCollision
    for (let i = 0; i < bullets.length; i++) {
      let hitIndex = undefined;
      hitIndex = bullets[i].collisionEnemy(
        [this.boss],
        deltaTime,
        0,
        0,
        obstacleCollision
      );

      if (hitIndex === 0) {
        bloodsplosions.push(
          new Bloodsplosion(
            bullets[i].x,
            bullets[i].y,
            bullets[i].vx,
            bullets[i].vy,
            12 // Assuming a count of 10 particles
          )
        );
        bullets.splice(i, 1);
        i--;
      }
    }

    this.shootTimer--;
    if (this.shootTimer <= 0 && this.boss.health >= 0) {
      this.shootTimer = 50;
      let dx = player.x - this.boss.x;
      let dy = player.y - this.boss.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      this.bossBullets.push(
        new Bullet(
          this.boss.x,
          this.boss.y,
          dx / dist,
          dy / dist,
          this.bulletDmg,
          ctx,
          gameWindowWidth,
          gameWindowHeight,
          2000
        )
      );

      console.log("shoot");
    }
    for (let i = 0; i < this.bossBullets.length; i++) {
      this.bossBullets[i].x += this.bossBullets[i].vx * deltaTime * 400;
      this.bossBullets[i].y += this.bossBullets[i].vy * deltaTime * 400;
      ctx.fillStyle = "lightgrey";
      ctx.fillRect(this.bossBullets[i].x, this.bossBullets[i].y, 8, 8);
      ///playerHit?
      if (
        player.x < this.bossBullets[i].x + this.bossBullets[i].width / 2 &&
        player.x + player.width >
          this.bossBullets[i].x - this.bossBullets[i].width / 2 &&
        player.y < this.bossBullets[i].y + this.bossBullets[i].height / 2 &&
        player.y + player.height >
          this.bossBullets[i].y - this.bossBullets[i].height / 2
      ) {
        player.health -= this.bulletDmg;
        this.bossBullets.splice(i, 1);
        i--;
      }
      ///obstacleHit?
      if (obstacleCollision.collision(this.bossBullets[i])) {
        this.bossBullets.splice(i, 1);
        i--;
      }
    }
  }
}
