class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
  }
display(){
  if(this.body.speed){
    super.display();

  }

  else{
    World.remove(world,this.body);
  this.Visiblity=this.Visiblity-25;
  tint(255,this.Visiblity)
  image(this.image,this.body.position.x,this.body.position.y,50,50);

  }
console.log(this.body.speed)

}

};