import Map from "../MapHandler.js";

export default class Map6 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =math.ceil(math.random()*) 6;
    this.bossCount = 0; 
    this.map = [
      29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 17, 19, 29, 29, 29, 29, 29,
      29, 29, 29, 29, 29, 29, 29, 29, 29, 44, 225, 225, 263, 6, 85, 6, 6, 81,
      44, 263, 17, 57, 131, 7, 6, 6, 81, 225, 44, 81, 81, 81, 263, 44, 225, 105,
      6, 81, 85, 81, 6, 6, 6, 6, 6, 225, 263, 17, 18, 19, 6, 6, 6, 6, 6, 6, 6,
      6, 6, 6, 6, 6, 105, 225, 225, 263, 81, 147, 149, 150, 151, 152, 180, 98,
      17, 18, 19, 81, 147, 149, 150, 151, 152, 225, 149, 150, 151, 150, 152,
      105, 263, 6, 81, 263, 185, 187, 186, 189, 190, 81, 6, 17, 18, 19, 6, 185,
      187, 186, 189, 190, 225, 187, 186, 189, 186, 190, 105, 263, 6, 225, 263,
      263, 6, 263, 6, 225, 263, 6, 17, 18, 19, 263, 81, 225, 250, 81, 251, 6, 6,
      6, 6, 81, 225, 105, 263, 6, 6, 6, 6, 251, 115, 263, 263, 263, 225, 17, 18,
      19, 263, 85, 81, 263, 179, 81, 147, 150, 149, 152, 251, 179, 105, 263,
      147, 150, 149, 152, 250, 6, 225, 225, 81, 81, 17, 18, 19, 81, 81, 263,
      263, 81, 81, 185, 186, 187, 190, 225, 263, 105, 6, 185, 186, 187, 190, 6,
      263, 81, 44, 263, 98, 17, 18, 57, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      20, 20, 20, 303, 219, 259, 6, 295, 219, 259, 225, 263, 81, 6, 17, 56, 58,
      58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 300, 224, 303, 259,
      262, 294, 303, 259, 31, 32, 263, 55, 96, 96, 96, 96, 96, 96, 96, 96, 96,
      96, 96, 96, 96, 96, 96, 296, 221, 257, 224, 294, 223, 261, 220, 85, 81, 6,
      263, 85, 81, 6, 6, 98, 225, 6, 225, 44, 225, 44, 98, 263, 263, 105, 85, 6,
      85, 221, 257, 257, 257, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143,
      143, 143, 143, 143, 143, 143, 143, 143, 143, 143,
    ];
    this.overlay = [
      0, 0, 9, 0, 0, 47, 47, 0, 0, 0, 22, 0, 0, 0, 0, 0, 33, 35, 37, 38, 0, 33,
      35, 36, 37, 38, 0, 67, 0, 47, 0, 33, 34, 34, 34, 38, 0, 60, 59, 0, 214, 0,
      33, 71, 73, 75, 76, 0, 71, 73, 74, 75, 76, 0, 67, 0, 0, 0, 109, 111, 110,
      113, 114, 0, 60, 21, 0, 252, 0, 109, 110, 110, 110, 114, 0, 109, 110, 111,
      110, 114, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 201, 67, 0, 0, 33, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
      0, 0, 0, 176, 33, 35, 37, 38, 0, 0, 0, 67, 33, 38, 71, 76, 176, 0, 0, 0,
      0, 22, 0, 0, 0, 0, 47, 0, 0, 0, 0, 109, 110, 111, 114, 176, 0, 0, 67, 109,
      111, 111, 114, 0, 0, 0, 0, 0, 60, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 201, 67, 0, 0, 0, 0, 0, 0, 0, 178, 0, 60, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      22, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 303, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0,
      9, 0, 0, 0, 60, 59, 0, 0, 0, 0, 0, 60, 59, 0, 0, 0, 9, 0, 0, 0, 298, 222,
      0, 0, 0, 0, 0, 47, 0, 0, 0, 60, 21, 0, 0, 0, 0, 0, 60, 21, 0, 0, 9, 47, 9,
      0, 0, 0, 0, 0, 0, 178, 9, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 47, 0, 0, 0, 0, 47, 0, 0, 0,
      0, 0, 0, 0,
    ];

    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
