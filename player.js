import Projectile from './projectile.js';

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
    this.projectiles = []; // Hier speichern wir die Schüsse
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

  draw(ctx, backgroundX, backgroundY, mouseX, mouseY) {
      if (this.isAlive) {
          const angle = Math.atan2(mouseY - (this.y + backgroundY + this.height / 2), mouseX - (this.x + backgroundX + this.width / 2));
          ctx.save();
          ctx.translate(this.x + backgroundX + this.width / 2, this.y + backgroundY + this.height / 2);
          ctx.rotate(angle);
          ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
          ctx.restore();
  
          // Zeichne die Schüsse
          this.projectiles.forEach((projectile) => {
              projectile.draw(ctx);
              projectile.update();
          });
      }
  }
  
  shoot(mouseX, mouseY) {
      const angle = Math.atan2(mouseY - (this.y + this.height / 2), mouseX - (this.x + this.width / 2));
      const speed = 10; // Geschwindigkeit der Schüsse
      const velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
      };
  
      this.projectiles.push(new Projectile(this.x + this.width / 2, this.y + this.height / 2, velocity));
  }
}
