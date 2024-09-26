import Map from "../MapHandler.js";

export default class Map14 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =Math.ceil(Math.random()*9) ;
    this.bossCount = 0; 
    //////////VORLÄUFIGE MAPDATEN////////////////
    this.map = [29, 29, 29, 29, 17, 19, 85, 47, 47, 85, 85, 47, 85, 47, 85, 85, 85, 85, 47, 85, 85, 85, 47, 47, 47, 85, 47,
      67, 175, 6, 6, 17, 19, 6, 85, 85, 263, 6, 85, 225, 85, 225, 225, 263, 6, 85, 6, 263, 6, 85, 85, 85, 6, 85,
      67, 175, 175, 263, 17, 19, 6, 40, 40, 40, 40, 40, 40, 40, 40, 40, 79, 6, 82, 6, 6, 263, 263, 6, 225, 225, 46,
      67, 225, 263, 6, 55, 169, 6, 225, 6, 225, 6, 225, 225, 225, 225, 85, 78, 263, 225, 263, 85, 263, 6, 263, 6, 45, 84,
      67, 263, 6, 6, 263, 82, 225, 115, 147, 151, 150, 152, 225, 85, 82, 6, 42, 40, 40, 40, 40, 40, 4, 40, 40, 40, 40,
      67, 6, 85, 81, 225, 6, 225, 6, 185, 189, 186, 190, 263, 225, 263, 263, 6, 6, 225, 225, 6, 263, 78, 85, 263, 263, 105,
      67, 225, 6, 44, 82, 44, 44, 44, 82, 44, 44, 44, 263, 6, 225, 263, 225, 263, 263, 225, 225, 225, 78, 6, 263, 85, 105,
      40, 40, 79, 280, 125, 164, 163, 163, 164, 125, 282, 6, 225, 6, 225, 229, 235, 236, 236, 236, 237, 233, 78, 263, 115, 225, 105,
      67, 85, 78, 280, 125, 164, 163, 125, 163, 125, 282, 225, 6, 82, 13, 267, 268, 231, 269, 270, 270, 271, 78, 263, 82, 263, 105,
      67, 263, 78, 280, 164, 125, 164, 125, 164, 251, 282, 85, 263, 68, 54, 305, 306, 306, 307, 308, 308, 309, 78, 6, 175, 263, 105,
      67, 225, 78, 318, 319, 319, 319, 319, 319, 319, 320, 225, 263, 82, 6, 85, 6, 106, 225, 225, 6, 263, 78, 263, 6, 6, 105,
      67, 82, 42, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 225, 225, 106, 105,
      143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143, 143];
    this.overlay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 33, 34, 34, 38, 0, 7, 0, 47, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 134, 134, 0, 0, 109, 110, 111, 114, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0,
      0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 117, 118, 0, 0, 0, 47, 0, 7, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 192, 193, 194, 157, 0, 0, 0, 0, 47, 0,
      0, 7, 0, 242, 243, 244, 0, 242, 243, 243, 244, 0, 0, 0, 0, 153, 192, 193, 193, 193, 194, 119, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 47, 0, 0, 0, 7, 0, 0, 0, 0, 231, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
