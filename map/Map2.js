import Map from "../MapHandler.js";

export default class Map2 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount = 15;
    this.map = [
      29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      29, 29, 29, 29, 29, 29, 29, 29, 105, 67, 225, 6, 85, 6, 263, 6, 263, 71,
      73, 74, 75, 76, 0, 8, 0, 30, 225, 225, 225, 71, 73, 74, 75, 72, 76, 105,
      20, 20, 20, 20, 20, 20, 20, 131, 109, 110, 111, 110, 114, 0, 6, 6, 6, 8,
      6, 85, 109, 110, 110, 110, 113, 114, 105, 96, 96, 96, 96, 96, 96, 133, 19,
      147, 149, 150, 151, 152, 0, 71, 73, 74, 75, 76, 225, 147, 149, 150, 151,
      150, 152, 105, 67, 98, 225, 6, 225, 253, 17, 19, 185, 187, 186, 189, 190,
      0, 109, 111, 110, 110, 114, 225, 185, 187, 186, 189, 186, 190, 105, 67,
      263, 263, 6, 85, 6, 17, 19, 225, 225, 301, 302, 225, 6, 147, 149, 150,
      151, 152, 226, 227, 228, 225, 6, 44, 263, 105, 67, 6, 6, 44, 6, 6, 17, 19,
      30, 144, 8, 263, 250, 6, 185, 187, 186, 189, 190, 264, 265, 266, 93, 20,
      20, 131, 105, 67, 85, 263, 8, 6, 225, 17, 57, 20, 20, 20, 20, 20, 20, 20,
      20, 20, 20, 20, 20, 20, 20, 171, 95, 133, 19, 105, 67, 6, 6, 6, 302, 6,
      55, 96, 96, 96, 96, 133, 95, 96, 96, 96, 96, 96, 96, 96, 96, 96, 133, 57,
      171, 19, 105, 67, 8, 263, 225, 6, 225, 44, 284, 225, 6, 6, 17, 19, 263,
      284, 301, 6, 81, 98, 6, 301, 85, 109, 110, 111, 114, 105, 67, 6, 225, 44,
      225, 6, 225, 263, 225, 301, 8, 17, 19, 6, 6, 6, 44, 81, 144, 6, 6, 6, 147,
      150, 149, 152, 105, 67, 8, 225, 85, 263, 8, 263, 225, 8, 6, 8, 17, 19, 44,
      44, 44, 44, 31, 32, 44, 44, 68, 185, 186, 187, 190, 105, 67, 143, 143,
      143, 143, 143, 143, 143, 143, 143, 143, 17, 19, 47, 47, 47, 47, 47, 178,
      47, 47, 47, 85, 45, 84, 85, 105,
    ];
    this.overlay = [
      0, 0, 0, 47, 0, 0, 0, 0, 33, 35, 36, 37, 38, 0, 0, 0, 0, 0, 0, 47, 33, 35,
      36, 37, 34, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
      35, 36, 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 59, 0, 0, 0, 0, 0, 69, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 21, 0, 9, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 0, 0, 9,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 202, 0, 0, 0, 0, 0, 208, 0, 0, 0, 0, 0, 0, 208, 0, 0, 0, 22, 0, 0, 0,
      33, 35, 37, 38, 0, 0, 0, 0, 0, 0, 0, 247, 246, 0, 0, 0, 0, 0, 247, 246, 0,
      0, 0, 60, 59, 0, 9, 71, 73, 75, 76, 0, 0, 0, 0, 9, 0, 0, 209, 0, 0, 0, 0,
      0, 0, 209, 0, 0, 0, 0, 98, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 9, 0, 0, 9, 0, 0, 0, 0, 202,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 47, 9, 202, 202, 9, 47, 9, 47, 0, 0, 47,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0,
    ];

    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
