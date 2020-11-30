const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1, box2;
var engine,world;
var ground;

function setup() {
  createCanvas(400,400);

  //Engine creation
  engine = Engine.create();
  //Initializing world
  world = engine.world;

  box1=new Box(175,100,50,50);
  box2 = new Box(200,35,50,80);
  ground = new Ground(200,390,400,10);
}

function draw() {
  background("black");
  
  Engine.update(engine);

box1.display();
box2.display();
ground.display();
 
}