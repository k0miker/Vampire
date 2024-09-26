export default class Vendor {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/vendor.png";
    this.indexX = 0;
    this.deltaTime = 0;
    this.walkTimer = 0; 
  }

  draw(x, y) {
    
    if (this.walkTimer <= 0) {    
      this.indexX+=17;      
      this.walkTimer = 10;
    if (this.indexX > 50) this.indexX = 0;
    }
    this.ctx.save();
    this.ctx.drawImage(      
      this.img,
      this.indexX,
      0,
      16,
      16,
      x * 64,
      y * 64,
      64,
      64
    );
    this.ctx.restore();
  this.walkTimer--;

  }
}