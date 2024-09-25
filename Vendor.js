export default class Vendor {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/vendor.png";
    this.frameIndex = 0;
    this.deltaTime = 0;
    this.walkTimer = 10; 
    this.numberOfFrames = 3; 
  }

  draw(x, y) {
    this.deltaTime++;
    if (this.deltaTime > this.walkTimer) {
      this.deltaTime = 0;
      this.frameIndex = (this.frameIndex + 1) % this.numberOfFrames;
    }
    this.ctx.drawImage(
      this.img,
      this.frameIndex * 64, // Breite eines Frames im Sprite
      0,
      64,
      64,
      x,
      y,
      64,
      64
    );
  }
}