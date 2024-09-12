import Enemy from "./enemy.js";
import Player from "./player.js";

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 6500;
canvas.height = 3500;

const backgroundImg = new Image();
backgroundImg.src = "./assets/ground1.png";
let backgroundX = 0;
let backgroundY = 0;
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const player = new Player();
player.init();
player.x = window.innerWidth / 2 - player.width / 2;
player.y = window.innerHeight / 2 - player.height / 2;

Player.prototype.update = function (mouseX, mouseY, backgroundX, backgroundY) {
  this.x = mouseX - this.width / 2 + backgroundX;
  this.y = mouseY - this.height / 2 + backgroundY;
};

const enemy1 = new Enemy(
  200,
  200,
  100,
  100,
  1,
  { x: 0, y: 0 },
  100,
  "./assets/tileset.png",
);


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
  player.draw(ctx, backgroundX, backgroundY, mouseX, mouseY);
  // console.log(`Spielerposition: x=${player.x}, y=${player.y}`);
  // console.log(`Mausposition: mouseX=${mouseX}, mouseY=${mouseY}`);

  // Update und Zeichne den Gegner
  enemy1.update(player.x + backgroundX + player.width / 2, player.y + backgroundY + player.height / 2);
  enemy1.draw(ctx, player.x + backgroundX + player.width / 2, player.y + backgroundY + player.height / 2, player.x ,player.y);
console.log(player.x ,player.y);

  requestAnimationFrame(animate);
}
animate();
window.addEventListener("click", () => {
  player.shoot(mouseX, mouseY);
});

function mousemoveHandler(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}