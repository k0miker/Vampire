export default class Player {
  constructor(x, y, img, speed) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.img = img;
    this.speed = speed;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
