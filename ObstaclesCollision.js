export default class ObstacleCollision {
  constructor(obstacles) {
    this.obstacles = obstacles;
  }
  collision(entity) {
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.isColliding(entity, this.obstacles[i])) return true;
    }
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
  }
}
