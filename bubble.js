let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let colour = color(random(0, 255), random(0, 255), random(0, 255))
    let r = random(10, 50);
    let b = new Bubble(x, y, r, colour);
    bubbles.push(b);
  }
}


function draw() {
  background(100);
  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = 100;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = overlapping - 15;
      }
      if(b.contains(mouseX,mouseY)){
        overlapping = 250;
      }
    }
    b.changeBrightness(overlapping);
  }
}


// function mousePressed(){
//   for(let i = bubbles.length - 1; i >= 0; i--){
//     if(bubbles[i].contains(mouseX, mouseY)){
//       bubbles.splice(i,1);
//     }
//   }
// }

function mouseDragged() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].moveTowards(mouseX, mouseY);
  }
}

// function mouseDragged() {
//   if (mouseButton === RIGHT) {
//     for (let i = bubbles.length - 1; i >= 0; i--) {
//       if (bubbles[i].contains(mouseX, mouseY)) {
//         bubbles.splice(i, 1);
//       }
//     }
//   } else {
//     let r = random(10, 50);
//     let colour = color(random(0, 255), random(0, 255), random(0, 255))
//     let b = new Bubble(mouseX, mouseY, r, colour);
//     bubbles.push(b);
//   }
// }

class Bubble {
  constructor(x, y, r, colour) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colour = colour;
    this.brightness = 0;
  }

  changeBrightness(brightness) {
    this.brightness = brightness;
  }

  intersects(bubble) {
    let d = dist(this.x, this.y, bubble.x, bubble.y);
    return (d < this.r + bubble.r);
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  moveTowards(px, py) {
    let delX = px - this.x;
    let delY = py - this.y;
    let theta = atan2(delY, delX);
    this.x = this.x + (1 / 240) * this.x * cos(theta);
    this.y = this.y + (1 / 240) * this.y * sin(theta);//* sin(theta);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(this.colour);
    strokeWeight(4);
    //fill(this.colour);
    noFill();
    fill(this.brightness, 125)
    ellipse(this.x, this.y, this.r * 2);
  }
}