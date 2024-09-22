export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/tileset.png";
  }
  draw(enemies, bullets, player) {
   
    this.ctx.fillStyle = "rgba(255, 0, 0, 1)";
    this.ctx.fillRect(20, 20, player.health, 28);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6";
    this.ctx.fillRect(0, 0, 580,62);
    this.ctx.fillRect(0, 62, 180,32);
    this.ctx.drawImage(
      this.img,
      17,
      player.weapons[player.weapon].indexYPos,
      16,
      16,
      400,
      -30,
      128,
      96
    );
    for (let i = 0; i < player.weapons[player.weapon].bullets; i++) {
      this.ctx.drawImage(
        this.img,
        68,
        194,
        16,
        16,
        -5 + i * 20,
        52,
        64,
        64
      );
    }
    this.ctx.font = "32px pixel";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `        HP: ${
        player.health
      }             Gold: ${Math.ceil(this.score)}       `,
      10,
      40
    );
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.8";
    this.ctx.fillRect(20,55, player.reloadTimer/2, 32);
  }
}
