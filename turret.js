class Turret {
    constructor(x, y, r, colour) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.colour = colour;
        this.brightness = 0;
        this.direction = [0,0];

        this.muzzleX = 0;
        this.muzzleY = 0;

        this.barrelLength = this.r *1.5;

        

        this.bullets = [];
      }

      fire(){
        this.bullets.push(new Bullet(this, 1/100));
      }

      update(){
        this.direction = [mouseX, mouseY];

        let delX = this.direction[0] - this.x;
        let delY = this.direction[1] - this.y;
        let theta = atan2(delY, delX);
        this.muzzleX =  this.x + this.barrelLength * cos(theta);
        this.muzzleY =  this.y + this.barrelLength * sin(theta);

        if(this.bullets){
            for(let bullet of this.bullets){
                bullet.draw();
                bullet.move();
            }
        }
      }

      draw() {
        stroke(this.colour);
        strokeWeight(4);
        //fill(this.colour);
        noFill();
        fill(this.brightness, 125)
        ellipse(this.x, this.y, this.r * 2);
        //draw barrel
        
        strokeWeight(6)

        line(this.x, this.y, this.muzzleX,this.muzzleY);
      }
}