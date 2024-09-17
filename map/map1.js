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
    this.streetSheet = new Image();
    this.streetSheet.src = "./assets/street.png";
    this.housesSheet = new Image();
    this.housesSheet.src = "./assets/houses.png";
    this.acherSheet = new Image();
    this.acherSheet.src = "./assets/achers.png";

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
      { index: 11, src: this.groundSheet, x: 85, y: 17 },
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
      { index: 44, src: this.obstacleSheet, x: 0, y: 51 },   
      { index: 45, src: this.obstacleSheet, x: 17, y: 51 },
      { index: 46, src: this.obstacleSheet, x: 34, y: 51 },

        { index: 47, src: this.streetSheet, x: 0, y: 0 },
        { index: 48, src: this.streetSheet, x: 17, y: 0 },
        { index: 49, src: this.streetSheet, x: 34, y: 0 },
        { index: 50, src: this.streetSheet, x: 51, y: 0 },
        { index: 51, src: this.streetSheet, x: 0, y: 17 },
        { index: 52, src: this.streetSheet, x: 17, y: 17 },
        { index: 53, src: this.streetSheet, x: 34, y: 17 },
        { index: 54, src: this.streetSheet, x: 51, y: 17 },
        { index: 55, src: this.streetSheet, x: 0, y: 34 },
        { index: 56, src: this.streetSheet, x: 17, y: 34 },
        { index: 57, src: this.streetSheet, x: 34, y: 34 },
        { index: 58, src: this.streetSheet, x: 51, y: 34 },
        { index: 59, src: this.streetSheet, x: 68, y: 0 },
        { index: 60, src: this.streetSheet, x: 85, y: 0 },
        { index: 61, src: this.streetSheet, x: 68, y: 17 },
        { index: 62, src: this.streetSheet, x: 85, y: 17 },
        { index: 63, src: this.streetSheet, x: 68, y: 34 },
        { index: 64, src: this.streetSheet, x: 85, y: 34 },
        { index: 65, src: this.streetSheet, x: 0, y: 51 },
        { index: 66, src: this.streetSheet, x: 17, y: 51 },
        { index: 67, src: this.streetSheet, x: 34, y: 51 },
        { index: 68, src: this.streetSheet, x: 51, y: 51 },
        { index: 69, src: this.streetSheet, x: 68, y: 51 },
        { index: 70, src: this.streetSheet, x: 85, y: 51 },
        { index: 71, src: this.streetSheet, x: 0, y: 68 },
        { index: 72, src: this.streetSheet, x: 17, y: 68 },
        { index: 73, src: this.streetSheet, x: 34, y: 68 },
        { index: 74, src: this.streetSheet, x: 51, y: 68 },

        {index: 75, src: this.housesSheet, x: 0, y: 0},
        {index: 76, src: this.housesSheet, x: 17, y: 0},
        {index: 77, src: this.housesSheet, x: 34, y: 0},
        {index: 78, src: this.housesSheet, x: 51, y: 0},
        {index: 79, src: this.housesSheet, x: 68, y: 0},
        {index: 80, src: this.housesSheet, x: 0, y: 17},
        {index: 81, src: this.housesSheet, x: 17, y: 17},
        {index: 82, src: this.housesSheet, x: 34, y: 17},
        {index: 83, src: this.housesSheet, x: 51, y: 17},
        {index: 84, src: this.housesSheet, x: 68, y: 17},
        {index: 85, src: this.housesSheet, x: 0, y: 34},
        {index: 86, src: this.housesSheet, x: 17, y: 34},
        {index: 87, src: this.housesSheet, x: 34, y: 34},
        {index: 88, src: this.housesSheet, x: 51, y: 34},
        {index: 89, src: this.housesSheet, x: 68, y: 34},
        {index: 90, src: this.housesSheet, x: 0, y: 51},
        {index: 91, src: this.housesSheet, x: 17, y: 51},
        {index: 92, src: this.housesSheet, x: 34, y: 51},
        {index: 93, src: this.housesSheet, x: 51, y: 51},
        {index: 94, src: this.housesSheet, x: 68, y: 51},
        {index: 95, src: this.housesSheet, x: 0, y: 68},
        {index: 96, src: this.housesSheet, x: 17, y: 68},
        {index: 97, src: this.housesSheet, x: 34, y: 68},
        {index: 98, src: this.housesSheet, x: 51, y: 68},
        {index: 99, src: this.housesSheet, x: 68, y: 68},
        {index: 100, src: this.housesSheet, x: 0, y: 85},
        {index: 101, src: this.housesSheet, x: 17, y: 85},
        {index: 102, src: this.housesSheet, x: 34, y: 85},
        {index: 103, src: this.housesSheet, x: 51, y: 85},
        {index: 104, src: this.housesSheet, x: 68, y: 85},

        {index: 105, src: this.acherSheet, x: 0, y: 0},
        {index: 106, src: this.acherSheet, x: 17, y: 0},
        {index: 107, src: this.acherSheet, x: 34, y: 0},
        {index: 108, src: this.acherSheet, x: 0, y: 17},
        {index: 109, src: this.acherSheet, x: 17, y: 17},
        {index: 110, src: this.acherSheet, x: 34, y: 17},



    ];

    this.map = [
      [41, 41, 41, 41, 41, 41, 41, 40, 13,  0, 46, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],

      [39, 39, 42, 17, 11, 42, 42,  0, 13,  5,  5, 15,  7,  7, 14,  0,  5, 11, 17,  0,  0,  0],

      [39, 40,  5,  7,  7,  3,  7,  7, 10,  7,  7,  8, 17, 11, 13,  0,  1,  1,  0,  0,  0,  0],

      [39, 43,  5, 18,  0, 13, 17,  0, 76, 77, 78, 19, 11, 17, 13,  0,  2,  2,  2,  1,  0,  0],

      [39, 40, 17, 18, 19, 13, 11, 19, 86, 87, 88, 31, 19,  5, 13,  0,  2,  2,  1,  1,  0,  0],

      [39, 43, 11, 23, 24, 13, 19, 31, 95, 97, 99, 17, 31, 11,  4,  7,  2,  1,  2,  3,  0,  0],

      [39,  5, 17, 11,  0, 13, 31,  0,100,102,104,  0, 11,  0,  5,  0,  2,  5,  2,  3,  0,  0],

      [39,  5,  0,  0,  0,  4,  7,  7,  7,  8, 17,  0, 19,  0,  5,  0,  2,  5,  2,  0,  0,  0],

      [39,  5,  5,  5,  5,  5, 75, 75, 75, 75, 75, 75,  5,  5,  5,  0,  2,  5,  3,  0,  0,  0],

      [39,  5,  5,  5,  5,  5, 75,105,109,105,108,105,  5,  5,  5,  0,  2,  5,  3,  0,  0,  0],

      [39,  5,  5,  5,  5,  5,  5,107,105,107,  5,  5,  5,  5,  5,  0,  2,  5,  3,  0,  0,  0],

      [39,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  0,  2,  5,  3,  0,  0,  0],

      [39,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  0,  2,  5,  3,  0,  0,  0],

      [39,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    ];

    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
