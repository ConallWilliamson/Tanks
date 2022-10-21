let tank;
let borders = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    //tank = new Tank(windowWidth/2,windowHeight/2);

    game = new Game(windowWidth, windowHeight);
    game.blocks.push(new Block(game, 100, 100 , 50, 50));
    game.blocks.push(new Block(game, 100, 200 , 50, 50));
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


