export default class Bloodsplosion {
  constructor(x, y, vx, vy, count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + vx,
        y: y + vy,
        vx: vx + (Math.random() * 4 - 2),
        vy: vy + (Math.random() * 4 - 2),
      });
    }
    this.duration = 15;
  }
  update(ctx, backgroundX, backgroundY) {
    ctx.fillStyle = "#bb0000";
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].x += this.particles[i].vx / 2;
      this.particles[i].y += this.particles[i].vy / 2;
      ctx.fillRect(
        this.particles[i].x - backgroundX,
        this.particles[i].y - backgroundY,
        3,
        3
      );
    }
    this.duration -= 1;
    return this.duration;
  }
}
