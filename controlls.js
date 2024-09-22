import Bullet from "./Bullet.js";

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
}

export function keyDownHandler(e) {
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
  if (
    e.code === "ShiftLeft" &&
    (e.code === "KeyW" ||
      e.code === "KeyS" ||
      e.code === "KeyA" ||
      e.code === "KeyD")
  ) {
    console.log(e.code);
    this.player.speed = 2;
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
  console.log(e.deltaY);
}
