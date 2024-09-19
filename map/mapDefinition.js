let groundSheet = new Image();
groundSheet.src = "../assets/ground.png";
let fullSheet = new Image();
fullSheet.src = "../assets/tileset.png";
let obstacleSheet = new Image();
obstacleSheet.src = "../assets/obsticle.png";
let natureSheet = new Image();
natureSheet.src = "../assets/nature.png";
let streetSheet = new Image();
streetSheet.src = "../assets/street.png";
let housesSheet = new Image();
housesSheet.src = "../assets/houses.png";
let acherSheet = new Image();
acherSheet.src = "../assets/achers.png";
let vendorSheet = new Image();
vendorSheet.src = "../assets/vendor.png";

const mapDefinition = [
  { index: 0, src: natureSheet, x: 0, y: 0, pass: false, spawn: false },
  { index: 1, src: groundSheet, x: 17, y: 0, pass: true, spawn: false },
  { index: 2, src: groundSheet, x: 34, y: 0, pass: true, spawn: false },
  { index: 3, src: groundSheet, x: 51, y: 0, pass: true, spawn: false },
  { index: 4, src: groundSheet, x: 68, y: 0, pass: true, spawn: false },
  { index: 5, src: groundSheet, x: 85, y: 0, pass: true, spawn: true },
  { index: 6, src: groundSheet, x: 0, y: 17, pass: true, spawn: false },
  { index: 7, src: groundSheet, x: 17, y: 17, pass: true, spawn: false },
  { index: 8, src: groundSheet, x: 34, y: 17, pass: true, spawn: false },
  { index: 9, src: groundSheet, x: 51, y: 17, pass: true, spawn: false },
  { index: 10, src: groundSheet, x: 68, y: 17, pass: true, spawn: false },
  { index: 11, src: groundSheet, x: 85, y: 17, pass: true, spawn: false },
  { index: 12, src: groundSheet, x: 0, y: 34, pass: true, spawn: false },
  { index: 13, src: groundSheet, x: 17, y: 34, pass: true, spawn: false },
  { index: 14, src: groundSheet, x: 34, y: 34, pass: true, spawn: false },
  { index: 15, src: groundSheet, x: 51, y: 34, pass: true, spawn: false },
  { index: 16, src: groundSheet, x: 68, y: 34, pass: true, spawn: false },
  { index: 17, src: groundSheet, x: 85, y: 34, pass: true, spawn: false },

  { index: 18, src: natureSheet, x: 17, y: 0, pass: false, spawn: false },
  { index: 19, src: natureSheet, x: 34, y: 0, pass: false, spawn: false },
  { index: 20, src: natureSheet, x: 51, y: 0, pass: false, spawn: false },
  { index: 21, src: natureSheet, x: 68, y: 0, pass: false, spawn: false },
  { index: 22, src: natureSheet, x: 85, y: 0, pass: false, spawn: false },
  { index: 23, src: natureSheet, x: 0, y: 17, pass: false, spawn: false },
  { index: 24, src: natureSheet, x: 17, y: 17, pass: false, spawn: false },
  { index: 25, src: natureSheet, x: 34, y: 17, pass: false, spawn: false },
  { index: 26, src: natureSheet, x: 51, y: 17, pass: false, spawn: false },
  { index: 27, src: natureSheet, x: 68, y: 17, pass: false, spawn: false },
  { index: 28, src: natureSheet, x: 85, y: 17, pass: false, spawn: false },
  { index: 29, src: natureSheet, x: 0, y: 34, pass: false, spawn: false },
  { index: 30, src: natureSheet, x: 17, y: 34, pass: false, spawn: false },
  { index: 31, src: natureSheet, x: 34, y: 34, pass: false, spawn: false },
  { index: 32, src: natureSheet, x: 51, y: 34, pass: false, spawn: false },
  { index: 33, src: natureSheet, x: 68, y: 34, pass: false, spawn: false },
  { index: 34, src: natureSheet, x: 85, y: 34, pass: false, spawn: false },

  { index: 35, src: obstacleSheet, x: 0, y: 0, pass: false, spawn: false },
  { index: 36, src: obstacleSheet, x: 17, y: 0, pass: false, spawn: false },
  { index: 37, src: obstacleSheet, x: 34, y: 0, pass: false, spawn: false },
  { index: 38, src: obstacleSheet, x: 0, y: 17, pass: false, spawn: false },
  { index: 39, src: obstacleSheet, x: 17, y: 17, pass: false, spawn: false },
  { index: 40, src: obstacleSheet, x: 34, y: 17, pass: false, spawn: false },
  { index: 41, src: obstacleSheet, x: 0, y: 34, pass: false, spawn: false },
  { index: 42, src: obstacleSheet, x: 17, y: 34, pass: false, spawn: false },
  { index: 43, src: obstacleSheet, x: 34, y: 34, pass: false, spawn: false },
  { index: 44, src: obstacleSheet, x: 0, y: 51, pass: false, spawn: false },
  { index: 45, src: obstacleSheet, x: 17, y: 51, pass: false, spawn: false },
  { index: 46, src: obstacleSheet, x: 34, y: 51, pass: false, spawn: false },

  { index: 47, src: streetSheet, x: 0, y: 0, pass: true, spawn: false },
  { index: 48, src: streetSheet, x: 17, y: 0, pass: true, spawn: false },
  { index: 49, src: streetSheet, x: 34, y: 0, pass: true, spawn: false },
  { index: 50, src: streetSheet, x: 51, y: 0, pass: true, spawn: false },
  { index: 51, src: streetSheet, x: 0, y: 17, pass: true, spawn: false },
  { index: 52, src: streetSheet, x: 17, y: 17, pass: true, spawn: false },
  { index: 53, src: streetSheet, x: 34, y: 17, pass: true, spawn: false },
  { index: 54, src: streetSheet, x: 51, y: 17, pass: true, spawn: false },
  { index: 55, src: streetSheet, x: 0, y: 34, pass: true, spawn: false },
  { index: 56, src: streetSheet, x: 17, y: 34, pass: true, spawn: false },
  { index: 57, src: streetSheet, x: 34, y: 34, pass: true, spawn: false },
  { index: 58, src: streetSheet, x: 51, y: 34, pass: true, spawn: false },
  { index: 59, src: streetSheet, x: 0, y: 51, pass: true, spawn: false },
  { index: 60, src: streetSheet, x: 17, y: 51, pass: true, spawn: false },
  { index: 61, src: streetSheet, x: 34, y: 51, pass: true, spawn: false },
  { index: 62, src: streetSheet, x: 51, y: 51, pass: true, spawn: false },
  { index: 63, src: streetSheet, x: 0, y: 69, pass: true, spawn: false },
  { index: 64, src: streetSheet, x: 17, y: 69, pass: true, spawn: false },
  { index: 65, src: streetSheet, x: 34, y: 69, pass: true, spawn: false },
  { index: 66, src: streetSheet, x: 51, y: 69, pass: false, spawn: false },
  { index: 67, src: streetSheet, x: 0, y: 85, pass: true, spawn: false },
  { index: 68, src: streetSheet, x: 51, y: 85, pass: true, spawn: false },
  { index: 69, src: streetSheet, x: 68, y: 85, pass: true, spawn: false },
  { index: 70, src: streetSheet, x: 85, y: 85, pass: true, spawn: false },
  { index: 71, src: streetSheet, x: 0, y: 102, pass: true, spawn: false },
  { index: 72, src: streetSheet, x: 17, y: 102, pass: true, spawn: false },
  { index: 73, src: streetSheet, x: 34, y: 102, pass: true, spawn: false },
  { index: 74, src: streetSheet, x: 51, y: 102, pass: true, spawn: false },
  //häuser
  { index: 75, src: housesSheet, x: 0, y: 0, pass: true, spawn: false },
  { index: 76, src: housesSheet, x: 17, y: 0, pass: true, spawn: false },
  { index: 77, src: housesSheet, x: 34, y: 0, pass: true, spawn: false },
  { index: 78, src: housesSheet, x: 51, y: 0, pass: true, spawn: false },
  { index: 79, src: housesSheet, x: 68, y: 0, pass: false, spawn: false },
  { index: 80, src: housesSheet, x: 0, y: 17, pass: false, spawn: false },
  { index: 81, src: housesSheet, x: 17, y: 17, pass: false, spawn: false },
  { index: 82, src: housesSheet, x: 34, y: 17, pass: false, spawn: false },
  { index: 83, src: housesSheet, x: 51, y: 17, pass: false, spawn: false },
  { index: 84, src: housesSheet, x: 68, y: 17, pass: false, spawn: false },
  { index: 85, src: housesSheet, x: 0, y: 34, pass: false, spawn: false },
  { index: 86, src: housesSheet, x: 17, y: 34, pass: false, spawn: false },
  { index: 87, src: housesSheet, x: 34, y: 34, pass: false, spawn: false },
  { index: 88, src: housesSheet, x: 51, y: 34, pass: false, spawn: false },
  { index: 89, src: housesSheet, x: 68, y: 34, pass: false, spawn: false },
  { index: 90, src: housesSheet, x: 0, y: 51, pass: false, spawn: false },
  { index: 91, src: housesSheet, x: 17, y: 51, pass: false, spawn: false },
  { index: 92, src: housesSheet, x: 34, y: 51, pass: false, spawn: false },
  { index: 93, src: housesSheet, x: 51, y: 51, pass: false, spawn: false },
  { index: 94, src: housesSheet, x: 68, y: 51, pass: false, spawn: false },
  { index: 95, src: housesSheet, x: 0, y: 68, pass: false, spawn: false },
  { index: 96, src: housesSheet, x: 17, y: 68, pass: false, spawn: false },
  { index: 97, src: housesSheet, x: 34, y: 68, pass: false, spawn: false },
  { index: 98, src: housesSheet, x: 51, y: 68, pass: false, spawn: false },
  { index: 99, src: housesSheet, x: 68, y: 68, pass: false, spawn: false },
  { index: 100, src: housesSheet, x: 0, y: 85, pass: false, spawn: false },
  { index: 101, src: housesSheet, x: 17, y: 85, pass: false, spawn: false },
  { index: 102, src: housesSheet, x: 34, y: 85, pass: false, spawn: false },
  { index: 103, src: housesSheet, x: 51, y: 85, pass: false, spawn: false },
  { index: 104, src: housesSheet, x: 68, y: 85, pass: false, spawn: false },
  //Äcker
  { index: 105, src: acherSheet, x: 0, y: 0, pass: true, spawn: false },
  { index: 106, src: acherSheet, x: 17, y: 0, pass: true, spawn: false },
  { index: 107, src: acherSheet, x: 34, y: 0, pass: true, spawn: false },
  { index: 108, src: acherSheet, x: 0, y: 17, pass: true, spawn: false },
  { index: 109, src: acherSheet, x: 17, y: 17, pass: true, spawn: false },
  { index: 110, src: acherSheet, x: 34, y: 17, pass: true, spawn: false },
  //Vendor

  { index: 111, src: vendorSheet, x: 0, y: 0, pass: false, spawn: false },
  { index: 112, src: vendorSheet, x: 16, y: 0, pass: false, spawn: false },
  { index: 113, src: vendorSheet, x: 32, y: 0, pass: true, spawn: false },
  { index: 114, src: vendorSheet, x: 0, y: 16, pass: true, spawn: false },
  { index: 115, src: vendorSheet, x: 16, y: 16, pass: true, spawn: false },
  { index: 116, src: vendorSheet, x: 32, y: 16, pass: true, spawn: false },
  //traktor
  { index: 117, src: fullSheet, x: 322, y: 227, pass: false, spawn: false },
  { index: 118, src: fullSheet, x: 340, y: 227, pass: false, spawn: false },
  { index: 119, src: fullSheet, x: 322, y: 248, pass: false, spawn: false },
  { index: 120, src: fullSheet, x: 340, y: 248, pass: false, spawn: false },

  //trashcar
  { index: 121, src: fullSheet, x: 594, y: 189, pass: false, spawn: false },
  { index: 122, src: fullSheet, x: 612, y: 189, pass: false, spawn: false },
];

export default mapDefinition;
