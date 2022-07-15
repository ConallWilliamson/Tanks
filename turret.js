class Turret {
    constructor(tank, colour) {
        this.x = tank.x + tank.width/2;
        this.y = tank.y + tank.height/2;
        
        this.r = tank.width/2;
        this.colour = colour;
        this.brightness = 0;
        this.direction = [0,0];


        let delX = this.direction[0] - this.x;
        let delY = this.direction[1] - this.y;
        this.theta = calculateTheta(this.x, this.y, this.direction[0], this.direction[1]);

        this.muzzleX =  this.x + this.barrelLength * Math.cos(this.theta);
        this.muzzleY =  this.y + this.barrelLength * Math.sin(this.theta);

        this.barrelLength = this.r *1.5;

        

        this.bullets = [];
      }

      fire(){
        this.bullets.push(new Bullet(this, 5));
      }

      update(){
        this.direction = [mouseX, mouseY];

        this.theta = calculateTheta(this.x, this.y, this.direction[0], this.direction[1])
        this.muzzleX =  this.x + this.barrelLength * Math.cos(this.theta);
        this.muzzleY =  this.y + this.barrelLength * Math.sin(this.theta);

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
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
        //draw barrel
        
        strokeWeight(6);

        line(this.x, this.y, this.muzzleX,this.muzzleY);

        strokeWeight(1);
        stroke('red');
        line(this.muzzleX, this.muzzleY, mouseX, mouseY)
      }
}