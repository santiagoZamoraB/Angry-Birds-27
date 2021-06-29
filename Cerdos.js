class Cerdos extends ClaseBase{
  
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this. Visibility = 255;
  }
  score(){
    if(this.Visibility< 0 && this.Visibility > -55 ){
      score++;
    } 

  }
  display(){
    
    //console.log(this.Visibility);
    if(this.body.speed < 8){
      super.display();
      
    }
    else{
      push();
      this. Visibility = this. Visibility - 5;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x,this.body.position.y,50,50);
      World.remove(world,this.body);
      pop();
    }
  }
}