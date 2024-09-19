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

  const bullet = new Bullet(
    this.player.x,
    this.player.y,
    (dx / dist) * -15,
    (dy / dist) * -15,
    25,
    this.ctx,
    this.gameWindowWidth,
    this.gameWindowHeight
  );

  this.bullets.push(bullet);
}
