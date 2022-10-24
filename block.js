
class Block {
    constructor(game, x, y, width, height) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.destroyed = false;
      this.borders = [new Border(this.x, this.y, this.x + this.width, this.y),
                      new Border(this.x + this.width, this.y, this.x + this.width, this.y + this.height), 
                      new Border(this.x + this.width, this.y + this.height, this.x, this.y + this.height), 
                      new Border(this.x, this.y + this.height, this.x, this.y), 
                      ]
    }
  
    draw() {
      if(!this.destroyed){
        for(let border of this.borders){
          border.show();
        }
      }
    }

    checkCollision(circle){
      for(let border of this.borders){
        if(lineIntersectCircle(border, circle)){
          this.destroyed = true;
          circle.bounce(border);
          break;
        }
      }
    }
  }