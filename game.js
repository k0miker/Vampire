import Player from "./Player.js";
// game.js

// Canvas Setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Dynamische Canvas-Größe
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Bilder
const ground = new Image();
ground.src = "assets/ground1.png";

const stone1 = new Image();
stone1.src = "assets/stone1.png";

const stone2 = new Image();
stone2.src = "assets/stone2.png";

const playerImg = new Image();
playerImg.src = "./assets/player.png";

const enemyImgs = [
  "assets/enemy1.png",
  "assets/enemy2.png",
  "assets/enemy3.png",
].map((src) => {
  let img = new Image();
  img.src = src;
  return img;
});

// Spiellogik
const player = new Player(canvas.width / 2, canvas.height / 2, playerImg, 1);

let enemies = [];

function spawnEnemy() {
  let enemyImg = enemyImgs[Math.floor(Math.random() * enemyImgs.length)];
  enemies.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 50,
    height: 50,
    speed: 2 + Math.random() * 3,
    img: enemyImg,
  });
}

function updatePlayer() {
  // Steuerung: Beispiel mit Pfeiltasten
  if (keys.ArrowUp) player.y -= player.speed;
  if (keys.ArrowDown) player.y += player.speed;
  if (keys.ArrowLeft) player.x -= player.speed;
  if (keys.ArrowRight) player.x += player.speed;

  // Grenzen der Spielfläche
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

function updateEnemies() {
  enemies.forEach((enemy) => {
    let dx = player.x - enemy.x;
    let dy = player.y - enemy.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    enemy.x += (dx / dist) * enemy.speed;
    enemy.y += (dy / dist) * enemy.speed;
  });
}

function drawGround() {
  ctx.drawImage(ground, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  // ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
  player.draw(ctx);
}

function drawEnemies() {
  enemies.forEach((enemy) => {
    ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

let keys = {};
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Hauptspiel-Loop
function gameLoop() {
  // Spiellogik
  updatePlayer();
  updateEnemies();

  // Rendern
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawPlayer();
  drawEnemies();

  requestAnimationFrame(gameLoop);
}

// Starten des Spiels
playerImg.onload = () => {
  for (let i = 0; i < 5; i++) {
    spawnEnemy(); // Spawne am Anfang 5 Gegner
  }
  gameLoop();
};
