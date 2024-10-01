import Bullet from "./Bullet.js";
// player.js

export default class Player {
  constructor() {
    this.x = 166;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.speed = 4;
    this.image = new Image();
    this.health = 200;
    this.weaponType = "default";
    this.isAlive = true;
    this.image.src = "./assets/tileset.png";
    this.indexX = 493;
    this.indexY = 209;
    this.weaponY = -2;
    this.weaponXIndex = 0;
    this.walkTimer = 6;
    this.weapon = 2;
    this.weapons = [2];
    this.reloadTimer = 0;
    this.gold = 0;
    // this.weapons = [
    //   {
    //     name: "Pistol",
    //     range: 1000,
    //     dmg: 25,
    //     // addBullet: this.addPistolBullet.bind(this),
    //     indexYPos: 150,
    //     bullets: 8,
    //     magazin: 8,
    //     reloading: false,
    //   },
    //   {
    //     name: "Shotgun",
    //     range: 45,
    //     dmg: 13,
    //     // addBullet: this.addShotgunBullet.bind(this),
    //     indexYPos: 133,
    //     bullets: 4,
    //     magazin: 4,
    //     reloading: false,
    //   },
    // ];
    this.invinsibleTimer = 0;
    this.invFlip = 0;
    this.vx = 0;
    this.vy = 0;
    this.wx = [1, 3, -1];
    this.playerSounds = [
      document.getElementById("player-damage-sound-1"),
      document.getElementById("player-damage-sound-2"),
      document.getElementById("player-damage-sound-3"),
      document.getElementById("player-damage-sound-4"),
    ];
    this.pistolSounds = [
      document.getElementById("pistol-sound-1"),
      document.getElementById("pistol-sound-2"),
      document.getElementById("pistol-sound-3"),
      document.getElementById("pistol-sound-4"),
    ];
    this.shotgunSounds = [
      document.getElementById("shotgun-sound-1"),
      document.getElementById("shotgun-sound-2"),
      document.getElementById("shotgun-sound-3"),
      document.getElementById("shotgun-sound-4"),
    ];
    this.walkSound = document.getElementById("walk-sound-1");

    this.reloadSound = document.getElementById("reload"); // Reload-Sound laden
    this.reloadSound.volume = 0.5; // 25% Lautstärke
    this.pistolSounds.forEach((sound) => (sound.volume = 0.1)); // 25% Lautstärke
    this.shotgunSounds.forEach((sound) => (sound.volume = 0.1)); // 25% Lautstärke
    this.playerSounds.forEach((sound) => (sound.volume = 0.5));
    this.deathSound = document.getElementById("player-death-sound");
    this.deathSound.volume = 0.5;
    this.hurtSound = document.getElementById("player-hurt-sound-1");
  }
  addBullet(bullets, dx, dy, dist, ctx, gameWindowHeight, gameWindowWidth) {
    //   console.log(weapons[this.weapon].reloading);
    //   console.log(weapons[this.weapon].bullets);
    if (weapons[this.weapon].reloading) {
    } else if (weapons[this.weapon].bullets <= 0) {
      this.reloadTimer = 120;
      weapons[this.weapon].reloading = true;
      this.reloadSound.currentTime = 0; // Reload-Sound von vorne starten
      this.reloadSound.play();
      setTimeout(() => {
        this.reloadSound.pause();
        this.reloadSound.currentTime = 0;
      }, 1000); // Reload-Sound abspielen
    } else {
      for (let i = 0; i < weapons[this.weapon].bulletCount; i++) {
        const bullet = new Bullet(
          this.x,
          this.y,
          (dx / dist) * -15 +
            (Math.random() * weapons[this.weapon].bulletSpread -
              weapons[this.weapon].bulletSpread / 2),
          (dy / dist) * -15 +
            (Math.random() * weapons[this.weapon].bulletSpread -
              weapons[this.weapon].bulletSpread / 2),
          weapons[this.weapon].dmg,
          ctx,
          gameWindowWidth,
          gameWindowHeight,
          weapons[this.weapon].range
        );
        bullets.push(bullet);
      }

      weapons[this.weapon].bullets -= 1;

      // Freie Instanz finden und abspielen
      const shotgunSound = this.shotgunSounds.find((sound) => sound.paused);
      if (shotgunSound) {
        shotgunSound.currentTime = 0;
        shotgunSound.play();
        setTimeout(() => {
          shotgunSound.pause();
          shotgunSound.currentTime = 0;
        }, 1050); // 50 Millisekunden = 0,05 Sekunden
      }
    }
  }

  draw(ctx, mouseX, mouseY, deltaTime) {
    //reloadTimer

    if (this.reloadTimer > 0) {
      this.reloadTimer -= deltaTime * 100;
    } else if (weapons[this.weapon].reloading) {
      this.reloadTimer = 0;
      weapons[this.weapon].reloading = false;
      weapons[this.weapon].bullets = weapons[this.weapon].magazin;
    }
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
      if (this.invinsibleTimer > 1 && this.invFlip >= 4) {
        this.invFlip = 0;
      } else {
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
          weapons[this.weapon].indexYPos,
          16,
          16,
          this.wx[this.weaponXIndex],
          this.weaponY + weaponYShift,
          this.width,
          this.height
        );
        this.invFlip += 1;
      }

      ctx.restore(); // Restore the previous state of the canvas context
    }
  }
}
