export default class Hud {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/tileset.png";
  }
  draw(enemies, player) {
    this.ctx.fillStyle = "rgba(255, 0, 0, 1)";
    this.ctx.fillRect(20, 20, player.health, 28);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3";
    this.ctx.fillRect(0, 0, 1525, 62);
    this.ctx.drawImage(
      this.img,
      17,
      player.weapons[player.weapon].indexYPos,
      16,
      16,
      400,
      -10,
      96,
      64
    );
    for (let i = 0; i < player.weapons[player.weapon].bullets; i++) {
      this.ctx.drawImage(this.img, 68, 194, 16, 16, 500 + i * 20, 10, 64, 64);
    }
    this.ctx.font = "32px pixel";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `        HP: ${player.health}             ${Math.ceil(
        this.score
      )} $                                                            ${enemies} Zombies                           R for reload${
        player.weapons[player.weapon].reloading
          ? "   0." + player.reloadTimer.toFixed(0) + " Sekunden"      
          : "" }`,
      10,
      40
    );
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.fillRect(0,62, 280,32);
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `invinsible timer: ${player.invinsibleTimer}`,
      20,
      81
    );
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3";
    this.ctx.fillRect(515, 22, player.reloadTimer / 2, 16);
    this.ctx.fillRect(1525,100,200,50);
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    this.ctx.strokeRect(1525,100,200,50);
    this.ctx.font = "12px mono";
    this.ctx.fontWeight = "100";
    this.ctx.fillStyle = "green";
    this.ctx.fillText(`"grünes X" = Spieler`, 1530, 120,200);
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`"rotes X" = Boss`, 1530, 140,200);
  }
}
