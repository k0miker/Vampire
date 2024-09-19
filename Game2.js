import Player from "./Player.js";
import Enemy from "./Enemy.js";
import Bullet from "./Bullet.js";
import Settings from "./Settings.js";
import Bloodsplosion from "./Bloodsplosion.js";
import Hud from "./Hud.js";
import MapHandler from "./MapHandler.js";
import ObstacleCollision from "./ObstaclesCollision.js";
import {
  mousemoveHandler,
  keyUpHandler,
  keyDownHandler,
  clickHandler,
} from "./controlls.js";
import mapArray from "./map/mapArray.js";
class Game {
  constructor(difficulty) {
    this.canvas = document.querySelector("#gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.resizeCanvas();
    this.gameWindowHeight = 832;
    this.gameWindowWidth = 1728;
    this.zombiCount = 15;
    this.mouseX = this.canvas.width / 2;
    this.mouseY = this.canvas.height / 2;
    this.bullets = [];
    this.mapArray = mapArray;
    this.mapIndex = { x: 2, y: 3 };
    this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();
    // this.currentMap = new Map1(this.ctx);
    this.mapHandler = new MapHandler(
      this.ctx,
      this.currentMap.map,
      this.currentMap.mapDefinition
    );
    this.mapHandler.init();
    this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);
    this.player = new Player(); // Initialisieren Sie den Spieler zuerst
    this.enemies = [];

    this.bloodsplosions = [];
    const settings1 = new Settings(1, 1000, 60, 2, 1, 100, 50, 10, 5);

    this.hud = new Hud(this.ctx);

    // Erstellen Sie eine Instanz der Karte

    // Zombies spawnen
    this.spawnZombies();

    // Setzen Sie die Größe des Canvas-Elements nach der Initialisierung des Spielers
    this.resizeCanvas();
    window.addEventListener("mousemove", mousemoveHandler.bind(this));
    document.addEventListener("keydown", keyDownHandler.bind(this));
    document.addEventListener("keyup", keyUpHandler.bind(this));
    document.addEventListener("click", clickHandler.bind(this));
    window.addEventListener("resize", this.resizeCanvas.bind(this)); // Event-Listener für Fenstergrößenänderung

    this.lastTime = 0;
    this.animate(0);
  }

