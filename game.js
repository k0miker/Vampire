const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 4000;
canvas.height = 4000;

const backgroundImg = new Image();
backgroundImg.src = "./assets/ground1.png";
let backgroundX = 0;
let backgroundY = 0;
let mouseX = undefined;
let mouseY = undefined;

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
  requestAnimationFrame(animate);
}
animate();
function mousemoveHandler(e) {
  console.log(e.x, e.y);
  mouseX = e.x;
  mouseY = e.y;
}
