const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 4000;
canvas.height = 4000;

const backgroundImg = new Image();
backgroundImg.src = "./assets/ground1.png";
window.scroll(1000, 2000);
window.addEventListener("mousemove", mousemoveHandler);
function animate() {
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
}
