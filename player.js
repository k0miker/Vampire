export default class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 80;
    this.height = 80;
    this.speed = 5;
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
    this.vx = 0;
    this.vy = 0;
    this.wx = [1, 4, -2];
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
    if (this.isAlive ) {
      const angle = Math.atan2(
        mouseY - (this.y + this.height / 2),
        mouseX - (this.x + this.width / 2)
      );
      let indexY = this.indexY;
      let weaponAnimX = 0;
      let weaponYShift = 0;
      let flipHorizontally = false;

      /////////////////Up or down////////////////////////
      if (angle < 2.1 && angle > 1) {
        indexY -= 19;
        weaponAnimX = 34;
        weaponYShift = 20;
      } else if (angle > -2.1 && angle < -1) {
        indexY -= 38;
        weaponAnimX = 17;
        weaponYShift = -20;
      } else {
        //////////////////left or right looking/////////////////
        flipHorizontally = mouseX < this.x + this.width / 2;
      }
      this.walkTimer -= 1 * deltaTime * 60;
      if (this.vx !== 0 || this.vy !== 0) this.walkTimer -=  deltaTime;
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
      ctx.save(); // Speichern des aktuellen Zustands des Canvas-Kontexts

      // Spiegeln des Bildes, wenn nötig
      if (flipHorizontally) {
        ctx.scale(-1, 1); // Horizontales Spiegeln
        ctx.translate(
          -this.width / 2 - window.innerWidth / 2,
          -this.height / 2 + window.innerHeight / 2
        );
      } else {
        ctx.translate(
          -this.width / 2 + window.innerWidth / 2,
          -this.height / 2 + window.innerHeight / 2
        );
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

      ctx.restore(); // Wiederherstellen des vorherigen Zustands des Canvas-Kontexts
    }
  }

  attack(target) {
    if (this.isAlive) {
      let damage;
      switch (this.weaponType) {
        case "grenade":
          damage = weapons[1].damage;
          break;
        case "pumpgun":
          damage = weapons[2].damage;
          break;
        case "pistol":
          damage = weapons[3].damage;
          break;
        case "magic":
          damage = weapons[4].damage;
          break;
      }
      target.takeDamage(damage);
    }
  }
}

const weapons = [
  {
    name: "granade",
    damage: 30,
    range: 10,
    type: "ranged",
    speed: 15,
  },
  {
    name: "pumpgun",
    damage: 7,
    range: 20,
    type: "melee",
    speed: 20,
  },
  {
    name: "pistol",
    damage: 5,
    range: 60,
    type: "range",
    speed: 15,
  },
  {
    name: "knife",
    damage: 10,
    range: 1,
    type: "melee",
  },
  {
    name: "fireball",
    damage: 50,
    range: 75,
    type: "magic",
    speed: 10,
    mana: 10,
  },
];
