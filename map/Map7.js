import Map from "../MapHandler.js";

export default class Map7 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =math.ceil(math.random()*7) ;
    this.bossCount = 0; 
    this.map = [67, 44, 225, 225, 85, 78, 47, 85, 46, 85, 85, 46, 85, 85, 85, 85, 85, 44, 85, 6, 6, 85, 6, 44, 6, 85, 6,
      67, 85, 81, 85, 81, 42, 40, 40, 40, 40, 40, 40, 40, 40, 79, 125, 163, 85, 44, 85, 85, 44, 85, 85, 44, 6, 44,
      67, 6, 85, 263, 68, 0, 0, 0, 0, 0, 6, 6, 6, 85, 78, 126, 125, 44, 85, 44, 44, 6, 44, 6, 85, 6, 85,
      67, 106, 6, 81, 263, 147, 149, 150, 151, 152, 115, 6, 175, 6, 78, 6, 6, 165, 6, 6, 6, 44, 44, 44, 6, 45, 84,
      67, 44, 6, 225, 263, 185, 187, 186, 189, 190, 144, 6, 6, 6, 78, 125, 125, 125, 6, 6, 44, 47, 6, 44, 6, 177, 31,
      67, 44, 6, 6, 6, 6, 251, 115, 42, 40, 40, 40, 4, 40, 41, 267, 269, 271, 225, 179, 6, 85, 6, 47, 81, 31, 32,
      67, 6, 147, 150, 149, 152, 250, 6, 225, 225, 85, 6, 78, 6, 6, 305, 307, 309, 85, 81, 6, 6, 6, 6, 6, 44, 105,
      67, 44, 185, 186, 187, 190, 6, 263, 30, 44, 6, 6, 78, 85, 175, 6, 44, 225, 263, 81, 147, 149, 150, 151, 152, 6, 105,
      20, 20, 20, 20, 20, 20, 20, 20, 20, 131, 172, 6, 78, 6, 6, 44, 175, 6, 175, 263, 185, 187, 186, 189, 190, 80, 40,
      58, 58, 58, 58, 58, 58, 58, 58, 132, 19, 40, 40, 43, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 105,
      96, 96, 96, 96, 96, 96, 96, 96, 133, 19, 172, 44, 44, 44, 85, 44, 44, 147, 150, 149, 152, 251, 115, 115, 115, 6, 105,
      6, 98, 6, 6, 6, 98, 6, 85, 17, 19, 6, 6, 44, 6, 44, 44, 44, 185, 186, 187, 190, 250, 115, 115, 115, 6, 105,
      143, 143, 143, 143, 143, 143, 143, 143, 17, 19, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143];
   
    this.overlay =[0, 47, 9, 47, 0, 0, 0, 0, 0, 0, 47, 0, 47, 9, 0, 0, 0, 47, 9, 47, 47, 0, 47, 47, 9, 0, 47,
      0, 0, 47, 0, 0, 33, 34, 34, 34, 38, 0, 0, 0, 47, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 47, 0, 47,
      0, 0, 0, 0, 0, 109, 111, 110, 113, 114, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 33, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 117, 118, 0, 0, 0, 9, 0, 0, 0, 0, 0,
      0, 0, 33, 38, 71, 76, 176, 0, 0, 0, 9, 0, 0, 0, 0, 192, 193, 194, 9, 0, 0, 0, 0, 9, 0, 0, 0,
      0, 0, 109, 111, 111, 114, 0, 0, 0, 0, 47, 0, 0, 9, 0, 0, 0, 0, 47, 0, 33, 34, 34, 34, 38, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 70, 0, 0, 109, 111, 110, 113, 114, 228, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 38, 0, 0, 0, 0, 266, 0,
      0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 33, 38, 71, 76, 0, 0, 0, 0, 0, 0,
      0, 60, 59, 0, 0, 60, 59, 9, 0, 0, 0, 0, 0, 0, 47, 0, 0, 109, 111, 111, 114, 176, 0, 0, 0, 0, 0,
      0, 60, 21, 0, 0, 60, 21, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
