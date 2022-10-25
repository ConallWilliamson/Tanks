class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.widthMargin = this.width / 50;
        this.heightMargin = this.height / 50;
        this.tank = new Tank(this, 3 * this.widthMargin, this.height -  3 * this.heightMargin);
        this.bullets = [];
        this.blocks = [];
    }

    setup() {

        this.blocks.push(new Block(this, this.widthMargin, this.heightMargin, this.width - 2 * this.widthMargin, this.height - 2 * this.heightMargin, 'black'));
        this.blocks.push(new Block(this, 5*this.widthMargin, this.height/2, this.width - 10*this.widthMargin, 50, 'white'));
        this.blocks.push(new Block(this, this.width/2, 5*this.heightMargin, 50, this.height - 10*this.heightMargin, 'white'));

    }

    update() {
        this.tank.update();

        if (this.bullets) {
            for (let bullet of this.bullets) {
                if(bullet.bounceCount > bullet.bounceLimit) {this.bullets.splice(this.bullets.indexOf(bullet), 1)};
                bullet.move();
                if (this.blocks) {
                    for (let block of this.blocks) {
                        block.checkCollision(bullet);
                    }
                }
            }
        }
    }

    draw() {


        if (this.blocks) {
            for (let block of this.blocks) {
                block.draw();
            }
        }

        if (this.bullets) {
            for (let bullet of this.bullets) {
                bullet.draw();
            }
        }

        this.tank.draw();
    }
}