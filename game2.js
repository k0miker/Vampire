import Player from "./player.js";
import Enemy from "./enemy.js";
import Bullet from "./Bullet.js";
export default class Game {
  constructor(fps) {
    this.canvas = document.querySelector("#gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 6500;
    this.canvas.height = 3500;

    this.backgroundImg = new Image();
    this.backgroundImg.src = "./assets/ground1.png";
    this.backgroundX = 0;
    this.backgroundY = 0;
    this.mouseX = this.canvas.width / 2;
    this.mouseY = this.canvas.height / 2;
    this.bullets = [];
    this.player = new Player();
    this.player.init();
    this.player.x = window.innerWidth / 2 - this.player.width / 2;
    this.player.y = window.innerHeight / 2 - this.player.height / 2;
    this.enemies = [];
    const enemy = new Enemy(
      400,
      400,
      100,
      100,
      4,
      100,
      "./assets/enemy1.png",
      1
    );
    this.enemies.push(enemy);
    // console.log(this.enemies, this.enemies.length);
    window.addEventListener("mousemove", this.mousemoveHandler.bind(this));
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
    document.addEventListener("click", this.clickHandler.bind(this));
    window.onresize = this.resizeHandler.bind(this);
    this.fps = fps;
    this.lastTime = 0;
    this.animate(0);
  }

  animate(currentTime) {
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;
    // console.log(deltaTime);

    if (this.player.vx !== 0 && this.player.vy !== 0) {
      this.backgroundX += (this.player.vx / 1.5) * deltaTime * 30;
      this.backgroundY += (this.player.vy / 1.5) * deltaTime * 30;
    } else {
      this.backgroundX += this.player.vx * deltaTime * 30;
      this.backgroundY += this.player.vy * deltaTime * 30;
    }

    if (this.backgroundY < 0) this.backgroundY = 0;
    if (this.backgroundX < 0) this.backgroundX = 0;
    if (this.backgroundX > this.canvas.width - window.innerWidth)
      this.backgroundX = this.canvas.width - window.innerWidth;
    if (this.backgroundY > this.canvas.height - window.innerHeight)
      this.backgroundY = this.canvas.height - window.innerHeight;

    window.scroll(this.backgroundX, this.backgroundY);

    this.ctx.drawImage(
      this.backgroundImg,
      0,
      0,
      this.backgroundImg.width,
      this.backgroundImg.height,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    // Update und Zeichne den Spieler
    this.player.draw(
      this.ctx,
      this.backgroundX,
      this.backgroundY,
      this.mouseX,
      this.mouseY
    );

    // Update und Zeichne den Gegner
    // this.enemy1.update(
    //   this.player.x + this.backgroundX + this.player.width / 2,
    //   this.player.y + this.backgroundY + this.player.height / 2
    // );
    // this.enemy1.draw(
    //   this.ctx,
    //   this.player.x + this.backgroundX + this.player.width / 2,
    //   this.player.y + this.backgroundY + this.player.height / 2
    // );

    // Update und Zeichne Kugeln
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.bullets[i].x < this.backgroundX ||
        this.bullets[i].y < this.backgroundY ||
        this.bullets[i].x >
          this.backgroundX + window.innerWidth + this.bullets[i].width ||
        this.bullets[i].y >
          this.backgroundY + window.innerHeight + this.bullets[i].height
      ) {
        this.bullets.splice(i, 1);
        i--;
        // console.log(this.bullets.length);
      } else {
        this.bullets[i].update(deltaTime);
        this.bullets[i].draw();
      }
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  mousemoveHandler(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  keyUpHandler(e) {
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

  keyDownHandler(e) {
    if (e.code === "KeyW") {
      this.player.vy = -8;
    }
    if (e.code === "KeyS") {
      this.player.vy = 8;
    }
    if (e.code === "KeyA") {
      this.player.vx = -8;
    }
    if (e.code === "KeyD") {
      this.player.vx = 8;
    }
  }

  resizeHandler() {
    // this.canvas.height = window.innerHeight;
    // this.canvas.width = window.innerWidth;
    this.player.x = window.innerWidth / 2 - this.player.width / 2;
    this.player.y = window.innerHeight / 2 - this.player.height / 2;
  }

  clickHandler(e) {
    let dx = this.player.x + this.player.width / 2 - this.mouseX;
    let dy = this.player.y + this.player.height / 2 - this.mouseY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    const bullet = new Bullet(
      this.player.x + this.player.width / 2 + this.backgroundX,
      this.player.y + this.player.height / 2 + this.backgroundY,
      (dx / dist) * -4,
      (dy / dist) * -4,
      10,
      this.ctx
    );

    this.bullets.push(bullet);
    // console.log(this.bullets.length);
  }
}

// Initialisiere das Spiel
const game = new Game();
