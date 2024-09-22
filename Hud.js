export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/tileset.png";
  }
  draw(enemies, bullets, player) {
    this.ctx.font = "32px pixel";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `Gold: ${Math.ceil(this.score)}     Enemies: ${enemies}     HP: ${
        player.health
      }        Weapon: ${player.weapons[player.weapon].name}`,
      10,
      40
    );
    this.ctx.drawImage(
      this.img,
      17,
      player.weapons[player.weapon].indexYPos,
      16,
      16,
      10,
      832 - 96,
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
        140 + i * 20,
        828 - 48,
        64,
        64
      );
    }
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(164, 834 - 48, player.reloadTimer, 24);
  }
}
