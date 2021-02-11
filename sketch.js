
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,boxleft,boxright,boxbottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,360,20);
	ground=new Ground(400,398,800,20);

	boxleft=Bodies.rectangle(600,340,10,35);
	boxright=Bodies.rectangle(760,340,10,40);
	boxbottom=Bodies.rectangle(680,375,200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(boxleft.position.x,boxleft.position.y,10,80);
  rect(boxright.position.x,boxright.position.y,10,80);
  rect(boxbottom.position.x,boxbottom.position.y,150,10);
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}



