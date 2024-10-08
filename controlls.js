export function mousemoveHandler(e) {
  this.mouseX = e.clientX * (this.gameWindowWidth / window.innerWidth);
  this.mouseY = e.clientY * (this.gameWindowHeight / window.innerHeight);
}

export function keyUpHandler(e) {
  if (e.code === "KeyW") {
    this.player.vy = 0;
  }
  if (e.code === "KeyS") {
    this.player.vy = 0;
  }
  if (e.code === "KeyA") {
    this.player.vx = 0;
  }
  if (e.code === "KeyD") {
    this.player.vx = 0;
  }
  if (e.code === "ShiftLeft") {
    this.player.speed = 4;
  }
}

export function keyDownHandler(e) {
  if (e.code === "KeyR") {
    console.log(this.player.weapons[this.player.weapon]);
    weapons[this.player.weapon].bullets = 0;
    this.player.reloadTimer = 120;

    weapons[this.player.weapon].reloading = true;
    this.player.reloadSound.currentTime = 0; // Reload-Sound -350ms, geht aber nicht Oo
    this.player.reloadSound.play();
    setTimeout(() => {
      this.player.reloadSound.pause();
      this.player.reloadSound.currentTime = -350;
    }, 1700); // Reload-Sound abspielen
  }
  if (e.code === "ShiftLeft") {
    this.player.speed = 8;
  }
  if (e.code === "KeyW") {
    this.player.vy = -this.player.speed;
  }
  if (e.code === "KeyS") {
    this.player.vy = this.player.speed;
  }
  if (e.code === "KeyA") {
    this.player.vx = -this.player.speed;
  }
  if (e.code === "KeyD") {
    this.player.vx = this.player.speed;
  }

  ///vendorkeys
  if (e.code === "KeyE") {
    if (this.player.gold >= 100) {
      this.player.gold -= 100;
      this.player.health = 200;
    }
  }
  if (e.code === "KeyZ") {
    if (this.player.gold >= 50) {
      this.player.gold -= 50;
      this.player.magazines += 1;
    }
  }
  if (e.code === "KeyU") {
    if (this.player.gold >= 50) {
      this.player.gold -= 50;
      weapons[this.player.weapon].dmg += 2;
    }
  }
  if (e.code === "KeyO") {
    if (this.player.gold >= 50) {
      this.player.gold -= 50;
      weapons[this.player.weapon].range += 5;
    }
  }
}

export function clickHandler(e) {
  let dx = this.player.x - this.mouseX;
  let dy = this.player.y - this.mouseY;
  let dist = Math.sqrt(dx * dx + dy * dy);
  this.player.addBullet(
    this.bullets,
    dx,
    dy,
    dist,
    this.ctx,
    this.gameWindowWidth,
    this.gameWindowHeight
  );
}
export function mouseWheelHandler(e) {
  this.player.weaponIndex += 1;
  if (this.player.weaponIndex >= this.player.weapons.length)
    this.player.weaponIndex = 0;
  else if (this.player.weaponIndex < 0)
    this.player.weaponIndex = this.player.weapons.length - 1;
  this.player.weapon = this.player.weapons[this.player.weaponIndex];
}
