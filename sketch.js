//images
var mangoImg,treeImg,boyImg,stoneImg;

var mango,mango2,mango3,mango4,mango5,mango6,mango7;

var string;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	mangoImg = loadImage("sprites/mango.png");
	boyImg = loadImage("sprites/boy.png");
	stoneImg = loadImage("sprites/stone.png");
	treeImg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	tree = new Tree(900,400,60,200);

	mango = new Mango(819,360,200,200);
	mango2 = new Mango(750,350,200,200);
	mango3 = new Mango(820,100,200,200);
	mango4 = new Mango(800,278,200,200);
	mango5 = new Mango(850,200,200,200);
	mango6 = new Mango(720,264,200,200);
	mango7 = new Mango(940,270,200,200);

	boy = new Boy(200,200,60,60);

	stone = new Stone(200,200,40,40);

	string = new String(stone.body,{x:100,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  boy.display();

  stone.display();

  string.display();

  drawSprites();
 
}