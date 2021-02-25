const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 

var engine,world;
var ball;

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  
  engine=Engine.create();
  world=engine.world;
 ground=new Ground(displayWidth/2,displayHeight/2,displayWidth,20);
ball=new Ball();


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
ball.display();
ground.display();


}                                       