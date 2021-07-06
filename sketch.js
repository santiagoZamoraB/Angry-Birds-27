const Engine = Matter. Engine;
const World  = Matter. World;
const Bodies = Matter. Bodies;
const Constraint = Matter.Constraint;

var img
var bg = "sprites/bg.png";
var engine, world;
var ground;
var pltfma
var resortera;

var bird;

var cerdo1;
var cerdo2;
var cerdo3;
var cerdo4;
var cerdo5;
var cerdo6;

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
 

 getBck();
}

function setup(){
createCanvas(1200,400)
  engine = Engine. create();
  world = engine. world;
  ground = new Ground(600,390,1200,20);
  pltfma = new Ground(100,295,300,170);
  score = 0; 
  
  
  bird = new Birds(100,200);
  
  cerdo1 = new Cerdos(600,380,50,50);
  cerdo2 = new Cerdos(600,310,50,50);
  cerdo3 = new Cerdos(600,250,50,50);
  cerdo4 = new Cerdos(600,150,75,75);
  cerdo5 = new Cerdos(500,150,30,30);
  cerdo6 = new Cerdos(700,150,30,30);

  
  caja1 = new CajasBase(670,380,70,70);
  caja2 = new CajasBase(530,380,70,70);
  caja3 = new CajasBase(670,310,70,70);
  caja4 = new CajasBase(530,310,70,70);
  caja5 = new CajasBase(530,260,70,70);
  caja6 = new CajasBase(670,260,70,70);
  
  tronco1 = new Tronco(600,350,300,PI / 2);
  tronco2 = new Tronco(600,300,300,PI / 2);
  tronco3 = new Tronco(600,180,450,PI / 2);
 
  gameState = "OnSling";

  resortera = new Resortera(bird.body,{x:193,y:55});
}

function draw(){
 background(img);
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
  cerdo5.display();
  cerdo6.display();

  cerdo1.score();
  cerdo2.score();
  cerdo3.score();
  cerdo4.score();
  cerdo5.score();
  cerdo6.score();

  caja1.display();
  caja2.display();
  caja3.display();
  caja4.display();
  caja5.display();
  caja6.display();
  
  tronco1.display();
  tronco2.display();
  tronco3.display();

  if(score ===60 ){
    text("¡¡YOU WIN!!",600,140);
    gameState = "XD";
  }
  
  
}
function mouseDragged(){
  
  if(gameState === "OnSling"){
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
function getBck(){
  var fecha = new Date()
  var hora = fecha.getHours();
  if(hora >05 && hora < 21 ){
    bg = "sprites/bg.png"
  }
  else{
    bg = "sprites/bg2.jpg"
  }
  img = loadImage(bg);
  console.log(hora);
}