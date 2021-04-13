const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var world, engine, ground, ball, rope;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21;

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, 680, 1400, 40);
    ball = new Ball(200, 200, 120, 120);
    rope = new Rope(ball.body, {x : 600, y : 50});

    //First column
    b1 = new Box(1000, 320, 100, 70);
    b2 = new Box(1000, 320, 100, 70);
    b3 = new Box(1000, 320, 100, 70);
    b4 = new Box(1000, 320, 100, 70);
    b5 = new Box(1000, 320, 100, 70);
    b6 = new Box(1000, 320, 100, 70);
    b7 = new Box(1000, 320, 100, 70);

    //second column
    b8 = new Box(900, 320, 100, 70);
    b9 = new Box(900, 320, 100, 70);
    b10 = new Box(900, 320, 100, 70);
    b11 = new Box(900, 320, 100, 70);
    b12 = new Box(900, 320, 100, 70);
    b13 = new Box(900, 320, 100, 70);
    b14 = new Box(900, 320, 100, 70);

    //third column
    b15 = new Box(1100, 320, 100, 70);
    b16 = new Box(1100, 320, 100, 70);
    b17 = new Box(1100, 320, 100, 70);
    b18 = new Box(1100, 320, 100, 70);
    b19 = new Box(1100, 320, 100, 70);
    b20 = new Box(1100, 320, 100, 70);
    b21 = new Box(1100, 320, 100, 70);
}

function draw() {
    background(0);
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    
    b1.display("red");
    b2.display("yellow");
    b3.display("green");
    b4.display("blue");
    b5.display("grey");
    b6.display("purple");
    b7.display("gold");

    b8.display("red");
    b9.display("yellow");
    b10.display("green");
    b11.display("blue");
    b12.display("grey");
    b13.display("purple");
    b14.display("gold");
    
    b15.display("red");
    b16.display("yellow");
    b17.display("green");
    b18.display("blue");
    b19.display("grey");
    b20.display("purple");
    b21.display("gold");
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
}