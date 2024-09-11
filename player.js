export default class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 100; // Stellen Sie sicher, dass diese Werte korrekt sind
        this.height = 100; 
        this.speed = 5;
        this.image = new Image();
        this.health = 100;
        this.weaponType = "default";
        this.isAlive = true;
        this.playerImage = "./assets/player_9mm.png";
    }
    
    init() {
        this.image.src = this.playerImage;
        this.image.onload = () => {
            console.log("Spielerbild erfolgreich geladen.");
        };
        this.image.onerror = (err) => {
            console.error("Fehler beim Laden des Spielerbildes:", err);
        };
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
                case "assaultRifle":
                    damage = 10;
                    break;
                case "deagle":
                    damage = 7;
                    break;
                case "magic":
                    damage = 12;
                    break;
                case "pistol":
                    damage = 5;
            }
            target.takeDamage(damage);
        }
    }
}