const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  
}


function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  // the sprites 
  ground = new Ground(600,height,1200,20);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
// the displaying of sprites 

ground.display();

drawSprites();
}