export default class Vendor {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/vendor.png";
    this.indexX = 0;
    this.walkTimer = 10;
  }
  
  draw(x, y) {
    this.walkTimer--;

    if (this.walkTimer <= 0) {
      this.indexX += 17;
      this.walkTimer = 10;
      if (this.indexX > 50) this.indexX = 0;
    }

    this.ctx.drawImage(
      this.img,
      this.indexX,
      0,
      16,
      16,

      x * 64 - 3,
      y * 64,
      64,
      64
    );
  }
}
