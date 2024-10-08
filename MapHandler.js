import mapDefinition from "./map/mapDefinition.js";
import mapArray from "./map/mapArray.js";
import Vendor from "./Vendor.js";
export default class MapHandler {
  constructor(ctx, map, overlay, currentMap, player) {
    this.ctx = ctx;
    this.map = map;
    this.overlay = overlay;
    this.mapDefinition = mapDefinition;
    this.width = 64; // px auf dem monitor für ein tile
    this.height = 64;
    this.image = new Image();
    this.image.src = "./assets/tileset.png";
    this.tileWidth = 16;
    this.tileHeight = 16;
    // this.gap = 1;
    this.tiles = [];
    this.obstacles = [];
    this.vendor;
    this.currentMap = currentMap;
    this.frameCount = 0;
    this.frameTime = 0;
    this.player = player;
  }

  init() {
    if (this.currentMap.weaponSpawn) {
      if (this.player.weapons.includes(this.currentMap.weaponSpawn.number))
        this.currentMap.weaponSpawn = undefined;
    }
    // console.log(this.map);
    this.obstacles = [];
    this.vendorPosition = {};
    for (let y = 0; y < 13; y++) {
      for (let x = 0; x < 27; x++) {
        const tileIndex = this.map[x + y * 27];
        const tile = this.mapDefinition[tileIndex];
        if (!tile.pass) {
          this.obstacles.push({
            x: x * this.width,
            y: y * this.height,
            width: this.width,
            height: this.height,
          });
        }
        if (tileIndex === 228) {
          this.vendorPosition = {
            x: x * this.width,
            y: y * this.height,
            width: this.width,
            height: this.height,
          };
          this.vendor = new Vendor(this.ctx);
        }
      }
    }
  }

  drawMap() {
    for (let y = 0; y < 13; y++) {
      for (let x = 0; x < 27; x++) {
        const tileIndex = this.map[x + y * 27];
        const tile = this.mapDefinition[tileIndex];

        // toDO vendor animieren

        this.ctx.drawImage(
          tile.src,
          tile.x,
          tile.y,
          this.tileWidth,
          this.tileHeight,
          x * this.width,
          y * this.height,
          this.width,
          this.height
        );
        if (tileIndex === 228) {
          this.vendor.draw(x, y);
        }
      }
    }
  }

  drawOverlay() {
    this.frameTime++;
    if (this.frameTime > 10) {
      this.frameTime = 0;
      this.frameCount++;
      if (this.frameCount > 3) this.frameCount = 0;
    }

    if (this.currentMap.weaponSpawn) {
      this.ctx.drawImage(
        this.image,
        17,
        weapons[this.currentMap.weaponSpawn.number].indexYPos,
        16,
        16,
        this.currentMap.weaponSpawn.x,
        this.currentMap.weaponSpawn.y + this.frameCount * 2,
        64,
        64
      );
    }
    // console.log(this.currentMap.weaponSpawn);
    for (let y = 0; y < 13; y++) {
      for (let x = 0; x < 27; x++) {
        const tileIndex = this.overlay[x + y * 27];
        const tile = this.mapDefinition[tileIndex];

        this.ctx.drawImage(
          tile.src,
          tile.x,
          tile.y,
          this.tileWidth,
          this.tileHeight,
          x * this.width,
          y * this.height,
          this.width,
          this.height
        );
      }
    }
  }

  drawMiniMap(x = 0, y = 2) {
    const miniMapWidth = 200;
    const miniMapHeight = 100;
    const miniMapX = 1525; // 10px Abstand vom rechten Rand
    const miniMapY = 0; // 10px Abstand vom oberen Rand

    // Zeichne den Hintergrund der Minimap
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.fillRect(miniMapX, miniMapY, miniMapWidth, miniMapHeight);

    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    this.ctx.strokeRect(miniMapX, miniMapY, miniMapWidth, miniMapHeight);

    // Finde die Position der aktuellen Karte im mapArray
    let mapPosX = x;
    let mapPosY = y;
    // console.log(mapPosX, mapPosY);

    // Zeichne die Position der aktuellen Karte auf der Minimap
    const cellWidth = miniMapWidth / (mapArray[0].length * 4);
    const cellHeight = miniMapHeight / (mapArray.length * 4);

    for (let i = 0; i < mapArray.length; i++) {
      for (let j = 0; j < mapArray[i].length; j++) {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        this.ctx.fillRect(
          miniMapX + j * cellWidth * 4,
          miniMapY + i * cellHeight * 4,
          cellWidth * 4,
          cellHeight * 4
        );
        this.ctx.strokeStyle = "rgba(255, 255,255, 0.1)";
        this.ctx.strokeRect(
          miniMapX + j * cellWidth * 4,
          miniMapY + i * cellHeight * 4,
          cellWidth * 4,
          cellHeight * 4
        );
      }
    }

    this.ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
    this.ctx.fillText(
      "B",
      miniMapX + 3 * cellWidth * 4 + 20,
      miniMapY + 1 * cellHeight * 3.8
    );
    this.ctx.fillStyle = "rgba(0, 255, 0, 0.9)";
    this.ctx.fillText(
      "S",
      miniMapX + mapPosX * cellWidth * 4 + 20,
      miniMapY + (mapPosY + 1) * cellHeight * 3.8
    );
    this.ctx.fillStyle = "rgba(150, 150, 255, 0.9)";
    this.ctx.fillText(
      "V",
      miniMapX + 1 * cellWidth * 4 + 20,
      miniMapY + 1 * cellHeight * 3.8
    );
    this.ctx.fillStyle = "rgba(255, 255, 0, 0.9)";
    this.ctx.fillText(
      "W",
      miniMapX + 3 * cellWidth * 4 + 20,
      miniMapY + 4 * cellHeight * 3.8
    );
  }
}
