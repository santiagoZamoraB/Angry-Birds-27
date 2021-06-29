class ClaseBase{
  
constructor(x,y,width,height,angle){
    var option_box = {
    'restitution': 0.8, 
    'friction': 0.4,
    'density':1.0
    }
  this.body = Bodies.rectangle(x,y,width,height,option_box);
  this.width = width;
  this.height = height;
  this.image = loadImage("sprites/base.png");
  World.add(world,this.body);
  }
  display(){
  var p = this.body.position;
  var a = this.body.angle; 
  push();
  translate(p.x,p.y);
  rotate(a);
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height);
  pop();
  }
}