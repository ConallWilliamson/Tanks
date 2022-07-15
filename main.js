let turret = new Turret(400,400,100,"blue");


function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background(100);
    turret.draw();
    turret.update();

}

function mousePressed(){
    turret.fire();
}


