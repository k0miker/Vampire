export default class Vendor {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/vendor.png";
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 10; // Geschwindigkeit der Animation
    this.numberOfFrames = 3; // Anzahl der Frames im Sprite
  }

  draw(x, y) {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
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