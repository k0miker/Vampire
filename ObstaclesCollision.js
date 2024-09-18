export default class ObstacleCollision {
  constructor(obstacles) {
    this.obstacles = obstacles;
  }
  collision(player) {
    for (let i = 0; i < this.obstacles.length; i++) {
     
      if(this.isColliding(player, this.obstacles[i]))return true;
    }
  }

  isColliding(player, obstacle) {    
    const topCollision = 
    player.y - player.height/2 < obstacle.y + obstacle.height &&
    player.y + player.height/2 > obstacle.y &&
    player.x + player.width/2 > obstacle.x && 
    player.x - player.width/2 < obstacle.x + obstacle.width;

    if (topCollision){
           
      return true;
    }
   }
}
