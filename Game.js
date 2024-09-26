import Player from "./Player.js";
import Enemy from "./Enemy.js";
import Settings from "./Settings.js";
import Bloodsplosion from "./Bloodsplosion.js";
import Hud from "./Hud.js";
import MapHandler from "./MapHandler.js";
import ObstacleCollision from "./ObstaclesCollision.js";
import {
  mouseWheelHandler,
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

    this.mouseX = this.canvas.width / 2;
    this.mouseY = this.canvas.height / 2;
    this.bullets = [];
    this.mapArray = mapArray;
    this.mapIndex = { x: 1, y: 0 };
    this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();

    this.mapHandler = new MapHandler(
      this.ctx,
      this.currentMap.map,
      this.currentMap.overlay
    );
    this.mapHandler.init();
    this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles, this.mapHandler.vendorPosition);
    this.player = new Player(); // Initialisieren Sie den Spieler zuerst
    this.enemies = [];
    this.bloodsplosions = [];
    const settings1 = new Settings(difficulty, 1000, 60, 2, 1, 100, 50, 10, 5);

    this.hud = new Hud(this.ctx);

    // Zombies spawnen
    this.spawnZombies(this.currentMap.zombieCount);

    // Setzen Sie die Größe des Canvas-Elements nach der Initialisierung des Spielers
    this.resizeCanvas();
    window.addEventListener("mousemove", mousemoveHandler.bind(this));
    window.addEventListener("wheel", mouseWheelHandler.bind(this));
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

    let zombieType = Math.floor(Math.random() * 5);
    if (this.currentMap.bossCount > 0) {
      this.enemies.push(
        new Enemy(this.currentMap.bossX, this.currentMap.bossY, 120, 120, 5)
      );
      this.currentMap.bossCount = 0;
    }

    // Only spawn zombie if it doesn't collide with an obstacle
    if (
      !this.obstacleCollision.collision({ x: x, y: y, width: 48, height: 48 })
    ) {
      this.enemies.push(new Enemy(x, y, 48, 48, zombieType));
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

  spawnZombies(zombiCount) {
    for (let i = 0; i < zombiCount; i++) {
      let spawned = false;
      while (!spawned) {
        spawned = this.spawnZombie();
      }
    }

    // Spawne Boss-Gegner nur, wenn bossCount größer als 0 ist
    if (this.currentMap.bossCount > 0) {
      for (let i = 0; i < this.currentMap.bossCount; i++) {
        let spawned = false;
        while (!spawned) {
          spawned = this.spawnZombie(5 + i); // Boss-Gegner haben die Typen 4 und 5
        }
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

    
    console.log(this.obstacleCollision.collision(this.player));
    
    if (this.obstacleCollision.collision(this.player)) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      this.ctx.fillRect(this.mapHandler.vendorPosition.x+100,this.mapHandler.vendorPosition.y,250,250);
      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Arial";

      this.ctx.fillText(
        "Welcome to the shop",
        this.mapHandler.vendorPosition.x+120,
        this.mapHandler.vendorPosition.y+30
      );
      this.ctx.fillText(
        "Press 'E' to buy Health",
        this.mapHandler.vendorPosition.x+120,
        this.mapHandler.vendorPosition.y+60
      );
      this.ctx.fillText(
        "Press 'R' to buy Ammo",
        this.mapHandler.vendorPosition.x+120,
        this.mapHandler.vendorPosition.y+90
      );
      this.ctx.fillText(
        "press `u` to upgrade weapon(+2dmg)",
        this.mapHandler.vendorPosition.x+120,
        this.mapHandler.vendorPosition.y+120
      );
    }


       
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Spielerbewegung innerhalb der Grenzen der Karte+collision
    this.player.x += this.player.vx * deltaTime * 30;
    if (this.obstacleCollision.collision(this.player))
      this.player.x -= this.player.vx;
    this.player.y += this.player.vy * deltaTime * 30;
    if (this.obstacleCollision.collision(this.player))
      this.player.y -= this.player.vy;

    const walksound = this.player.walkSound;
    if (this.player.vx !== 0 || this.player.vy !== 0) {
      walksound.play();
      walksound.volume = 0.4;
      walksound.loop = true;
    } else {
      walksound.pause();
      walksound.loop = false;
      walksound.currentTime = 0;
    }

    if (this.player.x < 0) {
      this.mapIndex.x -= 1;
      this.levelChange();
      this.player.x = this.gameWindowWidth;

      console.log(this.mapIndex);
    }

    if (this.player.y < 0) {
      this.mapIndex.y -= 1;
      this.levelChange();
      this.player.y = this.gameWindowHeight;
    }

    if (this.player.x > this.gameWindowWidth) {
      this.mapIndex.x += 1;
      this.levelChange();
      this.player.x = 0;

      console.log(this.mapIndex);
    }

    if (this.player.y > this.gameWindowHeight) {
      this.mapIndex.y += 1;
      this.levelChange();
      this.player.y = 0;

      console.log(this.mapIndex);
    }

    // Zeichne die Karte anstelle des Hintergrundbildes
    this.ctx.fillStyle = "#443830";
    this.ctx.fillRect(0, 0, this.gameWindowWidth, this.gameWindowHeight);
    this.mapHandler.drawMap();

    //update und zeichne Boss
    if (this.currentMap.bossHandler)
      this.currentMap.bossHandler(
        this.ctx,
        deltaTime,
        this.player,
        this.obstacleCollision,
        this.bullets,
        this.bloodsplosions,
        this.gameWindowWidth,
        this.gameWindowHeight
      );
    // if (this.bloodsplosions.length > 0) console.log(this.bloodsplosions);
    // Update und Zeichne Gegner
    this.enemies.forEach((enemy, i) => {
      if (this.enemies[i].status === "dying") {
        //gold hinzufügen /10 weil eine sec "dying"
        this.hud.score += this.enemies[i].gold / 10;
      }
      if (this.enemies[i].status === "dead") {
        this.enemies.splice(i, 1);
        // Spawne einen neuen Zombie nach einer Verzögerung
        this.spawnZombieWithDelay(Math.random() * 60000 + 30000); //
      }
      enemy.update(
        this.player.x + this.player.width / 2,
        this.player.y + this.player.height / 2,
        deltaTime,
        this.obstacleCollision,
        this.player
      );
      enemy.draw(
        this.ctx,
        deltaTime,
        this.player.x + this.player.width / 2,
        this.player.y + this.player.height / 2
      );
      if (enemy.boss) {
        enemy.bossHandler(
          this.player,
          this.ctx,
          this.gameWindowWidth,
          this.game,
          deltaTime,
          this.obstacleCollision
        );
      }
    });

    // Kollisionserkennung
    this.obstacleCollision.collision(this.player);

 

    //Update und Zeichne Kugeln
    for (let i = 0; i < this.bullets.length; i++) {
      // console.log(this.bullets[i].dmg);
      this.bullets[i].range--;
      if (
        this.bullets[i].x < 0 ||
        this.bullets[i].y < 0 ||
        this.bullets[i].x > this.gameWindowWidth + this.bullets[i].width ||
        this.bullets[i].y > this.gameWindowHeight + this.bullets[i].height ||
        this.bullets[i].range < 0
      ) {
        this.bullets.splice(i, 1);
        i--;
      } else {
        let hitIndex = undefined;
        hitIndex = this.bullets[i].update(
          deltaTime,
          this.enemies,

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
    this.hud.draw(this.enemies.length, this.player);

    // Überprüfen, ob der Spieler tot ist
    if (this.player.health <= 0) {
      this.showRestartOverlay();
      return; // Animation stoppen
    }
    this.mapHandler.drawOverlay();
    requestAnimationFrame(this.animate.bind(this));
    // HUD anzeigen
    this.hud.draw(this.enemies.length, this.player);
    this.mapHandler.drawMiniMap(this.mapIndex.x, this.mapIndex.y);
  }
  levelChange() {
    this.currentMap = new mapArray[this.mapIndex.y][this.mapIndex.x]();
    this.bullets = [];
    this.mapHandler.map = this.currentMap.map;
    this.mapHandler.overlay = this.currentMap.overlay;
    this.mapHandler.init();
    this.obstacleCollision = new ObstacleCollision(this.mapHandler.obstacles);
    this.enemies = [];
    this.mapHandler.drawMiniMap(this.mapIndex.x, this.mapIndex.y);
    this.spawnZombies(this.currentMap.zombieCount);
    console.log(mapArray[this.mapIndex.y][this.mapIndex.x]);
  }

  showRestartOverlay() {
    if (this.player.health <= 0) {
      this.player.deathSound.play();
      setTimeout(() => {
        document.getElementById("restart-overlay").style.display = "flex";
      }, 1000);
    }
  }
}

// Initialisiere das Spiel erst, wenn der Button gedrückt wird
document.addEventListener("DOMContentLoaded", () => {
  let game;

  document.getElementById("start-button").addEventListener("click", () => {
    const difficulty = document.getElementById("difficulty-select").value;
    document.getElementById("overlay").style.display = "none";
    const ambientSound = document.getElementById("ambient");
    ambientSound.currentTime = -15000; // Sound von Anfang an abspielen
    ambientSound.loop = true; // Sound in einer Schleife abspielen
    ambientSound.volume = 0.2; // Lautstärke auf 10% setzen
    ambientSound.play(); // Sound abspielen

    game = new Game(difficulty);
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    document.getElementById("restart-overlay").style.display = "none";
    const difficulty = document.getElementById("difficulty-select").value;

    game = new Game(difficulty);
  });
});
