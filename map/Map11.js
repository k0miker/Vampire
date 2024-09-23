import Map from "../MapHandler.js";

export default class Map11 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =Math.ceil(Math.random()*6) ;
    this.bossCount = 0; 
    this.map = [29, 29, 29, 29, 29, 29, 29, 29, 29, 78, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      67, 44, 44, 6, 6, 6, 6, 6, 6, 42, 40, 79, 81, 6, 81, 81, 85, 6, 6, 85, 81, 44, 44, 6, 44, 6, 105,
      67, 44, 85, 109, 110, 111, 110, 110, 114, 6, 6, 78, 6, 6, 44, 81, 44, 81, 6, 6, 44, 6, 6, 81, 6, 81, 105,
      67, 81, 44, 147, 150, 148, 150, 151, 152, 180, 44, 78, 44, 85, 44, 6, 6, 6, 6, 6, 6, 6, 85, 44, 6, 6, 105,
      67, 46, 81, 185, 186, 186, 186, 189, 190, 44, 85, 78, 6, 81, 44, 61, 62, 63, 64, 65, 66, 44, 44, 44, 44, 6, 105,
      67, 81, 6, 115, 85, 81, 81, 81, 6, 6, 6, 78, 6, 44, 81, 99, 100, 101, 102, 103, 104, 6, 46, 81, 85, 6, 105,
      67, 44, 6, 6, 44, 44, 6, 85, 44, 6, 44, 78, 284, 6, 81, 137, 138, 139, 140, 141, 142, 44, 44, 175, 81, 6, 105,
      67, 80, 40, 40, 40, 40, 40, 40, 40, 40, 40, 43, 40, 40, 40, 40, 40, 40, 40, 40, 85, 44, 81, 44, 6, 44, 105,
      67, 78, 85, 81, 6, 85, 6, 6, 44, 44, 44, 6, 253, 85, 6, 81, 211, 81, 211, 44, 106, 81, 44, 6, 81, 6, 105,
      40, 41, 81, 81, 6, 81, 44, 44, 44, 81, 85, 44, 44, 81, 6, 44, 0, 44, 0, 85, 81, 81, 81, 44, 81, 81, 105,
      67, 251, 44, 81, 85, 6, 6, 85, 44, 81, 81, 6, 120, 6, 85, 6, 81, 85, 6, 81, 6, 81, 85, 81, 85, 6, 105,
      67, 44, 46, 81, 44, 44, 44, 81, 44, 6, 175, 81, 44, 44, 44, 6, 44, 68, 175, 6, 6, 85, 44, 81, 81, 44, 105,
      143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 105];
    this.overlay = [0, 0, 0, 33, 34, 35, 36, 37, 38, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 7, 71, 113, 73, 74, 75, 76, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 208, 0, 0, 23, 24, 25, 26, 27, 28, 0, 0, 0, 9, 0, 0,
      0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 247, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0,
      0, 0, 9, 0, 30, 0, 0, 9, 0, 0, 0, 209, 246, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0,
      0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0,
      0, 0, 47, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 47, 0, 0, 173, 0, 173, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 9, 0, 9, 0, 0,
      0, 213, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 7, 0, 0, 9, 0, 0, 0, 9, 47, 0, 47, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
