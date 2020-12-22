var bullet;
var wall;
var bulletSpeed,weight;
//var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);

  bulletSpeed=random(233,231)
  weigt=random(30,52)
  thickness=random(22,83)
  
  wall =createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230)

  bullet=createSprite(50,200,20,30);
  bullet.velocityX=bulletSpeed;
  bullet.shapeColor="white";

}
function draw() {
 background(255,255,255); 

 if(hasCollided(bullet,wall)){
   bullet.velocityX=0
  var damage=(bulletSpeed*bulletSpeed*weigt*0.5)/thickness
  *thickness*thickness;

  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}

 // console.log (car.x) 
 
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lwall.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}