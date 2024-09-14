export default class Settings {
    constructor(diff,spawnTime, fps, pSpeed, eSpeed, pHealth, eHealth, pDmg, eDmg) {
        this.difficulty = diff;
        this.spawnTime = spawnTime;
        this.fps = fps;
        this.playerSpeed = pSpeed;
        this.enemySpeed = eSpeed;
        this.playerHealth = pHealth;
        this.enemyHealth = eHealth;
        this.playerDamage = pDmg;
        this.enemyDamage = eDmg;

    }
}