let tank;
let borders = [];

function setup(){
    
    //tank = new Tank(windowWidth/2,windowHeight/2);

    game = new Game(windowWidth, windowHeight);
    createCanvas(game.width, game.height);
    game.setup();
}



function draw(){
    background(100);

    
    //tank.update();
    //tank.draw();
    //tank.seek(createVector(mouseX,mouseY));

    for(border of borders){
        border.show();
    }
    game.draw();
    game.update();
    //tank.show();
    //tank.update();



}

function mousePressed(){
    game.tank.turret.fire();
}


