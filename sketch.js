const Engine = Matter. Engine;
const World  = Matter. World;
const Bodies = Matter. Bodies;
const Constraint = Matter.Constraint;

var i
var engine, world;
var ground;
var pltfma
var resortera;

var bird;

var cerdo1;
var cerdo2;
var cerdo3;
var cerdo4;

var caja1;
var caja2;
var caja3;
var caja4;
var caja5;
var caja6;

var tronco1;
var tronco2;
var tronco3;

var gameState

var score;

function preload() {
 i = loadImage("sprites/bg.png");
}

function setup(){
createCanvas(1200,400)
  engine = Engine. create();
  world = engine. world;
  ground = new Ground(600,390,1200,20);
  pltfma = new Ground(100,295,300,170);
  score = 0; 
  
  
  bird = new Birds(100,200);
  
  cerdo1 = new Cerdos(600,250);
  cerdo2 = new Cerdos(600,120);
  cerdo3 = new Cerdos(600,20);
  cerdo4 = new Cerdos(700,0);
  
  caja1 = new CajasBase(670,250,70,70);
  caja2 = new CajasBase(530,250,70,70);
  caja3 = new CajasBase(670,100,70,70);
  caja4 = new CajasBase(530,100,70,70);
  caja5 = new CajasBase(530,25,70,70);
  caja6 = new CajasBase(670,25,70,70);
  
  tronco1 = new Tronco(600,150,300,PI / 2);
  tronco2 = new Tronco(600,50,300,PI / 2);
  tronco3 = new Tronco(600,10,450,PI / 2);
 
  gameState = "OnSling";

  resortera = new Resortera(bird.body,{x:193,y:55});
}

function draw(){
 background(i);
 Engine.update(engine);

  textSize(25);
  text("score = "+score,1000,50);
  
  ground.display();
  pltfma.display();
  resortera.display();
  
  bird.display();
  
  cerdo1.display();
  cerdo2.display();
  cerdo3.display();
  cerdo4.display();

  cerdo1.score();
  cerdo2.score();
  cerdo3.score();
  cerdo4.score();

  caja1.display();
  caja2.display();
  caja3.display();
  caja4.display();
  caja5.display();
  caja6.display();
  
  tronco1.display();
  tronco2.display();
  tronco3.display();
  
  
}
function mouseDragged(){
  
  if(gameState != "Launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  resortera.fly();
  gameState = "Launched"
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:193,y:55});
    resortera.atached(bird.body);
    gameState = "OnSling";
  }
}