  getSpawnPositions() {
    const positions = [];
    const map = this.currentMap.map;

    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (this.spawnZoneTiles.includes(map[y][x])) {
          positions.push({ x, y });
          // Füge umliegende Felder hinzu
        }
      }
    }
    return positions;
  }

  spawnZombie() {
    const x = Math.random() * (this.gameWindowWidth - 330) + 166;
    const y = Math.random() * (this.gameWindowHeight - 330) + 166;

    // Randomly select a zombie type (0 to 3)
    const zombieType = Math.floor(Math.random() * 4);

    // Assign different sprites and speeds
    let zombieSprite;
    let zombieSpeed;
    let zombiHP;

    switch (zombieType) {
      case 0:
        zombieSprite = "./assets/zombi0.png";
        zombieSpeed = 0.5;
        zombiHP = 200;
        break;
      case 1:
        zombieSprite = "./assets/zombi1.png";
        zombieSpeed = 1;
        zombiHP = 100;
        break;
      case 2:
        zombieSprite = "./assets/zombi2.png";
        zombieSpeed = 0.25;
        zombiHP = 125;
        break;
      case 3:
        zombieSprite = "./assets/zombi3.png";
        zombieSpeed = 3.0;
        zombiHP = 75;
        break;
    }

    // Only spawn zombie if it doesn't collide with an obstacle
    if (
      !this.obstacleCollision.collision({ x: x, y: y, width: 48, height: 48 })
    ) {
      this.enemies.push(
        new Enemy(x, y, 48, 48, zombieSpeed, zombiHP, zombieSprite) // Speed & sprite assigned
      );
    } else {
      return false;
    }
    return true;
  }

  spawnZombieWithDelay(delay) {
    setTimeout(() => {
      let spawned = false;
      while (!spawned) {
        spawned = this.spawnZombie();
      }
    }, delay);
  }

  spawnZombies() {
    for (let i = 0; i < this.zombiCount; i++) {
      let spawned = false;
      while (!spawned) {
        spawned = this.spawnZombie(); // Now spawns random zombie type
      }
    }
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx.scale(
      window.innerWidth / this.gameWindowWidth,
      window.innerHeight / this.gameWindowHeight
    );
  }

  animate(currentTime) {
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Spielerbewegung innerhalb der Grenzen der Karte+collision
    this.player.x += this.player.vx * deltaTime * 30;
    if (this.obstacleCollision.collision(this.player))
      this.player.x -= this.player.vx;
    this.player.y += this.player.vy * deltaTime * 30;
    if (this.obstacleCollision.collision(this.player))
      this.player.y -= this.player.vy;

    if (this.player.x < 0) {
      this.mapIndex.x -= 1;
      this.levelChange();
      this.player.x = this.gameWindowHeight;
      // this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();
      // // this.currentMap = new Map2(this.ctx);
      // this.mapHandler.map = this.currentMap.map;
      // this.mapHandler.init();
      // this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);
      // this.player.x = this.gameWindowHeight;
      // this.enemies = [];
      // this.spawnZombies()
      console.log(this.mapIndex);
    }

    if (this.player.y < 0) {
      this.mapIndex.y -= 1;
      this.levelChange();
      this.player.y = this.gameWindowHeight;
      // this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();

      // this.mapHandler.map = this.currentMap.map;
      // this.mapHandler.init();
      // this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);
      // this.player.y = this.gameWindowHeight;
      // this.enemies = [];
      // this.spawnZombies()
      console.log(this.mapIndex);
    }

    if (this.player.x > this.gameWindowWidth) {
      this.mapIndex.x += 1;
      this.levelChange();
      this.player.x = 0;
      // this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();

      // this.mapHandler.map = this.currentMap.map;
      // this.mapHandler.init();
      // this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);

      // this.player.x = 0;
      // this.enemies = [];
      // this.spawnZombies()
      console.log(this.mapIndex);
    }

    if (this.player.y > this.gameWindowHeight) {
      this.mapIndex.y += 1;
      this.levelChange();
      this.player.y = 0;
      // this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();
      // // this.currentMap = new Map2(this.ctx);
      // this.mapHandler.map = this.currentMap.map;
      // this.mapHandler.init();
      // this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);

      // this.player.y = 0;
      // this.enemies = [];
      // this.spawnZombies()
      console.log(this.mapIndex);
    }

    // Zeichne die Karte anstelle des Hintergrundbildes
    this.ctx.fillStyle = "#443830";
    this.ctx.fillRect(0, 0, this.gameWindowWidth, this.gameWindowHeight);
    this.mapHandler.drawMap(0, 0);

    // Update und Zeichne Gegner
    this.enemies.forEach((enemy, i) => {
      if (this.enemies[i].status === "dead") {
        this.enemies.splice(i, 1);
        this.hud.score += 1;
        // Spawne einen neuen Zombie nach einer Verzögerung
        this.spawnZombieWithDelay(Math.random() * 60000); //
      }
      enemy.update(
        this.player.x + this.player.width / 2,
        this.player.y + this.player.height / 2,
        deltaTime,
        0,
        0,
        this.obstacleCollision,
        this.player
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

    // Kollisionserkennung
    this.obstacleCollision.collision(this.player);

    //Update und Zeichne Kugeln
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.bullets[i].x < 0 ||
        this.bullets[i].y < 0 ||
        this.bullets[i].x > this.gameWindowWidth + this.bullets[i].width ||
        this.bullets[i].y > this.gameWindowHeight + this.bullets[i].height
      ) {
        this.bullets.splice(i, 1);
        i--;
      } else {
        let hitIndex = undefined;
        hitIndex = this.bullets[i].update(
          deltaTime,
          this.enemies,
          0,
          0,
          this.obstacleCollision
        );
        if (hitIndex === 1000) {
          this.bullets.splice(i, 1);
          i--;
        } else if (hitIndex > -1) {
          this.bloodsplosions.push(
            new Bloodsplosion(
              this.bullets[i].x,
              this.bullets[i].y,
              this.bullets[i].vx,
              this.bullets[i].vy,
              10
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
    this.hud.draw(this.enemies.length, this.bullets.length, this.player.health);

    // Überprüfen, ob der Spieler tot ist
    if (this.player.health <= 0) {
      this.showRestartOverlay();
      return; // Animation stoppen
    }

    requestAnimationFrame(this.animate.bind(this));
  }
  levelChange() {
    this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();

    this.mapHandler.map = this.currentMap.map;
    this.mapHandler.init();
    this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);
    this.enemies = [];
    this.spawnZombies();
  }

  showRestartOverlay() {
    if (this.player.health <= 0) {
      document.getElementById("restart-overlay").style.display = "flex";
    }
  }
}

// Initialisiere das Spiel erst, wenn der Button gedrückt wird
document.addEventListener("DOMContentLoaded", () => {
  let game;

  document.getElementById("start-button").addEventListener("click", () => {
    const difficulty = document.getElementById("difficulty-select").value;
    document.getElementById("overlay").style.display = "none";
    game = new Game(difficulty);
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    document.getElementById("restart-overlay").style.display = "none";
    const difficulty = document.getElementById("difficulty-select").value;
    game = new Game(difficulty);
  });
});
