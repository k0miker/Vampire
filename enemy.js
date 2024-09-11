export default class Enemy {
    constructor(x, y, w, h, speed, enemy, hp, imageSrc, weaponType) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = speed + Math.random() * 3;
        this.image = new Image();
        this.image.src = imageSrc;
        this.enemy = enemy;
        this.health = hp; 
        this.isAlive = true; 
        this.weaponType = weaponType; 
    }

    update() {
        if (this.isAlive) {
            let dx = window.innerWidth / 2 - (this.x + this.width / 2);
            let dy = window.innerHeight / 2 - (this.y + this.height / 2);
            let dist = Math.sqrt(dx * dx + dy * dy);
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }
    }

    draw(ctx) {
        if (this.isAlive) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    takeDamage(damage) {
        if (this.isAlive) {
            this.health -= damage;
            if (this.health <= 0) {
                this.isAlive = false;
            }
        }
    }

    attack(target) {
        if (this.isAlive) {
            let damage;
            switch (this.weaponType) {
                case 'assaultRifle':
                    damage = 10;
                    break;
                case 'deagle':
                    damage = 7;
                    break;
                case 'magic':
                    damage = 12;
                    break;
                default:
                    damage = 5;
            }
            target.takeDamage(damage);
        }
    }
}