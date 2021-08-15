const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;

function setup() {
    var canvas = createCanvas(1200, 900);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    ground = new Ground(200, height, 2000, 20)
    pig1 = new Pig(810, 320, 50, 50)
    log1 = new Log(810, 250, 300, PI / 2)

    box3 = new Box(700, 240, 70, 70)
    box4 = new Box(920, 240, 70, 70)
    pig2 = new Pig(810, 240, 50, 50)
    log2 = new Log(810, 180, 300, PI / 2)

    box5 = new Box(810, 160, 70, 70)
    log3 = new Log(760, 120, 150, PI / 7)
    log4 = new Log(870, 120, 150, -PI / 8)

    bird = new Bird(100, 100, 50, 50)
}

function draw() {
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display()
    pig2.display()
    log1.display()
    box3.display()
    box4.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    ground.display();
    bird.display()





}