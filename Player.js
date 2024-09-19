// player.js
export default class Player {
  constructor() {
    this.x = 166;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.speed = 8;
    this.image = new Image();
    this.health = 100;
    this.weaponType = "default";
    this.isAlive = true;
    this.image.src = "./assets/tileset.png";
    this.indexX = 493;
    this.indexY = 209;
    this.weaponY = -2;
    this.weaponXIndex = 0;
    this.walkTimer = 6;
    this.invinsibleTimer = 60000;
    this.vx = 0;
    this.vy = 0;
    this.wx = [1, 3, -1];
    // this.map = map; // Speichere die Map-Instanz
  }

  takeDamage(damage) {
    if (this.isAlive) {
      this.health -= damage;
      if (this.health <= 0) {
        this.isAlive = false;
      }
    }
  }

  draw(ctx, mouseX, mouseY, deltaTime) {
    //invinsibleTimer

    // console.log(this.invinsibleTimer);
    if (this.invinsibleTimer < 1) this.invinsibleTimer = 0;
    else this.invinsibleTimer--;
    if (this.isAlive) {
      const angle = Math.atan2(
        mouseY - (this.y + this.height / 2),
        mouseX - (this.x + this.width / 2)
      );
      let indexY = this.indexY;
      let weaponAnimX = 0;
      let weaponYShift = 0;
      let flipHorizontally = false;

      // Check if the player is looking up or down
      if (angle < -Math.PI / 4 && angle > (-3 * Math.PI) / 4) {
        // Player is looking up
        indexY -= 38;
        weaponAnimX = 17;
        weaponYShift = -12;
      } else if (angle > Math.PI / 4 && angle < (3 * Math.PI) / 4) {
        // Player is looking down
        indexY -= 19;
        weaponAnimX = 34;
        weaponYShift = 10;
      } else {
        // Check if the player is looking left or right
        flipHorizontally = mouseX < this.x + this.width / 2;
      }

      // Update the walk animation
      this.walkTimer -= 1 * deltaTime * 60;
      if (this.vx !== 0 || this.vy !== 0) this.walkTimer -= deltaTime;
      if (this.walkTimer <= 0) {
        this.walkTimer = 12;
        this.indexX += 17;
        this.weaponY += 2;
        this.weaponXIndex += 1;

        if (this.indexX > 527) {
          this.indexX = 493;
          this.weaponY = -2;
          this.weaponXIndex = 0;
        }
      }

      ctx.save(); // Save the current state of the canvas context

      // Flip the image if necessary
      if (flipHorizontally) {
        ctx.scale(-1, 1); // Horizontal flip
        ctx.translate(-this.x - this.width / 2, this.y - this.height / 2);
      } else {
        ctx.translate(this.x - this.width / 2, this.y - this.height / 2);
      }

      ctx.drawImage(
        this.image,
        this.indexX,
        indexY,
        16,
        16,
        0,
        0,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.image,
        weaponAnimX + 17,
        150,
        16,
        16,
        this.wx[this.weaponXIndex],
        this.weaponY + weaponYShift,
        this.width,
        this.height
      );

      ctx.restore(); // Restore the previous state of the canvas context
    }
  }
}

// function isColliding(rect1, rect2) {
//   return (
//     rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.y + rect1.height > rect2.y
//   );
// }
