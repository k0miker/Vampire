import Map from "../map.js";

export default class Map1 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.groundSheet = new Image();
    this.groundSheet.src = "./assets/ground.png";
    this.fullSheet = new Image();
    this.fullSheet.src = "./assets/tileset.png";
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
    this.vendorSheet = new Image();
    this.vendorSheet.src = "./assets/vendor.png";

    this.mapDefinition = [
      { index: 0, src: this.natureSheet, x: 0, y: 0 , pass:false ,spawn:false},
      { index: 1, src: this.groundSheet, x: 17, y: 0 , pass:true ,spawn:false},
      { index: 2, src: this.groundSheet, x: 34, y: 0 , pass:true ,spawn:false},
      { index: 3, src: this.groundSheet, x: 51, y: 0 , pass:true ,spawn:false},
      { index: 4, src: this.groundSheet, x: 68, y: 0 , pass:true ,spawn:false},
      { index: 5, src: this.groundSheet, x: 85, y: 0 , pass:true ,spawn:false},
      { index: 6, src: this.groundSheet, x: 0, y: 17 , pass:true ,spawn:false},
      { index: 7, src: this.groundSheet, x: 17, y: 17 , pass:true ,spawn:false},
      { index: 8, src: this.groundSheet, x: 34, y: 17 , pass:true ,spawn:false},
      { index: 9, src: this.groundSheet, x: 51, y: 17 , pass:true ,spawn:false},
      { index: 10, src: this.groundSheet, x: 68, y: 17 , pass:true ,spawn:false},
      { index: 11, src: this.groundSheet, x: 85, y: 17 , pass:true ,spawn:false},
      { index: 12, src: this.groundSheet, x: 0, y: 34 , pass:true ,spawn:false},
      { index: 13, src: this.groundSheet, x: 17, y: 34 , pass:true ,spawn:false},
      { index: 14, src: this.groundSheet, x: 34, y: 34 , pass:true ,spawn:false},
      { index: 15, src: this.groundSheet, x: 51, y: 34 , pass:true ,spawn:false},
      { index: 16, src: this.groundSheet, x: 68, y: 34 , pass:true ,spawn:false},
      { index: 17, src: this.groundSheet, x: 85, y: 34 , pass:true ,spawn:false},

      { index: 18, src: this.natureSheet, x: 17, y: 0 , pass:false ,spawn:false},
      { index: 19, src: this.natureSheet, x: 34, y: 0 , pass:false ,spawn:false},
      { index: 20, src: this.natureSheet, x: 51, y: 0 , pass:false ,spawn:false},
      { index: 21, src: this.natureSheet, x: 68, y: 0 , pass:false ,spawn:false},
      { index: 22, src: this.natureSheet, x: 85, y: 0 , pass:false ,spawn:false},
      { index: 23, src: this.natureSheet, x: 0, y: 17 , pass:false ,spawn:false},
      { index: 24, src: this.natureSheet, x: 17, y: 17 , pass:false ,spawn:false},
      { index: 25, src: this.natureSheet, x: 34, y: 17 , pass:false ,spawn:false},
      { index: 26, src: this.natureSheet, x: 51, y: 17 , pass:false ,spawn:false},
      { index: 27, src: this.natureSheet, x: 68, y: 17 , pass:false ,spawn:false},
      { index: 28, src: this.natureSheet, x: 85, y: 17 , pass:false ,spawn:false},
      { index: 29, src: this.natureSheet, x: 0, y: 34 , pass:false ,spawn:false},
      { index: 30, src: this.natureSheet, x: 17, y: 34 , pass:false ,spawn:false},
      { index: 31, src: this.natureSheet, x: 34, y: 34 , pass:false ,spawn:false},
      { index: 32, src: this.natureSheet, x: 51, y: 34 , pass:false ,spawn:false},
      { index: 33, src: this.natureSheet, x: 68, y: 34 , pass:false ,spawn:false},
      { index: 34, src: this.natureSheet, x: 85, y: 34 , pass:false ,spawn:false},

      { index: 35, src: this.obstacleSheet, x: 0, y: 0 , pass:false ,spawn:false},
      { index: 36, src: this.obstacleSheet, x: 17, y: 0 , pass:false ,spawn:false},
      { index: 37, src: this.obstacleSheet, x: 34, y: 0 , pass:false ,spawn:false},
      { index: 38, src: this.obstacleSheet, x: 0, y: 17 , pass:false ,spawn:false},
      { index: 39, src: this.obstacleSheet, x: 17, y: 17 , pass:false ,spawn:false},
      { index: 40, src: this.obstacleSheet, x: 34, y: 17 , pass:false ,spawn:false},
      { index: 41, src: this.obstacleSheet, x: 0, y: 34 , pass:false ,spawn:false},
      { index: 42, src: this.obstacleSheet, x: 17, y: 34 , pass:false ,spawn:false},
      { index: 43, src: this.obstacleSheet, x: 34, y: 34 , pass:false ,spawn:false}, 
      { index: 44, src: this.obstacleSheet, x: 0, y: 51 , pass:false ,spawn:false},   
      { index: 45, src: this.obstacleSheet, x: 17, y: 51 , pass:false ,spawn:false},
      { index: 46, src: this.obstacleSheet, x: 34, y: 51 , pass:false ,spawn:false},

      { index: 47, src: this.streetSheet, x: 0, y: 0 , pass:true ,spawn:false},
      { index: 48, src: this.streetSheet, x: 17, y: 0 , pass:true ,spawn:false},
      { index: 49, src: this.streetSheet, x: 34, y: 0 , pass:true ,spawn:false},
      { index: 50, src: this.streetSheet, x: 51, y: 0 , pass:true ,spawn:false},
      { index: 51, src: this.streetSheet, x: 0, y: 17 , pass:true ,spawn:false},
      { index: 52, src: this.streetSheet, x: 17, y: 17 , pass:true ,spawn:false},
      { index: 53, src: this.streetSheet, x: 34, y: 17 , pass:true ,spawn:false},
      { index: 54, src: this.streetSheet, x: 51, y: 17 , pass:true ,spawn:false},
      { index: 55, src: this.streetSheet, x: 0, y: 34 , pass:true ,spawn:false},
      { index: 56, src: this.streetSheet, x: 17, y: 34 , pass:true ,spawn:false},
      { index: 57, src: this.streetSheet, x: 34, y: 34 , pass:true ,spawn:false},
      { index: 58, src: this.streetSheet, x: 51, y: 34 , pass:true ,spawn:false},
      { index: 59, src: this.streetSheet, x: 0, y: 51 , pass:true ,spawn:false},
      { index: 60, src: this.streetSheet, x: 17, y: 51 , pass:true ,spawn:false},
      { index: 61, src: this.streetSheet, x: 34, y: 51 , pass:true ,spawn:false},
      { index: 62, src: this.streetSheet, x: 51, y: 51 , pass:true ,spawn:false},
      { index: 63, src: this.streetSheet, x: 0, y: 69 , pass:true ,spawn:false},
      { index: 64, src: this.streetSheet, x: 17, y: 69 , pass:true ,spawn:false},
      { index: 65, src: this.streetSheet, x: 34, y: 69 , pass:true ,spawn:false},
      { index: 66, src: this.streetSheet, x: 51, y: 69 , pass:false ,spawn:false},
      { index: 67, src: this.streetSheet, x: 0, y: 85 , pass:true ,spawn:false},
      { index: 68, src: this.streetSheet, x: 51, y: 85 , pass:true ,spawn:false},
      { index: 69, src: this.streetSheet, x: 68, y: 85 , pass:true ,spawn:false},
      { index: 70, src: this.streetSheet, x: 85, y: 85 , pass:true ,spawn:false},
      { index: 71, src: this.streetSheet, x: 0, y: 102 , pass:true ,spawn:false},
      { index: 72, src: this.streetSheet, x: 17, y: 102 , pass:true ,spawn:false},
      { index: 73, src: this.streetSheet, x: 34, y: 102 , pass:true ,spawn:false},
      { index: 74, src: this.streetSheet, x: 51, y: 102 , pass:true ,spawn:false},
//häuser
      {index: 75, src: this.housesSheet, x: 0, y: 0, pass:true ,spawn:false},
      {index: 76, src: this.housesSheet, x: 17, y: 0, pass:true ,spawn:false},
      {index: 77, src: this.housesSheet, x: 34, y: 0, pass:true ,spawn:false},
      {index: 78, src: this.housesSheet, x: 51, y: 0, pass:true ,spawn:false},
      {index: 79, src: this.housesSheet, x: 68, y: 0, pass:false ,spawn:false},
      {index: 80, src: this.housesSheet, x: 0, y: 17, pass:false ,spawn:false},
      {index: 81, src: this.housesSheet, x: 17, y: 17, pass:false ,spawn:false},
      {index: 82, src: this.housesSheet, x: 34, y: 17, pass:false ,spawn:false},
      {index: 83, src: this.housesSheet, x: 51, y: 17, pass:false ,spawn:false},
      {index: 84, src: this.housesSheet, x: 68, y: 17, pass:false ,spawn:false},
      {index: 85, src: this.housesSheet, x: 0, y: 34, pass:false ,spawn:false},
      {index: 86, src: this.housesSheet, x: 17, y: 34, pass:false ,spawn:false},
      {index: 87, src: this.housesSheet, x: 34, y: 34, pass:false ,spawn:false},
      {index: 88, src: this.housesSheet, x: 51, y: 34, pass:false ,spawn:false},
      {index: 89, src: this.housesSheet, x: 68, y: 34, pass:false ,spawn:false},
      {index: 90, src: this.housesSheet, x: 0, y: 51, pass:false ,spawn:false},
      {index: 91, src: this.housesSheet, x: 17, y: 51, pass:false ,spawn:false},
      {index: 92, src: this.housesSheet, x: 34, y: 51, pass:false ,spawn:false},
      {index: 93, src: this.housesSheet, x: 51, y: 51, pass:false ,spawn:false},
      {index: 94, src: this.housesSheet, x: 68, y: 51, pass:false ,spawn:false},
      {index: 95, src: this.housesSheet, x: 0, y: 68, pass:false ,spawn:false},
      {index: 96, src: this.housesSheet, x: 17, y: 68, pass:false ,spawn:false},
      {index: 97, src: this.housesSheet, x: 34, y: 68, pass:false ,spawn:false},
      {index: 98, src: this.housesSheet, x: 51, y: 68, pass:false ,spawn:false},
      {index: 99, src: this.housesSheet, x: 68, y: 68, pass:false ,spawn:false},
      {index: 100, src: this.housesSheet, x: 0, y: 85, pass:false ,spawn:false},
      {index: 101, src: this.housesSheet, x: 17, y: 85, pass:false ,spawn:false},
      {index: 102, src: this.housesSheet, x: 34, y: 85, pass:false ,spawn:false},
      {index: 103, src: this.housesSheet, x: 51, y: 85, pass:false ,spawn:false},
      {index: 104, src: this.housesSheet, x: 68, y: 85, pass:false ,spawn:false},
//Äcker
        {index: 105, src: this.acherSheet, x: 0, y: 0, pass:true ,spawn:false},
        {index: 106, src: this.acherSheet, x: 17, y: 0, pass:true ,spawn:false},
        {index: 107, src: this.acherSheet, x: 34, y: 0, pass:true ,spawn:false},
        {index: 108, src: this.acherSheet, x: 0, y: 17, pass:true ,spawn:false},
        {index: 109, src: this.acherSheet, x: 17, y: 17, pass:true ,spawn:false},
        {index: 110, src: this.acherSheet, x: 34, y: 17, pass:true ,spawn:false,},  
//Vendor

        {index: 111, src: this.vendorSheet, x: 0, y: 0, pass:false ,spawn:false},
        {index: 112, src: this.vendorSheet, x: 16, y: 0, pass:false ,spawn:false},
        {index: 113, src: this.vendorSheet, x: 32, y: 0, pass:true ,spawn:false},
        {index: 114, src: this.vendorSheet, x: 0, y: 16, pass:true ,spawn:false},
        {index: 115, src: this.vendorSheet, x: 16, y: 16, pass:true ,spawn:false},
        {index: 116, src: this.vendorSheet, x: 32, y: 16, pass:true ,spawn:false},
//traktor
        {index: 117, src: this.fullSheet, x: 322, y: 227, pass:false ,spawn:false},
        {index: 118, src: this.fullSheet, x: 340, y: 227, pass:false ,spawn:false},
        {index: 119, src: this.fullSheet, x: 322, y: 248, pass:false ,spawn:false},
        {index: 120, src: this.fullSheet, x: 340, y: 248, pass:false ,spawn:false},

//trashcar
        {index: 121, src: this.fullSheet, x: 594, y: 189, pass:false ,spawn:false},
        {index: 122, src: this.fullSheet, x: 612, y: 189, pass:false ,spawn:false},






    ];

    this.map = [
      [41, 45, 45, 45, 45, 45, 45, 40, 13,  0, 46, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 41, 45, 45, 41],

      [40, 11, 11, 17, 18,  0, 11, 75, 13,  5,  5, 15,  7,  7, 14,  0,  5, 11, 17, 11, 17,  5, 18, 42, 18, 11, 37],

      [40,  0,  5,  7,  7,  3,  7,  7, 10,  7,  7,  8, 17, 11, 13, 11, 17, 17, 19, 17,  5,  5, 11, 17, 11, 18, 37],

      [40,  5,  5,121,122, 13, 17, 11, 76, 77, 78, 19, 11, 17, 13, 17,  5, 17, 31, 11,  5,  5, 75,  5,  5, 17, 37],

      [40, 11, 17, 11,  5, 13, 11, 19, 86, 87, 88, 31, 19,  5, 13, 17, 18,  5, 17, 11, 17, 11,  5, 19,  5, 11, 37],

      [40, 18, 11, 23, 24, 13, 19, 31, 95, 97, 99, 17, 31, 11,  4,  7,  7,  7, 11,  5, 19,  5, 11, 31,  5, 19, 37],

      [40,  5, 17, 17, 11, 13, 31, 11,100,102,104,  5, 11, 11,  5,  0, 17, 11,  5,  5, 31,  5, 19, 17,  5, 31, 37],

      [40,  5, 17, 11,  5,  4,  7,  7,  7,  8, 17,  5, 11,  5,  5, 11, 18,  5, 17, 17,  5, 17, 31,  5, 17, 11, 37],

      [40,  5,  5,  5, 19,  5,  5, 75, 11,  5, 17, 75, 11,  5,  5, 19, 55, 50, 50, 59, 66, 11,  5, 17, 18, 75, 37],

      [40, 11,  5,  5, 31,  5, 17,105,109,105,108,105, 75,  5, 17, 11, 47, 57, 58, 63, 66, 11, 11, 19, 17, 11, 37],

      [40,  5, 75,117,118,  5, 11,108,105,109,107,105, 17,  5, 11,  5, 47, 49,  3,111,112,113, 19, 31, 11,  0, 37],

      [40,  5,  5,119,120,  5, 75,105,109,105,110,105, 75,  5,  5, 11, 47, 49,  3,114,115,116, 31, 75,  0, 75, 37],

      [41, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 47, 49, 35, 35, 35, 35, 35, 35, 35, 35, 41],



    ];
// console.log(this.map[1].length);
    this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
