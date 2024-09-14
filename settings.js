export default class Settings {
    constructor(diff,spawnTime, fps, pSpeed, eSpeed, pHealth, eHealth, pDmg, eDmg) {
        this.difficulty = diff;
        this.spawnTime = spawnTime;
        this.fps = fps;
        this.playerSpeed = pSpeed;
        this.enemySpeed = eSpeed + this.difficulty/2 ;
        this.playerHealth = pHealth - this.difficulty * 10;
        this.enemyHealth = eHealth *this.difficulty;
        this.playerDamage = pDmg *this.difficulty;
        this.enemyDamage = eDmg *this.difficulty;


    }
}