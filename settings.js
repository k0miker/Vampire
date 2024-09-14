export default class Settings {
    constructor(diff, fps, pSpeed, eSpeed, pHealth, eHealth, pDmg, eDmg) {
        this.difficulty = diff;
        this.fps = fps;
        this.playerSpeed = pSpeed;
        this.enemySpeed = eSpeed;
        this.playerHealth = pHealth;
        this.enemyHealth = eHealth;
        this.playerDamage = pDmg;
        this.enemyDamage = eDmg;

    }
}