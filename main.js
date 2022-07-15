let tank = new Tank(300,300,100,200);

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background(100);
    tank.draw();


}

function mousePressed(){
    tank.turret.fire();
}


