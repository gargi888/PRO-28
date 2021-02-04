
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, shot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mangoImg;
var world,boy,boyImg;

function preload(){
	boyImg=loadImage("images/boy.png");
	}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(270,500);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1000,110,15);
	mango3=new Mango(1050,200,15);
	mango4=new Mango(1000,250,15);
	mango5=new Mango(970,300,15);
	mango6=new Mango(900,250,15);
	mango7=new Mango(950,170,15);
	mango8=new Mango(1130,240,15);
	mango9=new Mango(1090,230,15);
	mango10=new Mango(1160,150,15);

	stoneObj=new Stone(150,680,15);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	shot=new SlingShot(stoneObj.body,{x:235,y:420})
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  boy.display();

  stoneObj.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);

  text("Press SPACE to get a second chance to play!!!",50,50);
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
    shot.fly();
}
function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		shot.attach(stoneObj.body);
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}