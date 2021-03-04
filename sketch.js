
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,285)     
	paperobject=new paperball(500,5,50);

  keyPressed()

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperobject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paperobject.Body,paperobject.body.position,{x:130,y:-145})
    }
    };

  
