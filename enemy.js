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
    this.isAlive = true;
    this.weaponType = weaponType;
    this.walkTimer = 1;
    this.indexX = 527;
    this.aggroRange = 500; 
    this.isAggro = false;
  }

  update(playerX, playerY, deltaTime, backgroundX, backgroundY) {
    if (this.isAlive) {
      let dx = playerX - (this.x - backgroundX + this.width / 2);
      let dy = playerY - (this.y - backgroundY + this.height / 2);
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.aggroRange) {
        this.isAggro = true;
      }

      if (this.isAggro) {
        this.x += (dx / dist) * this.speed * deltaTime * 60;
        this.y += (dy / dist) * this.speed * deltaTime * 60;
      }
    }
  }

  draw(ctx, deltaTime, backgroundX, backgroundY, playerX, playerY) {
    if (this.isAlive) {
      this.walkTimer -= 1 * deltaTime * 60;
      if (this.walkTimer <= 0) {
        this.walkTimer = 20;
        this.indexX += 17;
        if (this.indexX > 527) this.indexX = 493;
      }

      const angle = Math.atan2(
        (this.y - backgroundY + this.height / 2) - playerY,
        (this.x - backgroundX + this.width / 2) - playerX
      );

      let spriteY;
      if (angle > -Math.PI / 4 && angle <= Math.PI / 4) {
        spriteY = 152;
      } else if (angle > Math.PI / 4 && angle <= (3 * Math.PI) / 4) {
        spriteY = 114;
      } else if (angle > (3 * Math.PI) / 4 || angle <= -(3 * Math.PI) / 4) {
        spriteY = 152;
      } else {
        spriteY = 133;
      }

      ctx.save();
      ctx.drawImage(
        this.image,
        this.indexX,
        spriteY,
        16,
        16,
        this.x - backgroundX,
        this.y - backgroundY,
        this.width,
        this.height
      );
      ctx.restore();
    } else {
      // Zeichne die Todesanimation, wenn der Zombie tot ist
      ctx.save();
      ctx.drawImage(
        this.image,
        646, // X-Position der Todesanimation im Sprite
        152, // Y-Position der Todesanimation im Sprite
        16,
        16,
        this.x - backgroundX,
        this.y - backgroundY,
        this.width,
        this.height
      );
      ctx.restore();
    }
  }

  takeDamage(damage) {
    if (this.isAlive) {
      this.health -= damage;
      if (this.health <= 0) {        
        setTimeout(() => {          
          this.isAlive = false;
        }, 1000);
       

      } else {
        this.isAggro = true;
      }
    }
  }

  attack(target) {
    if (this.isAlive) {
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