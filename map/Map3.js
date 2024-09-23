import Map from "../MapHandler.js";
import Enemy from "../Enemy.js";

export default class Map3 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =math.ceil(math.random()*8) ;
    this.bossCount = 0;

    this.map = [67, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      67, 263, 225, 44, 85, 6, 44, 8, 44, 6, 263, 225, 44, 263, 263, 6, 263, 225, 225, 263, 6, 263, 225, 263, 7, 44, 7,
      67, 85, 6, 44, 225, 263, 6, 263, 6, 44, 6, 6, 263, 6, 225, 30, 263, 263, 85, 6, 6, 225, 6, 263, 263, 7, 7,
      67, 6, 6, 6, 263, 85, 263, 44, 6, 44, 85, 44, 8, 44, 6, 68, 85, 6, 6, 225, 6, 267, 269, 271, 178, 44, 7,
      67, 6, 225, 225, 6, 44, 6, 263, 85, 6, 44, 225, 263, 225, 85, 6, 44, 263, 263, 263, 205, 305, 307, 309, 225, 44, 7,
      67, 85, 44, 44, 225, 225, 225, 225, 225, 225, 263, 225, 6, 225, 225, 263, 6, 263, 6, 225, 44, 263, 263, 263, 45, 84, 263,
      67, 263, 44, 44, 44, 85, 44, 44, 225, 263, 263, 85, 179, 180, 44, 263, 44, 8, 44, 44, 6, 263, 225, 44, 82, 40, 40,
      67, 6, 85, 120, 263, 6, 263, 225, 263, 6, 44, 263, 40, 40, 40, 40, 40, 40, 82, 44, 46, 44, 225, 225, 144, 263, 7,
      67, 263, 225, 263, 225, 8, 68, 85, 263, 225, 6, 263, 263, 263, 8, 44, 44, 120, 225, 225, 6, 44, 44, 225, 175, 263, 7,
      67, 44, 6, 225, 225, 82, 225, 44, 6, 6, 225, 6, 225, 6, 6, 225, 263, 6, 225, 263, 263, 44, 225, 225, 225, 263, 7,
      67, 44, 263, 225, 85, 78, 263, 6, 263, 263, 85, 225, 263, 8, 225, 263, 44, 175, 225, 225, 6, 6, 6, 225, 44, 225, 7,
      67, 85, 263, 225, 263, 78, 225, 225, 225, 225, 225, 44, 6, 44, 6, 44, 44, 6, 225, 6, 225, 263, 263, 175, 44, 7, 7,
      201, 201, 201, 201, 201, 78, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201];
    this.overlay = [0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 116, 117, 118, 0, 0, 0,
      0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0, 128, 129, 192, 193, 194, 0, 0, 0,
      0, 0, 0, 7, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 167, 0, 0, 209, 0, 0, 0,
      0, 9, 0, 0, 115, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 0, 0, 0, 0, 0, 0, 68, 0,
      0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0,
      0, 47, 0, 9, 0, 0, 0, 0, 9, 0, 9, 0, 0, 9, 0, 47, 0, 0, 0, 9, 9, 0, 0, 0, 0, 9, 0,
      9, 9, 9, 47, 9, 0, 9, 9, 47, 9, 47, 9, 9, 47, 9, 47, 9, 9, 9, 47, 47, 9, 9, 0, 9, 47, 9,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }
}
