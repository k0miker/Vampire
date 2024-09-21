import Map from "../MapHandler.js";

export default class Map1 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
 


    this.map = [85, 85, 85, 85, 85, 47, 85, 47, 85, 85, 85, 47, 85, 47, 85, 78, 85, 47, 85, 29, 29, 29, 29, 29, 29, 29, 259,
      67, 44, 6, 6, 6, 85, 82, 85, 44, 82, 44, 85, 6, 85, 82, 78, 253, 85, 44, 44, 44, 82, 44, 6, 6, 82, 105,
      67, 153, 192, 193, 194, 119, 81, 6, 6, 6, 8, 81, 81, 82, 6, 78, 82, 44, 44, 82, 81, 44, 81, 8, 44, 44, 105,
      67, 229, 230, 269, 232, 233, 82, 82, 6, 81, 81, 206, 6, 8, 81, 42, 40, 40, 40, 40, 79, 85, 81, 82, 44, 44, 105,
      67, 305, 306, 307, 308, 309, 6, 44, 205, 6, 82, 82, 44, 81, 6, 82, 175, 82, 44, 85, 78, 81, 81, 82, 85, 82, 105,
      67, 6, 6, 6, 81, 6, 6, 115, 81, 6, 81, 44, 6, 82, 6, 44, 81, 81, 6, 82, 78, 44, 144, 82, 6, 82, 105,
      67, 6, 6, 6, 44, 85, 115, 115, 6, 44, 44, 242, 8, 82, 165, 243, 244, 80, 40, 40, 41, 81, 6, 82, 44, 8, 105,
      67, 6, 115, 82, 44, 81, 44, 82, 6, 6, 44, 204, 125, 125, 125, 125, 282, 78, 251, 44, 85, 6, 175, 85, 44, 44, 105,
      67, 6, 115, 44, 40, 40, 40, 79, 98, 6, 44, 204, 125, 125, 125, 125, 282, 78, 82, 6, 44, 44, 6, 44, 82, 6, 105,
      67, 6, 6, 82, 6, 178, 6, 42, 40, 40, 79, 318, 319, 281, 281, 319, 320, 78, 81, 85, 180, 82, 175, 6, 6, 44, 105,
      67, 6, 81, 8, 6, 6, 31, 32, 6, 6, 42, 40, 40, 40, 40, 40, 40, 3, 81, 82, 81, 81, 82, 44, 85, 82, 105,
      67, 81, 6, 6, 44, 44, 82, 30, 81, 81, 6, 81, 44, 44, 82, 82, 44, 78, 44, 175, 6, 82, 81, 82, 44, 44, 105,
      143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 78, 143, 143, 143, 143, 143, 143, 143, 143, 296]
    ;
    this.overlay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 116, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 128, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 47, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 9, 0, 0,
      0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 0, 47, 0, 0, 9, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 60, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
