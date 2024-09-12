export default class Projectile {
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.velocity = velocity;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}