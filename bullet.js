class Bullet {
    constructor(turret, vel){
        this.turret = turret;
        this.x = turret.muzzleX;
        this.y = turret.muzzleY;
        this.direction = turret.direction;
        this.origin = [turret.x, turret.y]

        this.vel = vel;
    }

    draw(){
        stroke("yellow");
        fill("yellow");
        ellipse(this.x, this.y, 10);
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
        let delX = this.direction[0] - this.origin[0];
        let delY = this.direction[1] - this.origin[1];
        let theta = atan2(delY, delX);
        this.x = this.x + this.vel * this.origin[0] * cos(theta);
        this.y = this.y + this.vel * this.origin[1] * sin(theta);
      }
}