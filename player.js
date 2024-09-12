export default class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.speed = 5;
    this.image = new Image();
    this.health = 100;
    this.weaponType = "default";
    this.isAlive = true;
    this.playerImage = "./assets/player_9mm.png";
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
      const angle = Math.atan2(mouseY - (this.y + backgroundY + this.height / 2), mouseX - (this.x + backgroundX + this.width / 2));
      ctx.save();
      ctx.translate(this.x + backgroundX + this.width / 2, this.y + backgroundY + this.height / 2);
      ctx.rotate(angle);
      ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
      ctx.restore();
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
        case "pistol":
          damage = 5;
      }
      target.takeDamage(damage);
    }
  }
}