import mapDefinition from "./map/mapDefinition.js";
export default class MapHandler {
  constructor(ctx, map,overlay) {
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
  }

  init() {
    console.log(this.map);
    this.obstacles = [];
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
          // for (let y = 0; y < this.map.length; y++) {
          //   for (let x = 0; x < this.map[y].length; x++) {
          //     const tileIndex = this.map[y][x];
          //     const tile = this.mapDefinition[tileIndex];
          //     if (!tile.pass) {
          //       this.obstacles.push({
          //         x: x * this.width,
          //         y: y * this.height,
          //         width: this.width,
          //         height: this.height,
          //       });
        }
      }
    }
  }

  drawMap() {
    for (let y = 0; y < 13; y++) {
      for (let x = 0; x < 27; x++) {
        const tileIndex = this.map[x + y * 27];
        const tile = this.mapDefinition[tileIndex];

        this.ctx.drawImage(
          tile.src,
          tile.x,
          tile.y,
          this.tileWidth,
          this.tileHeight,
          x * this.width ,
          y * this.height ,
          this.width,
          this.height
        );
      }
    }
    
  }

drawOverlay(){for (let y = 0; y < 13; y++) {
  for (let x = 0; x < 27; x++) {
    const tileIndex = this.overlay[x + y * 27];
    const tile = this.mapDefinition[tileIndex];

    this.ctx.drawImage(
      tile.src,
      tile.x,
      tile.y,
      this.tileWidth,
      this.tileHeight,
      x * this.width ,
      y * this.height ,
      this.width,
      this.height
    );
  }
}}
}
