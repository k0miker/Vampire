export default class Vendor {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/vendor.png";
    this.indexX = 0;
    this.walkTimer = 10;
  }

  vendorMenu(obstacleCollision,mapHandler) {
    if (obstacleCollision.vendorDetected) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      this.ctx.fillRect(
        mapHandler.vendorPosition.x + 100,
        mapHandler.vendorPosition.y,
        250,
        250
      );
      this.ctx.fillStyle = "white";
      this.ctx.font = "16px Arial";
      this.ctx.fillText(
        "Welcome to the shop",
        mapHandler.vendorPosition.x + 120,
        mapHandler.vendorPosition.y + 30
      );
      this.ctx.fillText(
        "Press 'E' to buy Health",
        mapHandler.vendorPosition.x + 120,
        mapHandler.vendorPosition.y + 60
      );
      this.ctx.fillText(
        "Press 'z' to buy Ammo",
        mapHandler.vendorPosition.x + 120,
        mapHandler.vendorPosition.y + 90
      );
      this.ctx.fillText(
        "press `u` to upgrade weapon",
        mapHandler.vendorPosition.x + 120,
        mapHandler.vendorPosition.y + 120
      );
    }
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
