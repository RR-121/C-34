class Box {
    constructor(x, y, width, height) {
        var options = {restitution : 0.8, friction : 1, density : 0.04};
        this.body = Bodies.rectangle(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(colour) {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(colour);
        strokeWeight(2);
        stroke("white");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}