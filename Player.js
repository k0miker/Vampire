export default class Player {
  constructor(x, y, img, speed) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.img = img;
    this.speed = speed;
    this.health = 100;
    this.armor = 0;
    this.bulletDelay = 10;
    this.rocketDelay = 100;
  }
  draw(ctx) {
    ctx.drawImage(
      this.img,
      0,
      900,
      400,
      420,

      this.x,
      this.y,
      this.width,
      this.height
    );
    console.log(this.img.width);
  }
}
