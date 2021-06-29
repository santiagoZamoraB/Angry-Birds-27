class Ground {
  
  constructor(x,y,width,height){
  var opciones_fijas = {
  isStatic: true
}
  this.body = Bodies.rectangle(x,y,width,height,opciones_fijas);
  this.width = width;
  this.height = height;
  World.add(world,this.body);
  }
  display(){
  var p = this.body.position;
  rectMode(CENTER);
  fill(250,45,23);
  rect(p.x,p.y,this.width,this.height);
  }
} 