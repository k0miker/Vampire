import Map from "../MapHandler.js";

export default class Map2 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz



    this.map = [
      [41, 45, 45, 45, 45, 45, 45, 40, 13, 46, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 41, 45, 45, 41],

      [40, 11,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11, 37],

      [40,  0,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11, 11,  5,  5, 19, 17, 11,  5, 11, 11,  5,  5, 37],

      [40, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11,  5, 11,  5, 17, 11,  5, 11,  5, 17, 11,  5, 11, 17, 37],

      [40, 11,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11, 37],

      [40,  0,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11, 11,  5,  5, 19, 17, 11,  5, 11, 11,  5,  5, 37],

      [40, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11,  5, 11,  5, 17, 11,  5, 11,  5, 17, 11,  5, 11, 17, 37],

      [40, 11,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11, 37],

      [40,  0,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11, 11,  5,  5, 19, 17, 11,  5, 11, 11,  5,  5, 37],

      [40, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11,  5, 11,  5, 17, 11,  5, 11,  5, 17, 11,  5, 11, 17, 37],

      [40,  0,  5, 17, 11,  5, 11, 11,  5,  5,  5, 11,  5, 17, 11, 11,  5,  5, 19, 17, 11,  5, 11, 11,  5,  5, 37],

      [40, 11,  5, 11, 11,  5,  5, 11,  5, 17, 11,  5, 11,  5, 11,  5, 17, 11,  5, 11,  5, 17, 11,  5, 11, 17, 37],

      [41, 35, 35, 35, 35, 35, 35, 35, 13, 35, 35, 35, 35, 35, 35, 35, 47, 49, 35, 35, 35, 35, 35, 35, 35, 35, 41],



    ];
// console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
