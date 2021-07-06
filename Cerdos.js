class Cerdos extends ClaseBase{
  
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("sprites/enemy.png");
    this. Visibility = 255;
    this.width = width;
    this.height = height;
  
  }
  score(){
    if(this.width > 50 && this.height > 50){
      
      

    if(this.Visibility< 0 && this.Visibility > -105 ){
      score++;
    }
    } 
    else if(this.width < 51 && this.width > 35)
    {if(this.Visibility< 0 && this.Visibility > -55 ){
      score++;
    }
  }
  else{if(this.Visibility< 0 && this.Visibility > -30 ){
    score++;
  }
}
  }
  display(){
    
    //console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
      
    }
    else{
      push();
      this. Visibility = this. Visibility - 5;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x,this.body.position.y,this.width,this.height);
      
      World.remove(world,this.body);
      pop();
    }
  }
}