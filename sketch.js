
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var stone;
var sling;
var tree;
var mango1 , mango2 , mango3  , mango4 , mango5

function setup() {
	createCanvas(1500, 700);
	
	engine = Engine.create();
	world = engine.world;

	boy = new Boy(200 , 350);

	stone = new Stone(200 , 350 );

	sling = new Sling(stone.body , {x:250 , y: 440});

	tree = new Tree(800 , 10);

	mango1 = new Mango(1250 , 70 );
	mango2 = new Mango(1100 , 250 );
	mango3 = new Mango(900  , 200 );
	mango4 = new Mango(1400 , 230 );
	mango5 = new Mango(1000 , 50 );

	Engine.run(engine);
	console.log(stone)

   
}


function draw() {
  
  background(220);
  
  
  boy.display();

  tree.display(); 
 
  stone.display();

  sling.display();

 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone , mango1);
  detectCollision(stone , mango2);
  detectCollision(stone , mango3);
  detectCollision(stone , mango4);
  detectCollision(stone , mango5);
 
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body ,{x: mouseX , y: mouseY});
}

function mouseReleased()
{
  sling.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		sling.attach(stone);  
	}
}

function detectCollision(lstone , lmango)
{ 
	// var stoneBodyPosition , mangoBodyPosition;

	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , 
		mangoBodyPosition.y);

	if(distance <= lmango.radius + lstone.radius)
	{
		Matter.Body.setStatic(lmango.body , false);
	}

}



