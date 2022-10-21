class Bullet {
    constructor(turret, speed){
        this.turret = turret;
        this.x = turret.muzzleX;
        this.y = turret.muzzleY;
        this.r = 10;
        this.theta = turret.theta;

        this.direction = turret.direction;
        this.origin = [turret.x, turret.y]

        this.speed = speed;
        this.vel = createVector(this.direction[0] - this.origin[0], this.direction[1] - this.origin[1]).normalize();
    }

    draw(){
        stroke("yellow");
        fill("yellow");
        ellipse(this.x, this.y, this.r);
    }

    //idea for homing bullet?
    moveTowards(px, py) {
        let delX = px - this.x;
        let delY = py - this.y;
        let theta = atan2(delY, delX);
        this.x = this.x + this.vel * this.x * cos(theta);
        this.y = this.y + this.vel * this.y * sin(theta);
      }

      move(){
        this.x += this.vel.x * this.speed;
        this.y += this.vel.y * this.speed;
      }

      bounce(border){
        this.vel.reflect(border)
      }
}