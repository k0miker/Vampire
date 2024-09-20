import mapDefinition from "./map/mapDefinition.js";
export default class MapHandler {
  constructor(ctx, map) {
    this.ctx = ctx;
    this.map = map;
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

  drawMap(backgroundX, backgroundY) {
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
          x * this.width - backgroundX,
          y * this.height - backgroundY,
          this.width,
          this.height
        );
      }
    }
    // for (let y = 0; y < this.map.length; y++) {
    //   for (let x = 0; x < this.map[y].length; x++) {
    //     const tileIndex = this.map[y][x];
    //     const tile = this.mapDefinition[tileIndex];

    //     this.ctx.drawImage(
    //       tile.src,
    //       tile.x,
    //       tile.y,
    //       this.tileWidth,
    //       this.tileHeight,
    //       x * this.width - backgroundX,
    //       y * this.height - backgroundY,
    //       this.width,
    //       this.height
    //     );
    //   }
    // }
  }

  // Methode, um ein Tile an einer bestimmten Position zu zeichnen
  drawTile(ctx, xPos, yPos, tileX, tileY) {
    //   console.log(this.image);
    // ctx.drawImage(
    //     this.image,
    //     tileX,tileY,16,16,
    //     xPos,yPos,400,400
    // );
  }
}
