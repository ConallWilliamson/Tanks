let tank;
let vehicle;
let borders = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    tank = new Tank(windowWidth/2,windowHeight/2);
    borders.push(new Border(0,0, windowWidth, 0));
    borders.push(new Border(windowWidth, 0, windowWidth, windowHeight));
    borders.push(new Border(windowWidth, windowHeight, 0, windowHeight));
    borders.push(new Border(0, windowHeight,0,0));
}



function draw(){
    background(100);

    
    //tank.update();
    //tank.draw();
    //tank.seek(createVector(mouseX,mouseY));

    for(border of borders){
        border.show();
    }
    tank.show();
    tank.update();



}

function mousePressed(){
    tank.turret.fire();
}


