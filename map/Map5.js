import Map from "../MapHandler.js";

export default class Map2 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz



    this.map = [67, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 17, 19, 29, 29, 29, 29, 29, 105,
      67, 46, 44, 8, 6, 85, 82, 85, 82, 6, 81, 85, 6, 81, 81, 85, 179, 6, 177, 17, 57, 20, 20, 131, 172, 82, 105,
      67, 82, 85, 46, 82, 6, 6, 6, 85, 6, 6, 6, 6, 82, 6, 44, 31, 32, 82, 55, 96, 96, 96, 169, 172, 44, 105,
      67, 120, 44, 82, 158, 197, 199, 162, 8, 81, 81, 44, 44, 85, 82, 82, 44, 6, 44, 85, 6, 98, 8, 6, 81, 81, 105,
      67, 44, 85, 44, 234, 235, 237, 238, 107, 44, 46, 85, 44, 44, 6, 8, 82, 82, 6, 44, 82, 44, 81, 82, 44, 6, 105,
      67, 82, 44, 8, 267, 273, 275, 271, 107, 107, 180, 44, 82, 82, 44, 6, 6, 44, 144, 82, 44, 6, 6, 44, 6, 82, 105,
      67, 85, 115, 8, 305, 311, 313, 309, 6, 251, 134, 85, 8, 81, 6, 6, 82, 85, 81, 6, 6, 6, 6, 6, 44, 8, 105,
      67, 175, 44, 82, 115, 40, 40, 40, 40, 40, 43, 79, 82, 82, 81, 6, 6, 6, 44, 82, 6, 82, 44, 82, 8, 82, 105,
      67, 6, 6, 44, 85, 178, 82, 144, 85, 85, 44, 78, 82, 85, 82, 6, 44, 44, 6, 44, 6, 6, 85, 82, 295, 219, 105,
      67, 85, 85, 6, 8, 44, 85, 6, 46, 82, 175, 78, 6, 81, 175, 82, 44, 6, 144, 44, 6, 44, 82, 295, 262, 261, 220,
      67, 85, 44, 44, 44, 44, 44, 44, 44, 44, 44, 42, 40, 40, 40, 79, 81, 81, 44, 44, 6, 81, 82, 258, 261, 261, 220,
      67, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 78, 44, 44, 44, 82, 81, 175, 81, 258, 261, 223, 220,
      67, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 78, 201, 201, 201, 29, 29, 29, 85, 221, 257, 257, 296];

      this.overlay =[0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0,
        0, 0, 47, 0, 0, 121, 123, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 9, 0, 60, 59, 0, 0, 0, 0,
        0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 47, 0, 0, 9, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 9, 0, 0, 0, 47, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
        0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 9, 0, 9, 0, 9, 0, 0, 9, 0, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 9, 9, 47, 9, 47, 9, 47, 9, 9, 47, 9, 47, 9, 47, 0, 9, 9, 9, 0, 0, 0, 9, 0, 9, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0];



    
// console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
