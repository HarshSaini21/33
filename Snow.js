class Snow{
    constructor(x,y,r){
        var options = {
            restitution: 0.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.rectangle(x,y,r,options);
        World.add(world ,this.body);
        this.image = loadImage("snow4.webp");

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}