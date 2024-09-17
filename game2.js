import Player from "./player.js";
import Enemy from "./enemy.js";
import Bullet from "./Bullet.js";
import Settings from "./settings.js";
import Bloodsplosion from "./Bloodsplosion.js";
import Hud from "./Hud.js";
import Map from "./map.js";
import Map1 from "./map/map1.js";

export default class Game {
  constructor(fps) {
    this.canvas = document.querySelector("#gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.backgroundXSize = 4690;
    this.backgroundYSize = 4690;

    this.mouseX = this.canvas.width / 2;
    this.mouseY = this.canvas.height / 2;

    this.bullets = [];
    this.player = new Player(); // Initialisieren Sie den Spieler zuerst
    this.enemies = [];
    this.enemies.push(
      new Enemy(450, 600, 48, 48, 1, 100, "./assets/tileset.png", "pistol")
    );
    this.enemies.push(
      new Enemy(850, 650, 48, 48, 1, 100, "./assets/tileset.png", "pistol")
    );
    this.enemies.push(
      new Enemy(400, 200, 48, 48, 1, 100, "./assets/tileset.png", "pistol")
    );
    this.enemies.push(
      new Enemy(300, 700, 48, 48, 1, 100, "./assets/tileset.png", "pistol")
    );
    this.bloodsplosions = [];
    const settings1 = new Settings(1, 1000, 60, 2, 1, 100, 50, 10, 5);

    this.hud = new Hud(this.ctx);

    this.currentMap = new Map1(this.ctx); // Erstellen Sie eine Instanz der Karte
    this.map = new Map(
      this.ctx,
      this.currentMap.map,
      this.currentMap.mapDefinition
    );

    // Setzen Sie die Größe des Canvas-Elements nach der Initialisierung des Spielers
    this.resizeCanvas();
    window.addEventListener("mousemove", this.mousemoveHandler.bind(this));
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
    document.addEventListener("click", this.clickHandler.bind(this));
    window.addEventListener("resize", this.resizeCanvas.bind(this)); // Event-Listener für Fenstergrößenänderung
    this.fps = fps;
    this.lastTime = 0;
    this.animate(0);
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate(currentTime) {
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Spielerbewegung innerhalb der Grenzen der Karte
    this.player.x += this.player.vx * deltaTime * 30;
    this.player.y += this.player.vy * deltaTime * 30;

    if (this.player.x < 0) this.player.x = 0;
    if (this.player.y < 0) this.player.y = 0;
    if (this.player.x > this.backgroundXSize - this.player.width)
      this.player.x = this.backgroundXSize - this.player.width;
    if (this.player.y > this.backgroundYSize - this.player.height)
      this.player.y = this.backgroundYSize - this.player.height;

    // Zeichne die Karte anstelle des Hintergrundbildes
    this.ctx.fillStyle = "#443830";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.map.drawMap(0, 0);

    // Update und Zeichne Gegner
    this.enemies.forEach((enemy, i) => {
      if (this.enemies[i].status === "dead") {
        this.enemies.splice(i, 1);
        this.hud.score += 1;
      }
      enemy.update(
        this.player.x + this.player.width / 2,
        this.player.y + this.player.height / 2,
        deltaTime,
        0,
        0
      );
      enemy.draw(
        this.ctx,
        deltaTime,
        0,
        0,
        this.player.x + this.player.width / 2,
        this.player.y + this.player.height / 2
      );
    });

    // Update und Zeichne Kugeln
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.bullets[i].x < 0 ||
        this.bullets[i].y < 0 ||
        this.bullets[i].x > window.innerWidth + this.bullets[i].width ||
        this.bullets[i].y > window.innerHeight + this.bullets[i].height
      ) {
        this.bullets.splice(i, 1);
        i--;
      } else {
        let hitIndex = undefined;
        hitIndex = this.bullets[i].update(deltaTime, this.enemies, 0, 0);
        if (hitIndex > -1) {
          this.bloodsplosions.push(
            new Bloodsplosion(
              this.bullets[i].x,
              this.bullets[i].y,
              this.bullets[i].vx,
              this.bullets[i].vy,
              20
            )
          );

          this.bullets.splice(i, 1);
          i--;
        }
      }
    }

    // Update und Zeichne den Spieler
    this.player.draw(this.ctx, this.mouseX, this.mouseY, deltaTime);

    // Explosionen update
    for (let i = 0; i < this.bloodsplosions.length; i++) {
      let finished = undefined;
      finished = this.bloodsplosions[i].update(this.ctx, 0, 0);
      if (finished <= 0) {
        this.bloodsplosions.splice(i, 1);
        i--;
      }
    }

    // HUD anzeigen
    this.hud.draw(this.enemies.length, this.bullets.length);
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
      e.code === "KeyShiftLeft" &&
      (e.code === "KeyW" ||
        e.code === "KeyS" ||
        e.code === "KeyA" ||
        e.code === "KeyD")
    ) {
      this.player.speed = 2;
    }
  }

  clickHandler(e) {
    let dx = this.player.x - this.mouseX;
    let dy = this.player.y - this.mouseY;
    let dist = Math.sqrt(dx * dx + dy * dy);
    console.log(
      this.player.x + this.player.width / 2,
      this.player.y + this.player.height / 2
    );

    const bullet = new Bullet(
      this.player.x,
      this.player.y,
      (dx / dist) * -15,
      (dy / dist) * -15,
      25,
      this.ctx
    );

    this.bullets.push(bullet);
  }
}

// Initialisiere das Spiel
const game = new Game();
