class Tank{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.turret = new Turret(this,"blue");
    }

    draw(){
        stroke('black');
        fill('black')
        rect(this.x, this.y, this.width, this.height);
        this.turret.draw();
        this.turret.update();
    }
}