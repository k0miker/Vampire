export default class Bullet {
  constructor(
    x,
    y,
    vx,
    vy,
    dmg,
    ctx,
    gameWindowWidth,
    gameWindowHeight,
    range
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ctx = ctx;
    this.dmg = dmg;
    this.width = 4;
    this.height = 4;
    this.gameWindowHeight = gameWindowHeight;
    this.gameWindowWidth = gameWindowWidth;
    this.speed = 20;
    this.range = range;
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

  update(deltaTime, enemies, obstacleCollision) {
    let bulletDelete = -1;
    this.x += this.vx * deltaTime * this.speed;
    this.y += this.vy * deltaTime * this.speed;
    this.draw();
    if (obstacleCollision.collision(this)) return 1000;

    bulletDelete = this.collisionEnemy(enemies, obstacleCollision);
    return bulletDelete;
  }

  draw() {
    this.ctx.fillStyle = "lightgrey";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  collisionEnemy(enemies, obstacleCollision) {
    for (let i = 0; i < enemies.length; i++) {
      if (
        enemies[i].status === "alive" && // Überprüfen, ob der Gegner "alive" ist
        this.x < enemies[i].x + enemies[i].width / 2 &&
        this.x + this.width > enemies[i].x - enemies[i].width / 2 &&
        this.y < enemies[i].y + enemies[i].height / 2 &&
        this.y + this.height > enemies[i].y - enemies[i].height / 2
      ) {
        enemies[i].x += this.vx * 1;
        if (obstacleCollision.collision(enemies[i]))
          enemies[i].x -= this.vx * 1;
        enemies[i].y += this.vy * 1;
        if (obstacleCollision.collision(enemies[i]))
          enemies[i].y -= this.vy * 1;
        enemies[i].takeDamage(this.dmg);
        enemies[i].isAggro = true; // Setze aggro auf true, wenn der Zombie getroffen wird

        return i;
      }
    }
    return -1; // Keine Kollision
  }
}
