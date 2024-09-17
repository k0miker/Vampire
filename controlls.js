
import game from "./game2.js";
export default class Controls {
    constructor(game) {
      this.game = game;
      this.initEventListeners();
    }
  
    initEventListeners() {
      window.addEventListener("mousemove", this.mousemoveHandler.bind(this));
      document.addEventListener("keydown", this.keyDownHandler.bind(this));
      document.addEventListener("keyup", this.keyUpHandler.bind(this));
      document.addEventListener("click", this.clickHandler.bind(this));
      window.onresize = this.resizeHandler.bind(this);
    }
  
    mousemoveHandler(e) {
      this.game.mouseX = e.clientX;
      this.game.mouseY = e.clientY;
    }
  
    keyUpHandler(e) {
      if (e.code === "KeyW" || e.code === "KeyS") {
        this.game.player.vy = 0;
      }
      if (e.code === "KeyA" || e.code === "KeyD") {
        this.game.player.vx = 0;
      }
    }
  
    keyDownHandler(e) {
      if (e.code === "KeyW") {
        this.game.player.vy = -8;
      }
      if (e.code === "KeyS") {
        this.game.player.vy = 8;
      }
      if (e.code === "KeyA") {
        this.game.player.vx = -8;
      }
      if (e.code === "KeyD") {
        this.game.player.vx = 8;
      }
    }
  
    resizeHandler() {
      this.game.player.x = window.innerWidth / 2 - this.game.player.width / 2;
      this.game.player.y = window.innerHeight / 2 - this.game.player.height / 2;
    }
  
    clickHandler(e) {
      let dx = this.game.player.x + this.game.player.width / 2 - this.game.mouseX;
      let dy = this.game.player.y + this.game.player.height / 2 - this.game.mouseY;
      let dist = Math.sqrt(dx * dx + dy * dy);
  
      const bullet = new Bullet(
        this.game.player.x + this.game.backgroundX + this.game.player.width / 2,
        this.game.player.y + this.game.backgroundY + this.game.player.height / 2,
        (dx / dist) * -15,
        (dy / dist) * -15,
        25,
        this.game.ctx
      );
  
      this.game.bullets.push(bullet);
    }
  }