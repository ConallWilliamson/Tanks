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
            bullet.move();
                for(let block of this.blocks){
                    block.checkCollision(bullet);
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