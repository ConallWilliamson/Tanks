class Game{
    constructor(width, height){
        this.width = width;
        this.height = height; 
        this.tank = new Tank(this, width/2, height/2);
        this.bullets = [];
        this.blocks = [];
    }

    update(){
        this.tank.update();


        if(this.bullets || this.blocks){
            for(let bullet of this.bullets){
                for(let block of this.blocks){
                    bullet.move();
                    if(rectIntersectCircle(block, bullet)){
                        block.destroyed = true;
                    }
                }
            }
        }
    }

    draw(){
        this.tank.draw();

        if(this.bullets){
            for(let bullet of this.bullets){
                bullet.draw();
            }
        }
        if(this.blocks){
            for(let block of this.blocks){
                block.draw();
            }
        }
    }
}