const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

console.log("dvlkjndbndbl");
const img = new Image();
img.src = "./assets/ground.png";
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});
