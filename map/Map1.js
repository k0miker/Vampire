import Map from "../MapHandler.js";

export default class Map1 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =Math.ceil(Math.random()*9) ;
    this.bossCount = 0; 
    this.map = [
      67, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      29, 29, 29, 29, 29, 29, 29, 29, 29, 67, 85, 6, 6, 6, 85, 6, 82, 8, 6, 44,
      44, 6, 6, 6, 44, 6, 44, 6, 8, 44, 8, 6, 6, 6, 6, 105, 67, 44, 6, 85, 6, 6,
      44, 6, 6, 6, 44, 175, 44, 6, 82, 85, 44, 6, 6, 93, 20, 20, 20, 20, 20, 20,
      20, 67, 82, 82, 6, 82, 106, 44, 44, 44, 44, 44, 44, 81, 6, 6, 44, 175, 44,
      6, 17, 95, 96, 96, 96, 96, 96, 96, 6, 6, 6, 6, 6, 6, 61, 62, 63, 64, 65,
      66, 6, 6, 6, 82, 82, 6, 44, 17, 19, 6, 8, 6, 85, 6, 105, 6, 44, 44, 6, 6,
      6, 99, 100, 101, 102, 103, 104, 180, 85, 6, 81, 6, 6, 98, 17, 19, 85, 6,
      6, 6, 6, 105, 85, 6, 6, 6, 85, 6, 137, 138, 139, 140, 141, 142, 250, 6, 6,
      81, 44, 8, 6, 17, 19, 6, 6, 85, 6, 85, 105, 6, 6, 6, 6, 8, 44, 6, 31, 32,
      40, 178, 40, 40, 40, 40, 40, 40, 40, 40, 17, 19, 175, 6, 6, 6, 6, 105, 82,
      6, 6, 6, 44, 106, 6, 174, 211, 40, 211, 44, 178, 81, 44, 44, 44, 44, 44,
      17, 19, 6, 6, 6, 85, 6, 105, 107, 267, 269, 271, 6, 44, 242, 243, 243,
      243, 243, 244, 8, 82, 6, 6, 6, 6, 6, 17, 19, 6, 85, 6, 6, 6, 105, 6, 305,
      307, 309, 251, 6, 280, 125, 125, 164, 125, 125, 82, 6, 6, 85, 175, 44, 44,
      17, 19, 6, 175, 6, 6, 6, 105, 85, 44, 44, 85, 44, 179, 280, 163, 163, 164,
      251, 244, 6, 82, 81, 44, 44, 6, 98, 17, 19, 6, 6, 6, 48, 49, 105, 143,
      143, 143, 143, 143, 143, 318, 319, 319, 319, 319, 320, 143, 143, 143, 143,
      143, 143, 143, 17, 19, 143, 143, 143, 143, 143, 105,
    ];
    this.overlay = [
      0, 9, 0, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 25, 26, 27, 28, 0, 0, 0, 0,
      0, 0, 22, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      9, 0, 0, 0, 0, 60, 59, 0, 8, 0, 0, 0, 0, 0, 47, 0, 0, 0, 9, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 9, 0, 9, 0, 0, 116, 117, 118, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192,
      193, 194, 0, 0, 0, 0, 173, 0, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      9, 0, 0, 0, 267, 231, 271, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
      0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0,
      0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 47, 0, 0, 317, 317, 0, 0, 127,
      317, 0, 0, 0, 0, 0, 0, 60, 59, 0, 0, 0, 0, 10, 11, 12, 0, 0, 0, 0, 0, 0,
      317, 0, 0, 0, 165, 317, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 317, 317, 317, 317, 317, 317, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
