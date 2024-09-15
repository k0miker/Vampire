export default class Bloodsplosion {
  constructor(x, y, vx, vy, count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + vx,
        y: y + vy,
        vx: vx + (Math.random() * 8 - 4),
        vy: vy + (Math.random() * 8 - 4),
      });
    }
    this.duration = 30;
  }
  update(ctx) {
    ctx.fillStyle = "#bb0000";
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].x += this.particles[i].vx / 2;
      this.particles[i].y += this.particles[i].vy / 2;
      ctx.fillRect(this.particles[i].x, this.particles[i].y, 8, 8);
    }
    this.duration -= 1;
    return this.duration;
  }
}
