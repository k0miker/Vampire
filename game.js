import Enemy from "./enemy.js";
import Player from "./player.js";

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 3500;
canvas.height = 3500;

const backgroundImg = new Image();
backgroundImg.src = "./assets/ground1.png";
let backgroundX = 0;
let backgroundY = 0;
let mouseX = canvas.width / 2; // Initialisieren Sie mouseX in der Mitte des Bildschirms
let mouseY = canvas.height / 2; // Initialisieren Sie mouseY in der Mitte des Bildschirms

const player = new Player();
player.init();
player.x = window.innerWidth / 2 - player.width / 2;
player.y = window.innerHeight / 2 - player.height / 2;

Player.prototype.update = function(mouseX, mouseY) {
    this.x = mouseX - this.width / 2;
    this.y = mouseY - this.height / 2;
};

const enemy1 = new Enemy(200, 200, 100, 100, 1, { x: 0, y: 0 }, 100, "./assets/enemy1.png", "assaultRifle");

window.addEventListener("mousemove", mousemoveHandler);

function animate() {
    if (mouseX > window.innerWidth / 2 + 50) backgroundX += 2;
    if (backgroundX > canvas.width - window.innerWidth)
        backgroundX = canvas.width - window.innerWidth;
    if (mouseX < window.innerWidth / 2 - 50) backgroundX -= 2;
    if (backgroundX < 0) backgroundX = 0;
    if (mouseY > window.innerHeight / 2 + 50) backgroundY += 2;
    if (backgroundY < 0) backgroundY = 0;
    if (backgroundY > canvas.height - window.innerHeight)
        backgroundY = canvas.height - window.innerHeight;
    if (mouseY < window.innerHeight / 2 - 50) backgroundY -= 2;

    window.scroll(backgroundX, backgroundY);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        backgroundImg,
        0,
        0,
        backgroundImg.width,
        backgroundImg.height,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Update und Zeichne den Spieler
    player.draw(ctx);
    console.log(`Spielerposition: x=${player.x}, y=${player.y}`);
    console.log(`Mausposition: mouseX=${mouseX}, mouseY=${mouseY}`);

    // Zeichne den Gegner
    enemy1.update();
    enemy1.draw(ctx);

    requestAnimationFrame(animate);
}
animate();

function mousemoveHandler(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}