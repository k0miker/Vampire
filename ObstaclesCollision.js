export default class ObstacleCollision {
  constructor(obstacles, vendorPosition) {
    this.obstacles = obstacles;
    this.vendorPosition = vendorPosition;
  }
  collision(entity) {
    for (let i = 0; i < this.obstacles.length; i++) {  
      
      if (this.isColliding(entity, this.obstacles[i])){        
     // console.log("Kollision mit Hindernis erkannt");
        return true;
      }   
      if (this.isColliding(entity, this.vendorPosition)){
        console.log("Kollision mit Vendor erkannt");
        
          return "vendor";  
        }      
    }    
   return false;
    
  }

  isColliding(entity, obstacle) {
    const Collision =
      entity.y - entity.height / 2 < obstacle.y + obstacle.height &&
      entity.y + entity.height / 2 > obstacle.y &&
      entity.x + entity.width / 2 > obstacle.x &&
      entity.x - entity.width / 2 < obstacle.x + obstacle.width;

    if (Collision) {
      return true;
    } 
    return false;
  }
}
