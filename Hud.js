export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
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
  }
}
