class Turret {
    constructor(tank, colour) {
        this.tank = tank;
        this.x = tank.pos.x + tank.width/2;
        this.y = tank.pos.y + tank.height/2;
        
        this.r = tank.width/2;
        this.colour = colour;
        this.brightness = 0;
        this.direction = [0,0];

        let delX = this.direction[0] - this.x;
        let delY = this.direction[1] - this.y;
        this.theta = atan2(delY, delX);
        this.barrelLength = this.r *1.5;
        this.muzzleX =  this.x + this.barrelLength * cos(this.theta);
        this.muzzleY =  this.y + this.barrelLength * sin(this.theta);

        

        this.bullets = [];
      }

      fire(){
        this.bullets.push(new Bullet(this, 20));
      }

      update(){
        this.x = this.tank.pos.x;
        this.y = this.tank.pos.y;
        this.direction = [mouseX, mouseY];

        let delX = this.direction[0] - this.x;
        let delY = this.direction[1] - this.y;
        this.theta = atan2(delY, delX);
        this.muzzleX =  this.x + this.barrelLength * cos(this.theta);
        this.muzzleY =  this.y + this.barrelLength * sin(this.theta);

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
        
        strokeWeight(6);
        stroke(0);

        line(this.x, this.y, this.muzzleX,this.muzzleY);
        strokeWeight(2);
        stroke(255,0,0,50);
        line(this.muzzleX, this.muzzleY, mouseX, mouseY);
      }
}