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
    this.player.weapons[this.player.weapon].bullets = 0;
    this.player.reloadTimer = 120;
    this.player.weapons[this.player.weapon].reloading = true;
    this.player.reloadSound.currentTime = -350; // Reload-Sound -350ms, geht aber nicht Oo
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
}

export function clickHandler(e) {
  let dx = this.player.x - this.mouseX;
  let dy = this.player.y - this.mouseY;
  let dist = Math.sqrt(dx * dx + dy * dy);
  this.player.weapons[this.player.weapon].addBullet(
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
  this.player.weapon += 1;
  if (this.player.weapon >= this.player.weapons.length) this.player.weapon = 0;
  else if (this.player.weapon < 0)
    this.player.weapon = this.player.weapons.length;
}
