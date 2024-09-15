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
  }

  update(playerX, playerY, deltaTime, backgroundX, backgroundY) {
    // console.log(deltaTime);

    if (this.isAlive) {
      let dx = playerX - (this.x -backgroundX + this.width / 2);
      let dy = playerY - (this.y - backgroundY + this.height / 2);
      let dist = Math.sqrt(dx * dx + dy * dy);
      this.x += (dx / dist) * this.speed * deltaTime *60 ;
      this.y += (dy / dist) * this.speed * deltaTime *60;
    } else {
      
    }
  } 

  draw(ctx, deltaTime,backgroundX, backgroundY) {
    if (this.isAlive) {
      this.walkTimer -= 1 * deltaTime * 60;
      if (this.walkTimer <= 0) {
        this.walkTimer = 20;
        this.indexX += 17;
        if (this.indexX > 527) this.indexX = 493;
      }

      ctx.save();
      ctx.drawImage(
        this.image,
        this.indexX,
        152,
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
        this.isAlive = false;
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
