export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
  }
  draw(enemies, bullets) {
    this.ctx.font = "bold 32px Helvetica";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `Counter: ${this.score}      EnemyCounter: ${enemies}        BulletCounter: ${bullets}`,
      10,
      40
    );
  }
}
