
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1500,600,20,120);

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	  }

	ball = Matter.Bodies.circle(200,100,20,ball_options, 0);
	World.add(world,ball);

	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20); 
  ground.show();
  leftSide.show();
  rightSide.show();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x: 0, y: 0}, {x: 85, y: -85});
	}
}




