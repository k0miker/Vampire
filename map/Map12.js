import Map from "../MapHandler.js";

export default class Map2 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz



    this.map = [
      [12, 6, 12, 6, 12, 17, 18, 17, 18, 12, 6, 18, 17, 12, 17, 6, 6, 6, 18, 12, 17, 6, 12, 18, 12, 6, 17],
      [12, 17, 17, 17, 18, 18, 6, 12, 6, 17, 18, 17, 18, 18, 6, 18, 6, 17, 17, 18, 12, 12, 17, 6, 12, 17, 6],
      [18, 6, 17, 18, 12, 6, 12, 6, 18, 6, 18, 17, 12, 17, 18, 18, 18, 17, 17, 12, 18, 18, 12, 12, 6, 6, 18],
      [6, 12, 18, 18, 12, 17, 18, 18, 6, 18, 12, 17, 17, 17, 17, 18, 6, 17, 17, 18, 17, 12, 6, 17, 18, 6, 17],
      [12, 18, 12, 12, 12, 18, 6, 12, 6, 17, 6, 112, 17, 18, 17, 6, 12, 18, 12, 6, 6, 18, 18, 18, 18, 12, 6],
      [6, 17, 17, 17, 6, 18, 12, 12, 6, 12, 6, 18, 6, 17, 6, 12, 17, 6, 18, 6, 17, 6, 18, 12, 18, 6, 18],
      [6, 6, 18, 18, 6, 6, 18, 18, 6, 17, 17, 6, 17, 6, 17, 6, 18, 17, 18, 18, 18, 17, 17, 18, 12, 18, 18],
      [18, 6, 18, 6, 17, 17, 17, 17, 12, 6, 17, 6, 17, 6, 6, 6, 18, 18, 17, 6, 6, 18, 17, 18, 17, 6, 18],
      [17, 6, 6, 12, 12, 12, 17, 6, 17, 17, 18, 12, 6, 18, 17, 6, 18, 6, 17, 12, 17, 6, 18, 12, 18, 18, 18],
      [17, 18, 6, 12, 17, 17, 6, 12, 17, 12, 18, 12, 6, 18, 17, 12, 17, 17, 12, 12, 18, 18, 17, 12, 12, 6, 17],
      [18, 12, 12, 18, 12, 6, 17, 17, 6, 17, 18, 17, 18, 18, 17, 18, 12, 12, 18, 18, 17, 12, 6, 6, 6, 6, 6],
      [17, 6, 6, 17, 6, 12, 6, 18, 17, 12, 17, 6, 18, 6, 6, 6, 12, 6, 6, 12, 6, 18, 12, 12, 17, 17, 18],
      [12, 17, 12, 18, 12, 12, 17, 18, 6, 6, 12, 18, 17, 17, 17, 12, 18, 12, 12, 18, 12, 17, 18, 6, 6, 12, 12]];



// console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
