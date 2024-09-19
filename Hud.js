export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
  }
  draw(enemies, bullets, playerHp) {
    this.ctx.font = "32px pixel";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `Gold: ${this.score}     Enemies: ${enemies}     HP: ${playerHp}`,
      10,
      40
    );
  }
}