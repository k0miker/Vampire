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
    this.playerImage = "./assets/tileset.png";
    this.indexX = 493;
    this.indexY = 209;
    this.weaponY = -12;
    this.weaponX = -3;
    this.walkTimer = 6;
    this.vx = 0;
    this.vy = 0;
  }
  init() {
    this.image.src = this.playerImage;
    this.image.onload = () => {
      console.log("Spielerbild erfolgreich geladen.");
    };
    this.image.onerror = (err) => {
      console.error("Fehler beim Laden des Spielerbildes:", err);
    };
  }

  takeDamage(damage) {
    if (this.isAlive) {
      this.health -= damage;
      if (this.health <= 0) {
        this.isAlive = false;
      }
    }
  }

  draw(ctx, backgroundX, backgroundY, mouseX, mouseY) {
    if (this.isAlive) {
      const angle = Math.atan2(
        mouseY - (this.y + this.height / 2),
        mouseX - (this.x + this.width / 2)
      );
      const flipHorizontally = mouseX < this.x;

      this.walkTimer -= 1;
      if (this.walkTimer <= 0) {
        this.walkTimer = 6;
        this.indexX += 17;
        this.weaponY += 2;
        this.weaponX += 3;
        if (this.indexX > 527) {
          this.indexX = 493;
          this.weaponY = -12;
          this.weaponX = -3;
        }
      }
      ctx.save(); // Speichern des aktuellen Zustands des Canvas-Kontexts

      // Spiegeln des Bildes, wenn nötig
      if (flipHorizontally) {
        ctx.scale(-1, 1); // Horizontales Spiegeln
        ctx.translate(
          -backgroundX - this.width / 2 - window.innerWidth / 2,
          backgroundY - this.height / 2 + window.innerHeight / 2
        );
      } else {
        ctx.translate(
          backgroundX - this.width / 2 + window.innerWidth / 2,
          backgroundY - this.height / 2 + window.innerHeight / 2
        );
      }

      ctx.drawImage(
        this.image,
        this.indexX,
        this.indexY,
        16,
        16,
        0,
        0,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.image,
        17,
        149,
        16,
        16,
        this.weaponX,
        this.weaponY,
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
