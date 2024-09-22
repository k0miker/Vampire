// enemy.js
export default class Enemy {
  constructor(x, y, w, h, zombieType) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    switch (zombieType) {
      case 0:
        this.imageSrc = "./assets/zombi0.png";
        this.speed = 0.5 + Math.random();
        this.health = 200;
        this.width = w;
        this.height = h;
        break;
      case 1:
        this.imageSrc = "./assets/zombi1.png";
        this.speed = 1 + Math.random();
        this.health = 100;
        this.width = w;
        this.height = h;
        break;
      case 2:
        this.imageSrc = "./assets/zombi2.png";
        this.speed = 0.25 + Math.random();
        this.health = 125;
        this.width = w;
        this.height = h;
        break;
      case 3:
        this.imageSrc = "./assets/zombi3.png";
        this.speed = 3.0 + Math.random();
        this.health = 75;
        this.width = w;
        this.height = h;
        break;
      case 4: // Boss 1
        this.imageSrc = "./assets/zombi1.png";
        this.speed = 0.2 + Math.random();
        this.health = 500;
        this.width = w * 2; // Verdoppeln der Breite
        this.height = h * 2; // Verdoppeln der Höhe
        break;
      case 5: // Boss 2
        this.imageSrc = "./assets/zombi1.png";
        this.speed = 0.3 + Math.random();
        this.health = 750;
        this.width = w * 2; // Verdoppeln der Breite
        this.height = h * 2; // Verdoppeln der Höhe
        break;
      default:
        this.imageSrc = "./assets/zombi0.png";
        this.speed = 0.5 + Math.random();
        this.health = 200;
        this.width = w;
        this.height = h;
    }

    this.image = new Image();
    this.image.src = this.imageSrc;
    this.weaponType = "default";
    this.walkTimer = 1;
    this.indexX = 0;
    this.aggroRange = 350;
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
        // Spieler-Kollision
        if (this.isColliding(player)) {
          // Schaden anwenden
          if (player.invinsibleTimer === 0) {
            player.health -= 10; // Schaden an den Spieler
            player.invinsibleTimer = 100; // Spieler wird für kurze Zeit unverwundbar
          }
        } else {
          this.x += (dx / dist) * this.speed * deltaTime * 60;
          if (obstacleCollision.collision(this))
            this.x -= (dx / dist) * this.speed * deltaTime * 60;
          this.y += (dy / dist) * this.speed * deltaTime * 60;
          if (obstacleCollision.collision(this))
            this.y -= (dy / dist) * this.speed * deltaTime * 60;
        }
      }
    }
  }

  isColliding(player) {
    const topCollision =
      this.x < player.x + player.width &&
      this.x + this.width > player.x &&
      this.y < player.y + player.height &&
      this.y + this.height > player.y;

    return topCollision;
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
