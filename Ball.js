class Ball {
    constructor(x, y, width, height) {
        var options = {density : 1, frictionAir : 0.005};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        fill("pink");
        strokeWeight(2);
        stroke("white");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}