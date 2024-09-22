import Map from "../MapHandler.js";

export default class Map2 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount = 15;

    //////////VORLÄUFIGE MAPDATEN////////////////
    this.map = [
      44, 81, 6, 6, 44, 44, 81, 44, 81, 6, 44, 44, 81, 6, 81, 81, 81, 44, 81,
      44, 81, 81, 6, 6, 44, 44, 6, 6, 44, 44, 6, 81, 81, 85, 6, 81, 81, 44, 81,
      81, 6, 81, 81, 85, 6, 6, 44, 81, 44, 44, 6, 44, 6, 44, 6, 44, 85, 81, 6,
      6, 44, 81, 6, 6, 6, 44, 6, 6, 44, 81, 44, 81, 6, 6, 44, 6, 6, 81, 6, 81,
      6, 6, 81, 44, 44, 6, 44, 81, 44, 44, 44, 44, 81, 44, 85, 44, 44, 81, 44,
      6, 6, 81, 6, 85, 44, 6, 6, 81, 6, 6, 81, 6, 85, 81, 81, 81, 81, 44, 85,
      44, 6, 81, 44, 6, 6, 81, 85, 44, 44, 44, 44, 44, 44, 6, 6, 6, 81, 6, 81,
      44, 81, 81, 81, 6, 6, 6, 81, 6, 44, 81, 6, 81, 6, 6, 81, 81, 6, 6, 81, 85,
      6, 81, 44, 44, 6, 6, 44, 44, 6, 81, 44, 6, 6, 6, 6, 6, 81, 81, 81, 6, 44,
      81, 6, 44, 44, 6, 81, 6, 81, 6, 6, 44, 6, 81, 44, 81, 85, 81, 81, 44, 81,
      81, 6, 44, 44, 81, 44, 81, 81, 85, 44, 81, 44, 6, 44, 44, 81, 6, 85, 81,
      6, 44, 6, 44, 44, 44, 44, 6, 44, 85, 6, 81, 44, 81, 44, 44, 44, 81, 44, 6,
      81, 6, 81, 44, 44, 81, 81, 6, 81, 44, 44, 44, 81, 85, 44, 44, 81, 6, 44,
      85, 44, 85, 44, 81, 81, 81, 44, 81, 81, 44, 81, 44, 44, 81, 85, 6, 6, 85,
      44, 81, 81, 6, 44, 6, 6, 6, 81, 6, 6, 81, 6, 81, 85, 81, 85, 6, 6, 6, 44,
      44, 81, 44, 44, 44, 81, 44, 6, 81, 81, 44, 44, 44, 6, 44, 6, 6, 6, 6, 85,
      44, 81, 81, 44, 6, 81, 44, 44, 6, 44, 81, 44, 44, 6, 6, 6, 81, 81, 44, 81,
      44, 6, 6, 81, 6, 6, 81, 81, 81, 44, 6, 44,
    ];
    this.overlay = [
      0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9,
      0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 47, 0, 0, 0, 0, 9, 0,
      0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0,
      0, 0, 0, 0, 47, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 47,
      0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0,
      0, 0, 0, 0, 0, 9, 0, 0, 47, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 7, 0, 47, 0, 0, 0, 9, 0, 9, 0,
      0, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 47,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    // console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
