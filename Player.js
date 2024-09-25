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
    this.weapon = 1;
    this.reloadTimer = 0;
    this.weapons = [
      {
        name: "Pistol",
        range: 1000,
        dmg: 25,
        addBullet: this.addPistolBullet.bind(this),
        indexYPos: 150,
        bullets: 8,
        magazin: 8,
        reloading: false,
      },
      {
        name: "Shotgun",
        range: 45,
        dmg: 13,
        addBullet: this.addShotgunBullet.bind(this),
        indexYPos: 133,
        bullets: 4,
        magazin: 4,
        reloading: false,
      },
    ];
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
    this.pistolSounds.forEach((sound) => (sound.volume = 0.10)); // 25% Lautstärke
    this.shotgunSounds.forEach((sound) => (sound.volume = 0.10)); // 25% Lautstärke
    this.playerSounds.forEach((sound) => {
      sound.volume = 0.5;
    });
  }

  addPistolBullet(
    bullets,
    dx,
    dy,
    dist,
    ctx,
    gameWindowHeight,
    gameWindowWidth
  ) {
    if (this.weapons[this.weapon].reloading) {
      console.log(this.reloadTimer);
    } else if (this.weapons[this.weapon].bullets <= 0) {
      console.log("nachladen");
      this.reloadTimer = 120;
      this.weapons[this.weapon].reloading = true;
      this.reloadSound.currentTime = 0; // Reload-Sound von vorne starten
      this.reloadSound.play(); // Reload-Sound abspielen
    } else {
      const bullet = new Bullet(
        this.x,
        this.y,
        (dx / dist) * -15,
        (dy / dist) * -15,
        this.weapons[this.weapon].dmg,
        ctx,
        gameWindowWidth,
        gameWindowHeight,
        this.weapons[this.weapon].range
      );
      bullets.push(bullet);
      this.weapons[this.weapon].bullets -= 1;

      // Freie Instanz finden und abspielen
      const pistolSound = this.pistolSounds.find((sound) => sound.paused);
      if (pistolSound) {
        pistolSound.currentTime = 0;
        pistolSound.play();
        setTimeout(() => {
          pistolSound.pause();
          pistolSound.currentTime = 0;
        }, 1050); // 50 Millisekunden = 0,05 Sekunden
      }
    }
  }

  addShotgunBullet(
    bullets,
    dx,
    dy,
    dist,
    ctx,
    gameWindowHeight,
    gameWindowWidth
  ) {
    if (this.weapons[this.weapon].reloading) {
    } else if (this.weapons[this.weapon].bullets <= 0) {
      this.reloadTimer = 120;
      this.weapons[this.weapon].reloading = true;
      this.reloadSound.currentTime = 0; // Reload-Sound von vorne starten
      this.reloadSound.play();
      setTimeout(() => {
        this.reloadSound.pause();
        this.reloadSound.currentTime = 0;
      }, 1000); // Reload-Sound abspielen
    } else {
      for (let i = 0; i < 10; i++) {
        const bullet = new Bullet(
          this.x,
          this.y,
          (dx / dist) * -15 + (Math.random() * 6 - 3),
          (dy / dist) * -15 + (Math.random() * 6 - 3),
          this.weapons[this.weapon].dmg,
          ctx,
          gameWindowWidth,
          gameWindowHeight,
          this.weapons[this.weapon].range
        );
        bullets.push(bullet);
      }

      this.weapons[this.weapon].bullets -= 1;

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


  // takeDamage(damage) {
  //   if (this.isAlive) {
  //     this.health -= damage;
  //     // Freie Instanz finden und abspielen
  //     const playerSound = this.playerSounds.find((sound) => sound.paused);
  //     if (playerSound) {
  //       playerSound.currentTime = 0; // Spielt den Sound von Anfang an
  //       playerSound.play();
  //       setTimeout(() => {
  //         playerSound.pause();
  //         playerSound.currentTime = 0;
  //       }, 4050); // 50 Millisekunden = 0,05 Sekunden
  //     }

  //     if (this.health <= 0) {
  //       this.isAlive = false;
  //     }
  //   }
  // }


  draw(ctx, mouseX, mouseY, deltaTime) {
    //reloadTimer
    if (this.reloadTimer > 0) {
      this.reloadTimer -= deltaTime * 100;
    } else if (this.weapons[this.weapon].reloading) {
      this.reloadTimer = 0;
      this.weapons[this.weapon].reloading = false;
      this.weapons[this.weapon].bullets = this.weapons[this.weapon].magazin;
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
          this.weapons[this.weapon].indexYPos,
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
  //todo attack?
  // attack(target) {
  //   if (this.status === "alive") {
  //     let damage;
  //     switch (this.weaponType) {
  //       case "assaultRifle":
  //         damage = 10;
  //         break;
  //       case "deagle":
  //         damage = 7;
  //         break;
  //       case "magic":
  //         damage = 12;
  //         break;
  //       default:
  //         damage = 5;
  //     }
  //     target.takeDamage(this.damage);
  //   }
  // }
}


