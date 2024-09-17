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
    this.backgroundX = 0;
    this.backgroundY = 0;
    this.backgroundXSize = 4690;
    this.backgroundYSize = 4690;


    this.mouseX = this.canvas.width / 2;
    this.mouseY = this.canvas.height / 2;
    this.bullets = [];
    this.player = new Player(); // Initialisieren Sie den Spieler zuerst
    this.enemies = [];
    this.enemies.push(new Enemy(
      200,
      200,
      40,
      260,
      1,
      100,
      "./assets/tileset.png",
      "pistol"
    ));
    this.bloodsplosions = [];
    const settings1 = new Settings(1, 1000, 60, 2, 1, 100, 50, 10, 5);

    this.hud = new Hud(this.ctx);

    this.currentMap = new Map1(this.ctx); // Erstellen Sie eine Instanz der Karte
    this.map = new Map(this.ctx, this.currentMap.map, this.currentMap.mapDefinition);

   // Setzen Sie die Größe des Canvas-Elements nach der Initialisierung des Spielers

    if (this.enemies.length < 10) {
      console.log(this.enemies.length);
      
      setInterval(() => {
        const enemy = new Enemy(
          0,
          0,
          60,
          60,
          1,
          100,
          "./assets/tileset.png",
          "pistol"
        );
        enemy.x = Math.random() * 4680;
        enemy.y = Math.random() * 4680;
        this.enemies.push(enemy);
      }, settings1.spawnTime);
    }
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
    this.player.x = this.canvas.width / 2 - this.player.width / 2;
    this.player.y = this.canvas.height / 2 - this.player.height / 2;
  }

   animate(currentTime) {
      const deltaTime = (currentTime - this.lastTime) / 1000;
      this.lastTime = currentTime;
  
      if (this.player.vx !== 0 && this.player.vy !== 0) {
        this.backgroundX += (this.player.vx / 1.5) * deltaTime * 30;
        this.backgroundY += (this.player.vy / 1.5) * deltaTime * 30;
      } else {
        this.backgroundX += this.player.vx * deltaTime * 30;
        this.backgroundY += this.player.vy * deltaTime * 30;
      }
  
      if (this.backgroundY < 0) this.backgroundY = 0;
      if (this.backgroundX < 0) this.backgroundX = 0;
      if (this.backgroundX > this.backgroundXSize - window.innerWidth)
        this.backgroundX = this.backgroundXSize - window.innerWidth;
      if (this.backgroundY > this.backgroundYSize - window.innerHeight)
        this.backgroundY = this.backgroundYSize - window.innerHeight;
  
      // Zeichne die Karte anstelle des Hintergrundbildes
      this.ctx.fillStyle = "#443830";
      this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
      this.map.drawMap(this.backgroundX, this.backgroundY);
    
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
          this.backgroundX,
          this.backgroundY
        );
        enemy.draw(
          this.ctx,
          deltaTime,
          this.backgroundX,
          this.backgroundY,
          this.player.x + this.player.width / 2,
          this.player.y + this.player.height / 2
        );
      });
  
      // Update und Zeichne Kugeln
      for (let i = 0; i < this.bullets.length; i++) {
        if (
          this.bullets[i].x < this.backgroundX ||
          this.bullets[i].y < this.backgroundY ||
          this.bullets[i].x >
            window.innerWidth + this.bullets[i].width + this.backgroundX ||
          this.bullets[i].y >
            window.innerHeight + this.bullets[i].height + this.backgroundY
        ) {
          this.bullets.splice(i, 1);
          i--;
        } else {
          let hitIndex = undefined;
          hitIndex = this.bullets[i].update(
            deltaTime,
            this.enemies,
            this.backgroundX,
            this.backgroundY
          );
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
        finished = this.bloodsplosions[i].update(
          this.ctx,
          this.backgroundX,
          this.backgroundY
        );
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
    this.player.x = window.innerWidth / 2 - this.player.width / 2;
    this.player.y = window.innerHeight / 2 - this.player.height / 2;
  }

  clickHandler(e) {
    let dx = this.player.x + this.player.width / 2 - this.mouseX;
    let dy = this.player.y + this.player.height / 2 - this.mouseY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    const bullet = new Bullet(
      this.player.x + this.backgroundX + this.player.width / 2,
      this.player.y + this.backgroundY + this.player.height / 2,
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