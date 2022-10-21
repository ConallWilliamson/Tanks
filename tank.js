
class Tank {
  constructor(game, x, y) {
    this.game = game;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.angle = -Math.PI;
    this.steering = p5.Vector.fromAngle(this.angle + Math.PI / 2);
    this.friction = this.acc.copy().mult(-1);


    this.maxSpeed = 3;
    this.maxForce = 1;
    this.r = 16;
    this.width = 50;
    this.height = 50;
    this.turret = new Turret(this.game, this, '#4b5320');
    this.controls = new Controls("KEYS");
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    this.applyForce(force);
  }

  move() {
    if (this.controls.forward) {
      this.steering.setHeading(this.angle + Math.PI / 2);
      this.steering.setMag(this.maxSpeed);
      this.steering.sub(this.vel);
      this.steering.limit(this.maxForce);
      this.applyForce(this.steering);
      this.friction = this.acc.copy().mult(-1);
      this.friction.limit(this.maxForce/2);
    }

    if (this.controls.reverse) {
      this.steering.setHeading(this.angle - Math.PI / 2);
      this.steering.setMag(this.maxSpeed);
      this.steering.sub(this.vel);
      this.steering.limit(this.maxForce);
      this.applyForce(this.steering);
      this.friction = this.acc.copy().mult(-1);
      this.friction.limit(this.maxForce/2);
    }

        
    if (this.acc.mag() < this.friction.mag()) {
      this.vel.set(0, 0);
      this.friction.set(0, 0);
    }



    if (this.vel.mag() != 0) {
      const flip = this.controls.reverse > 0 ?1:-1;
      if (this.controls.left) {
        this.angle += 0.05 * flip;
        this.steering.setHeading(this.angle);
        this.steering.sub(this.vel);
        this.steering.setMag(this.maxSpeed);
        this.steering.limit(this.maxForce);
        this.applyForce(this.steering);
      }
      if (this.controls.right) {
        this.angle -= 0.05 * flip;
        this.steering.setHeading(this.angle + Math.PI);
        this.steering.sub(this.vel);
        this.steering.setMag(this.maxSpeed);
        this.steering.limit(this.maxForce);
        this.applyForce(this.steering);
      }
      this.friction = this.acc.copy().mult(-1);
      this.friction.limit(this.maxForce/2);
      this.applyForce(this.friction);
    }

    
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    

  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.move();
    this.acc.set(0, 0);
    this.turret.draw();
    this.turret.update();
  }

  draw() {
    stroke('#4b5320');
    strokeWeight(2);
    fill('#4b5320');


    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }

}