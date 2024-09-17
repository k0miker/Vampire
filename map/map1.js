import Map from "../map.js";

export default class Map1 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.groundSheet = new Image();
    this.groundSheet.src = "./assets/ground.png";
    this.obstacleSheet = new Image();
    this.obstacleSheet.src = "./assets/obsticle.png";
    this.natureSheet = new Image();
    this.natureSheet.src = "./assets/nature.png";
    this.mapDefinition = [
      { index: 0, src: this.natureSheet, x: 0, y: 0 },
      { index: 1, src: this.groundSheet, x: 17, y: 0 },
      { index: 2, src: this.groundSheet, x: 34, y: 0 },
      { index: 3, src: this.groundSheet, x: 51, y: 0 },
      { index: 4, src: this.groundSheet, x: 68, y: 0 },
      { index: 5, src: this.groundSheet, x: 85, y: 0 },
      { index: 6, src: this.groundSheet, x: 0, y: 17 },
      { index: 7, src: this.groundSheet, x: 17, y: 17 },
      { index: 8, src: this.groundSheet, x: 34, y: 17 },
      { index: 9, src: this.groundSheet, x: 51, y: 17 },
      { index: 10, src: this.groundSheet, x: 68, y: 17 },
      { index: 1, src: this.groundSheet, x: 85, y: 17 },
      { index: 12, src: this.groundSheet, x: 0, y: 34 },
      { index: 13, src: this.groundSheet, x: 17, y: 34 },
      { index: 14, src: this.groundSheet, x: 34, y: 34 },
      { index: 15, src: this.groundSheet, x: 51, y: 34 },
      { index: 16, src: this.groundSheet, x: 68, y: 34 },
      { index: 17, src: this.groundSheet, x: 85, y: 34 },
      { index: 18, src: this.natureSheet, x: 17, y: 0 },
      { index: 19, src: this.natureSheet, x: 34, y: 0 },
      { index: 20, src: this.natureSheet, x: 51, y: 0 },
      { index: 21, src: this.natureSheet, x: 68, y: 0 },
      { index: 22, src: this.natureSheet, x: 85, y: 0 },
      { index: 23, src: this.natureSheet, x: 0, y: 17 },
      { index: 24, src: this.natureSheet, x: 17, y: 17 },
      { index: 25, src: this.natureSheet, x: 34, y: 17 },
      { index: 26, src: this.natureSheet, x: 51, y: 17 },
      { index: 27, src: this.natureSheet, x: 68, y: 17 },
      { index: 28, src: this.natureSheet, x: 85, y: 17 },
      { index: 29, src: this.natureSheet, x: 0, y: 34 },
      { index: 30, src: this.natureSheet, x: 17, y: 34 },
      { index: 31, src: this.natureSheet, x: 34, y: 34 },
      { index: 32, src: this.natureSheet, x: 51, y: 34 },
      { index: 33, src: this.natureSheet, x: 68, y: 34 },
      { index: 34, src: this.natureSheet, x: 85, y: 34 },
      { index: 35, src: this.obstacleSheet, x: 0, y: 0 },
      { index: 36, src: this.obstacleSheet, x: 17, y: 0 },
      { index: 37, src: this.obstacleSheet, x: 34, y: 0 },
      { index: 38, src: this.obstacleSheet, x: 0, y: 17 },
      { index: 39, src: this.obstacleSheet, x: 17, y: 17 },
      { index: 40, src: this.obstacleSheet, x: 34, y: 17 },
      { index: 41, src: this.obstacleSheet, x: 0, y: 34 },
      { index: 42, src: this.obstacleSheet, x: 17, y: 34 },
      { index: 43, src: this.obstacleSheet, x: 34, y: 34 },
    ];

    this.map = [
      [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
      [39, 39, 42, 17, 11, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [39, 28, 15, 7, 7, 3, 7, 5, 5, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [39, 28, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 2, 1, 0, 0],
      [39, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 1, 1, 0, 0],
      [39, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 3, 0, 0],
      [39, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 3, 0, 0],
      [39, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 0, 0, 0],
      [39, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 3, 0, 0, 0],
      [39, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 3, 0, 0, 0],
      [39, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 3, 0, 0, 0],
      [39, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 3, 0, 0, 0],
      [39, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 3, 0, 0, 0],
      [39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
