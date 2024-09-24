export default class Bloodsplosion {
  constructor(x, y, vx, vy, count, color = "#bb0000") {
    this.color = color;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + vx,
        y: y + vy,
        vx: (vx + (Math.random() * 4 - 4)) * 0.5,
        vy: (vy + (Math.random() * 4 - 4)) * 0.5,
      });
    }
    this.duration = 30;
  }
  update(ctx) {
    ctx.fillStyle = this.color;
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].x += this.particles[i].vx / 2;
      this.particles[i].y += this.particles[i].vy / 2;
      ctx.fillRect(this.particles[i].x, this.particles[i].y, 5, 5);
    }
    this.duration -= 1;
    return this.duration;
  }
}
