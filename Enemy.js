import Bullet from "./Bullet.js";
// enemy.js

export default class Enemy {
  constructor(x, y, w, h, zombieType) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.gold = 1;
    this.damageSounds = [
      document.getElementById("enemy-damage-sound-1"),
      document.getElementById("enemy-damage-sound-2"),
      document.getElementById("enemy-damage-sound-3"),
      document.getElementById("enemy-damage-sound-4"),
    ];
    this.damageSounds.forEach((sound) => (sound.volume = 0.2));

    switch (zombieType) {
      case 0:
        this.imageSrc = "./assets/zombi0.png";
        this.speed = 0.75 + Math.random();
        this.health = 250;
        this.width = w;
        this.height = h;
        this.gold = 2;
        this.aggroRange = 150;
        this.damage = 10;
        break;
      case 1:
        this.imageSrc = "./assets/zombi1.png";
        this.speed = 1 + Math.random();
        this.health = 100;
        this.width = w;
        this.height = h;
        this.gold = 2;
        this.damage = 5;
        this.aggroRange = 200;
        break;
      case 2:
        this.imageSrc = "./assets/zombi2.png";
        this.speed = 0.55 + Math.random();
        this.health = 255;
        this.width = w;
        this.height = h;
        this.gold = 3;
        this.damage = 15;
        this.aggroRange = 300;
        break;
      case 3:
        this.imageSrc = "./assets/zombi3.png";
        this.speed = 3.0 + Math.random();
        this.health = 75;
        this.width = w;
        this.height = h;
        this.gold = 1;
        this.damage = 5;
        this.aggroRange = 150;
        break;
      case 4:
        this.imageSrc = "./assets/vamp.png";
        this.speed = 5 + Math.random();
        this.health = 100;
        this.width = w * 1.5;
        this.height = h * 1.5;
        this.gold = 1;
        this.damage = 5;
        this.aggroRange = 250;
        this.damageSounds = [
          document.getElementById("vamp-sound-1"),
          document.getElementById("vamp-sound-2"),
          document.getElementById("vamp-sound-3"),
          document.getElementById("vamp-sound-4"),
        ];
        this.damageSounds.forEach((sound) => (sound.volume = 0.2));
        break;
      case 5: // Boss 1
        this.imageSrc = "./assets/zombi0.png";
        this.speed = 3;
        this.health = 1000;
        this.width = w;
        this.height = h;
        this.gold = 100;
        this.damage = 25;
        this.aggroRange = 1400;
        this.boss = true;
        this.shootTimer = 50;
        this.bullets = [];
        break;
      case 6: // Boss 2
        this.imageSrc = "./assets/zombi1.png";
        this.speed = 1.5 + Math.random();
        this.health = 20;
        this.width = w * 2;
        this.height = h * 2;
        this.gold = 150;
        this.damage = 50;
        this.aggroRange = 800;
      default:
        this.imageSrc = "./assets/zombie0.png";
        this.speed = 0.5 + Math.random();
        this.health = 100;
        this.width = w;
        this.height = h;
        this.gold = 1;
        this.damage = 5;
        this.aggroRange = 250;
    }

    this.image = new Image();
    this.image.src = this.imageSrc;
    this.weaponType = "default";
    this.walkTimer = 1;
    this.indexX = 0;
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
      this.x - this.width / 2 < player.x + player.width / 2 &&
      this.x + this.width / 2 > player.x - player.width / 2 &&
      this.y - this.height / 2 < player.y + player.height / 2 &&
      this.y + this.height / 2 > player.y - player.height / 2;

    return topCollision;
  }

  draw(ctx, deltaTime, backgroundX, backgroundY, playerX, playerY) {
    if (this.status === "spawning") {
      this.image.src = "./assets/spawn.png";
      this.deathTimer -= 1 * deltaTime * 60;
      this.indexX = 0;

      if (this.deathTimer <= 0) {
        this.indexX += 17;
        this.deathTimer = 15;
      }
      if (this.indexX > 78) {
        this.status = "alive";
      }

      ctx.save();
      ctx.drawImage(
        this.image,
        0, // X-Position der Spawn-Animation im Sprite
        0, // Y-Position der Spawn-Animation im Sprite
        16,
        16,
        this.x - backgroundX - this.width / 2,
        this.y - backgroundY - this.height / 2,
        this.width,
        this.height
      );
      ctx.restore();
    } else if (this.status === "dying") {
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
    } else if (this.status === "alive") {
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
        spriteY = 57;
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
  }

  takeDamage(damage) {
    if (this.status === "alive") {
      this.health -= damage;
      if (this.health <= 0) {
        // console.log("Enemy is dead. Starting death animation.");
        this.status = "dying";
        this.indexX = 595;
      } else {
        // Freie Instanz finden und abspielen
        const damageSound = this.damageSounds.find((sound) => sound.paused);
        if (damageSound) {
          damageSound.currentTime = 0;
          damageSound.play();
          setTimeout(() => {
            damageSound.pause();
            damageSound.currentTime = 0;
          }, 750); // 50 Millisekunden = 0,05 Sekunden
        }
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
      target.takeDamage(this.damage);
    }
  }
  bossHandler(
    player,
    ctx,
    gameWindowWidth,
    gameWindowHeight,
    deltaTime,
    obstacleCollision
  ) {
    this.shootTimer--;
    if (this.shootTimer <= 0 && this.health >= 0) {
      this.shootTimer = 50;
      let dx = player.x - this.x;
      let dy = player.y - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      this.bullets.push(
        new Bullet(
          this.x,
          this.y,
          dx / dist,
          dy / dist,
          20,
          ctx,
          gameWindowWidth,
          gameWindowHeight,
          2000
        )
      );
    }
    //healthBar;

    ctx.fillStyle = "red";
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2 - 10,
      (120 / 1000) * this.health,
      8
    );
    ctx.strokeStyle = "black";
    ctx.strokeRect(
      this.x - this.width / 2,
      this.y - this.height / 2 - 10,
      120,
      8
    );
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].x += this.bullets[i].vx * deltaTime * 400;
      this.bullets[i].y += this.bullets[i].vy * deltaTime * 400;
      ctx.fillStyle = "lightgrey";
      ctx.fillRect(this.bullets[i].x, this.bullets[i].y, 8, 8);
      ///playerHit?
      if (
        player.x < this.bullets[i].x + this.bullets[i].width / 2 &&
        player.x + player.width >
          this.bullets[i].x - this.bullets[i].width / 2 &&
        player.y < this.bullets[i].y + this.bullets[i].height / 2 &&
        player.y + player.height >
          this.bullets[i].y - this.bullets[i].height / 2
      ) {
        if (player.invinsibleTimer === 0) {
          player.health -= this.bullets[i].dmg;
          player.invinsibleTimer = 100;
          this.bullets.splice(i, 1);
          i--;
        }
      }
      ///obstacleHit?
      else if (obstacleCollision.collision(this.bullets[i])) {
        this.bullets.splice(i, 1);
        i--;
      }
    }
  }
}
