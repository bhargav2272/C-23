var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,stand1,stand2,stand3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	stand1=createSprite(400,355,50,10);
	stand1.shapeColor=color("red")

	stand2=createSprite(370,330,10,60);
	stand2.shapeColor=color("red")

	stand3=createSprite(430,330,10,60);
	stand3.shapeColor=color("red")

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("Down_Arrow")) {
	packageSprite.velocityY = 12;
  }

if(packageSprite.isTouching(stand1)){
	packageSprite.velocityY = 0;
}
  drawSprites();
 
}




