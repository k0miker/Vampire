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
let house1Sheet = new Image();
house1Sheet.src = "../assets/house1.png";
let house2Sheet = new Image()
house2Sheet.src = '../assets/house2.png';
let acherSheet = new Image();
acherSheet.src = "../assets/achers.png";
let acher2Sheet = new Image();
acher2Sheet.src='../assets/achers2.png'
let vendorSheet = new Image();
 vendorSheet.src = "../assets/vendor.png";
let zero = new Image();
 zero.src = "../assets/0.png";
 
 
 const mapDefinition = [
    
    { index: 0, src: zero, x: 0, y: 0 , pass:true ,spawn:false},
    { index: 1, src: groundSheet, x: 0, y: 0 , pass:true ,spawn:false},
    { index: 2, src: groundSheet, x: 17, y: 0 , pass:true ,spawn:false},
    { index: 3, src: groundSheet, x: 34, y: 0 , pass:true ,spawn:false},
    { index: 4, src: groundSheet, x: 51, y: 0 , pass:true ,spawn:false},
    { index: 5, src: groundSheet, x: 68, y: 0 , pass:true ,spawn:false},
    { index: 6, src: groundSheet, x: 85, y: 0 , pass:true ,spawn:true},
    { index: 7, src: groundSheet, x: 0, y: 17 , pass:true ,spawn:false},
    { index: 8, src: groundSheet, x: 17, y: 17 , pass:true ,spawn:false},
    { index: 9, src: groundSheet, x: 34, y: 17 , pass:true ,spawn:false},
    { index: 10, src: groundSheet, x: 51, y: 17 , pass:true ,spawn:false},
    { index: 11, src: groundSheet, x: 68, y: 17 , pass:true ,spawn:false},
    { index: 12, src: groundSheet, x: 85, y: 17 , pass:true ,spawn:false},
    { index: 13, src: groundSheet, x: 0, y: 34 , pass:true ,spawn:false},
    { index: 14, src: groundSheet, x: 17, y: 34 , pass:true ,spawn:false},
    { index: 15, src: groundSheet, x: 34, y: 34 , pass:true ,spawn:false},
    { index: 16, src: groundSheet, x: 51, y: 34 , pass:true ,spawn:false},
    { index: 17, src: groundSheet, x: 68, y: 34 , pass:true ,spawn:false},
    { index: 18, src: groundSheet, x: 85, y: 34 , pass:true ,spawn:false},


    { index: 19, src: natureSheet, x: 0, y: 0 , pass:false ,spawn:false},
    { index: 20, src: natureSheet, x: 17, y: 0 , pass:false ,spawn:false},
    { index: 21, src: natureSheet, x: 34, y: 0 , pass:false ,spawn:false},
    { index: 22, src: natureSheet, x: 51, y: 0 , pass:false ,spawn:false},
    { index: 23, src: natureSheet, x: 68, y: 0 , pass:false ,spawn:false},
    { index: 24, src: natureSheet, x: 85, y: 0 , pass:false ,spawn:false},
    { index: 25, src: natureSheet, x: 0, y: 17 , pass:false ,spawn:false},
    { index: 26, src: natureSheet, x: 17, y: 17 , pass:false ,spawn:false},
    { index: 27, src: natureSheet, x: 34, y: 17 , pass:false ,spawn:false},
    { index: 28, src: natureSheet, x: 51, y: 17 , pass:false ,spawn:false},
    { index: 29, src: natureSheet, x: 68, y: 17 , pass:false ,spawn:false},
    { index: 30, src: natureSheet, x: 85, y: 17 , pass:false ,spawn:false},
    { index: 31, src: natureSheet, x: 0, y: 34 , pass:false ,spawn:false},
    { index: 32, src: natureSheet, x: 17, y: 34 , pass:false ,spawn:false},
    { index: 33, src: natureSheet, x: 34, y: 34 , pass:false ,spawn:false},
    { index: 34, src: natureSheet, x: 51, y: 34 , pass:false ,spawn:false},
    { index: 35, src: natureSheet, x: 68, y: 34 , pass:false ,spawn:false},
    { index: 36, src: natureSheet, x: 85, y: 34 , pass:false ,spawn:false},

    { index: 37, src: obstacleSheet, x: 0, y: 0 , pass:false ,spawn:false},
    { index: 38, src: obstacleSheet, x: 17, y: 0 , pass:false ,spawn:false},
    { index: 39, src: obstacleSheet, x: 34, y: 0 , pass:false ,spawn:false},
    { index: 40, src: obstacleSheet, x: 0, y: 17 , pass:false ,spawn:false},
    { index: 41, src: obstacleSheet, x: 17, y: 17 , pass:false ,spawn:false},
    { index: 42, src: obstacleSheet, x: 34, y: 17 , pass:false ,spawn:false},
    { index: 43, src: obstacleSheet, x: 0, y: 34 , pass:false ,spawn:false},
    { index: 44, src: obstacleSheet, x: 17, y: 34 , pass:false ,spawn:false},
    { index: 45, src: obstacleSheet, x: 34, y: 34 , pass:false ,spawn:false}, 
    { index: 46, src: obstacleSheet, x: 0, y: 51 , pass:false ,spawn:false},   
    { index: 47, src: obstacleSheet, x: 17, y: 51 , pass:false ,spawn:false},
    { index: 48, src: obstacleSheet, x: 34, y: 51 , pass:false ,spawn:false},

    { index: 49, src: streetSheet, x: 0, y: 0 , pass:true ,spawn:false},
    { index: 50, src: streetSheet, x: 17, y: 0 , pass:true ,spawn:false},
    { index: 51, src: streetSheet, x: 34, y: 0 , pass:true ,spawn:false},
    { index: 52, src: streetSheet, x: 51, y: 0 , pass:true ,spawn:false},
    { index: 53, src: streetSheet, x: 0, y: 17 , pass:true ,spawn:false},
    { index: 54, src: streetSheet, x: 17, y: 17 , pass:true ,spawn:false},
    { index: 55, src: streetSheet, x: 34, y: 17 , pass:true ,spawn:false},
    { index: 56, src: streetSheet, x: 51, y: 17 , pass:true ,spawn:false},
    { index: 57, src: streetSheet, x: 0, y: 34 , pass:true ,spawn:false},
    { index: 58, src: streetSheet, x: 17, y: 34 , pass:true ,spawn:false},
    { index: 59, src: streetSheet, x: 34, y: 34 , pass:true ,spawn:false},
    { index: 60, src: streetSheet, x: 51, y: 34 , pass:true ,spawn:false},
    { index: 61, src: streetSheet, x: 0, y: 51 , pass:true ,spawn:false},
    { index: 62, src: streetSheet, x: 17, y: 51 , pass:true ,spawn:false},
    { index: 63, src: streetSheet, x: 34, y: 51 , pass:true ,spawn:false},
    { index: 64, src: streetSheet, x: 51, y: 51 , pass:true ,spawn:false},
    { index: 65, src: streetSheet, x: 0, y: 69 , pass:true ,spawn:false},
    { index: 66, src: streetSheet, x: 17, y: 69 , pass:true ,spawn:false},
    { index: 67, src: streetSheet, x: 34, y: 69 , pass:true ,spawn:false},
    { index: 68, src: streetSheet, x: 51, y: 69 , pass:false ,spawn:false},
  
//häuser
{index: 69, src: house1Sheet, x: 0, y: 0, pass:true ,spawn:false},
{index: 70, src: house1Sheet, x: 17, y: 0, pass:true ,spawn:false},
{index: 71, src: house1Sheet, x: 34, y: 0, pass:true ,spawn:false},
{index: 72, src: house1Sheet, x: 51, y: 0, pass:true ,spawn:false},
{index: 73, src: house1Sheet, x: 68, y: 0, pass:false ,spawn:false},
{index: 74, src: house1Sheet, x: 0, y: 17, pass:false ,spawn:false},
{index: 75, src: house1Sheet, x: 17, y: 17, pass:false ,spawn:false},
    {index: 76, src: house1Sheet, x: 34, y: 17, pass:false ,spawn:false},
    {index: 77, src: house1Sheet, x: 51, y: 17, pass:false ,spawn:false},
    {index: 78, src: house1Sheet, x: 68, y: 17, pass:false ,spawn:false},
    {index: 79, src: house1Sheet, x: 0, y: 34, pass:false ,spawn:false},
    {index: 80, src: house1Sheet, x: 17, y: 34, pass:false ,spawn:false},
    {index: 81, src: house1Sheet, x: 34, y: 34, pass:false ,spawn:false},
    {index: 82, src: house1Sheet, x: 51, y: 34, pass:false ,spawn:false},
    {index: 83, src: house1Sheet, x: 68, y: 34, pass:false ,spawn:false},
    {index: 84, src: house1Sheet, x: 0, y: 51, pass:false ,spawn:false},
    {index: 85, src: house1Sheet, x: 17, y: 51, pass:false ,spawn:false},
    {index: 86, src: house1Sheet, x: 34, y: 51, pass:false ,spawn:false},
    {index: 87, src: house1Sheet, x: 51, y: 51, pass:false ,spawn:false},
    {index: 88, src: house1Sheet, x: 68, y: 51, pass:false ,spawn:false},
    {index: 89, src: house1Sheet, x: 0, y: 68, pass:false ,spawn:false},
    {index: 90, src: house1Sheet, x: 17, y: 68, pass:false ,spawn:false},
    {index: 91, src: house1Sheet, x: 34, y: 68, pass:false ,spawn:false},
    {index: 92, src: house1Sheet, x: 51, y: 68, pass:false ,spawn:false},
    {index: 93, src: house1Sheet, x: 68, y: 68, pass:false ,spawn:false},
    {index: 94, src: house1Sheet, x: 0, y: 85, pass:false ,spawn:false},
    {index: 95, src: house1Sheet, x: 17, y: 85, pass:false ,spawn:false},
    {index: 96, src: house1Sheet, x: 34, y: 85, pass:false ,spawn:false},
    {index: 97, src: house1Sheet, x: 51, y: 85, pass:false ,spawn:false},
     { index: 98, src: house1Sheet, x: 68, y: 85, pass: false, spawn: false },
     {index: 99, src: house2Sheet, x: 0, y: 0, pass:true ,spawn:false},
     {index: 100, src: house2Sheet, x: 17, y: 0, pass:true ,spawn:false},
     {index: 101, src: house2Sheet, x: 34, y: 0, pass:true ,spawn:false},
     {index: 102, src: house2Sheet, x: 51, y: 0, pass:true ,spawn:false},
     {index: 103, src: house2Sheet, x: 68, y: 0, pass:false ,spawn:false},
     {index: 104, src: house2Sheet, x: 0, y: 17, pass:false ,spawn:false},
     {index: 105, src: house2Sheet, x: 17, y: 17, pass:false ,spawn:false},
         {index: 106, src: house2Sheet, x: 34, y: 17, pass:false ,spawn:false},
         {index: 107, src: house2Sheet, x: 51, y: 17, pass:false ,spawn:false},
         {index: 108, src: house2Sheet, x: 68, y: 17, pass:false ,spawn:false},
         {index: 109, src: house2Sheet, x: 0, y: 34, pass:false ,spawn:false},
         {index: 110, src: house2Sheet, x: 17, y: 34, pass:false ,spawn:false},
         {index: 111, src: house2Sheet, x: 34, y: 34, pass:false ,spawn:false},
         {index: 112, src: house2Sheet, x: 51, y: 34, pass:false ,spawn:false},
         {index: 113, src: house2Sheet, x: 68, y: 34, pass:false ,spawn:false},
         {index: 114, src: house2Sheet, x: 0, y: 51, pass:false ,spawn:false},
         {index: 115, src: house2Sheet, x: 17, y: 51, pass:false ,spawn:false},
         {index: 116, src: house2Sheet, x: 34, y: 51, pass:false ,spawn:false},
         {index: 117, src: house2Sheet, x: 51, y: 51, pass:false ,spawn:false},
         {index: 118, src: house2Sheet, x: 68, y: 51, pass:false ,spawn:false},
         {index: 119, src: house2Sheet, x: 0, y: 68, pass:false ,spawn:false},
         {index: 120, src: house2Sheet, x: 17, y: 68, pass:false ,spawn:false},
         {index: 121, src: house2Sheet, x: 34, y: 68, pass:false ,spawn:false},
         {index: 122, src: house2Sheet, x: 51, y: 68, pass:false ,spawn:false},
         {index: 123, src: house2Sheet, x: 68, y: 68, pass:false ,spawn:false},
         {index: 124, src: house2Sheet, x: 0, y: 85, pass:false ,spawn:false},
         {index: 125, src: house2Sheet, x: 17, y: 85, pass:false ,spawn:false},
         {index: 126, src: house2Sheet, x: 34, y: 85, pass:false ,spawn:false},
         {index: 127, src: house2Sheet, x: 51, y: 85, pass:false ,spawn:false},
         {index: 128, src: house2Sheet, x: 68, y: 85, pass:false ,spawn:false},
//Äcker
    {index: 129, src: acherSheet, x: 0, y: 0, pass:true ,spawn:false},
    {index: 130, src: acherSheet, x: 17, y: 0, pass:true ,spawn:false},
    {index: 131, src: acherSheet, x: 34, y: 0, pass:true ,spawn:false},
    {index: 132, src: acherSheet, x: 0, y: 17, pass:true ,spawn:false},
    {index: 133, src: acherSheet, x: 17, y: 17, pass:true ,spawn:false},
     { index: 134, src: acherSheet, x: 34, y: 17, pass: true, spawn: false, },
     
     
     
     {index: 135, src: acher2Sheet, x: 0, y: 0, pass: true, spawn: false },
     {index: 136, src: acher2Sheet, x: 17, y: 0, pass:true ,spawn:false},
     {index: 137, src: acher2Sheet, x: 34, y: 0, pass:true ,spawn:false},
     {index: 138, src: acher2Sheet, x: 0, y: 17, pass:true ,spawn:false},
     {index: 139, src: acher2Sheet, x: 17, y: 17, pass:true ,spawn:false},
     {index: 140, src: acher2Sheet, x: 34, y: 17, pass:true ,spawn:false,}, 
     {index: 141, src: acher2Sheet, x: 0, y: 34, pass:true ,spawn:false},
     {index: 142, src: acher2Sheet, x: 17, y: 34, pass:true ,spawn:false},
     {index: 143, src: acher2Sheet, x: 34, y: 34, pass:true ,spawn:false},
     {index: 144, src: acher2Sheet, x: 0, y: 51, pass: true, spawn: false, },
     {index: 145, src: acherSheet, x: 17, y: 51, pass:true ,spawn:false},
     { index: 146, src: acher2Sheet, x: 34, y: 51, pass: true, spawn: false },
     { index: 147, src: acher2Sheet, x: 0, y: 68, pass: true, spawn: false },
     {index: 148, src: acher2Sheet, x: 17, y: 68, pass:true ,spawn:false},
     {index: 149, src: acher2Sheet, x: 34, y: 68, pass:true ,spawn:false},
     {index: 150, src: acher2Sheet, x: 0, y: 85, pass: true, spawn: false, },
     {index: 151, src: acherSheet, x:17, y: 85, pass:true ,spawn:false},
     {index: 152, src: acher2Sheet, x: 34, y:85, pass:true ,spawn:false},


 ]

    export default mapDefinition;