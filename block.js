
class Block {
    constructor(game, x, y, width, height) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.destroyed = false;
    }
  
    draw() {
      if(!this.destroyed){
        stroke('black');
        strokeWeight(2);
        noFill();  
        rect(this.x, this.y, this.width, this.height);
      }

    }
  
  }