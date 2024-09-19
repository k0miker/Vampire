export default class Enemy {
  constructor(x, y, w, h, speed, hp, imageSrc, weaponType) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.speed = speed + Math.random();
    this.image = new Image();
    this.image.src = imageSrc;
    this.health = hp;
    this.weaponType = weaponType;
    this.walkTimer = 1;
    this.indexX = 0;
    this.aggroRange = 350; //* Settings.difficulty;
    this.isAggro = false;
    this.status = "alive";
    this.deathTimer = 15;
  }

  update(
    playerX,
    playerY,
    deltaTime,
    backgroundX,
    backgroundY,
    obstacleCollision,
    player
  ) {
    if (this.status === "alive") {
      let dx = playerX - (this.x + this.width / 2);
      let dy = playerY - (this.y + this.height / 2);
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.aggroRange) {
        this.isAggro = true;
      }

      if (this.isAggro) {
        //playerCollision
        if (
          this.x < player.x + player.width &&
          this.x + this.width > player.x &&
          this.y < player.y + player.height &&
          this.y + this.height > player.y
        ) {
          this.x -= (dx / dist) * this.speed * deltaTime * 60;
          this.y -= (dy / dist) * this.speed * deltaTime * 60;
          if (player.invinsibleTimer === 0) {
            player.health -= 10;
            player.invinsibleTimer = 30;
            // console.log("enemyCollision", this);
          }
          player.health -= 10;
          player.invinsibleTimer = 30;
          // console.log("enemyCollision", this);
        }

        this.x += (dx / dist) * this.speed * deltaTime * 60;
        if (obstacleCollision.collision(this))
          this.x -= (dx / dist) * this.speed * deltaTime * 60;
        this.y += (dy / dist) * this.speed * deltaTime * 60;
        if (obstacleCollision.collision(this))
          this.y -= (dy / dist) * this.speed * deltaTime * 60;
      }
    }
  }

  draw(ctx, deltaTime, backgroundX, backgroundY, playerX, playerY) {
    if (this.status === "alive") {
      this.walkTimer -= 1 * deltaTime * 60;
      if (this.walkTimer <= 0) {
        this.walkTimer = 20;
        this.indexX += 17;
        if (this.indexX > 50) this.indexX = 0;
      }

      const angle = Math.atan2(
        this.y - backgroundY - playerY,
        this.x - backgroundX - playerX
      );

      let spriteY;
      if (angle > -Math.PI / 4 && angle <= Math.PI / 4) {
        spriteY = 40;
      } else if (angle > Math.PI / 4 && angle <= (3 * Math.PI) / 4) {
        spriteY = 0;
      } else if (angle > (3 * Math.PI) / 4 || angle <= -(3 * Math.PI) / 4) {
        spriteY = 40;
      } else {
        spriteY = 20;
      }

      ctx.save();
      ctx.drawImage(
        this.image,
        this.indexX,
        spriteY,
        16,
        16,
        this.x - backgroundX - this.width / 2,
        this.y - backgroundY - this.height / 2,
        this.width,
        this.height
      );
      ctx.restore();
    }
    if (this.status === "dying") {
      // Zeichne die Todesanimation, wenn der Zombie tot ist
      this.image.src = "./assets/tileset.png";
      this.deathTimer -= 1 * deltaTime * 60;
      
      if (this.deathTimer <= 0) {
        this.indexX += 17;
        this.deathTimer = 15;
      }

      if (this.indexX > 661) {
        this.status = "dead";
      }

      ctx.save();
      ctx.drawImage(
        this.image,
        this.indexX, // X-Position der Todesanimation im Sprite
        152, // Y-Position der Todesanimation im Sprite
        16,
        16,
        this.x - backgroundX - this.width / 2,
        this.y - backgroundY - this.height / 2,
        this.width,
        this.height
      );
      ctx.restore();
    }
  }

  takeDamage(damage) {
    if (this.status === "alive") {
      this.health -= damage;
      if (this.health <= 0) {
        console.log("Enemy is dead. Starting death animation.");
        this.status = "dying";
        this.indexX = 595;
      }
    }
  }

  attack(target) {
    if (this.status === "alive") {
      let damage;
      switch (this.weaponType) {
        case "assaultRifle":
          damage = 10;
          break;
        case "deagle":
          damage = 7;
          break;
        case "magic":
          damage = 12;
          break;
        default:
          damage = 5;
      }
      target.takeDamage(damage);
    }
  }
}
