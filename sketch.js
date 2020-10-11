var bullet,Speed,wall;
var thickness,weight;

function setup() {
  createCanvas(1000,100);
  thickness = random(22,83);
  bullet  = createSprite(50, 50, 20, 15);
  wall = createSprite(800,50,thickness,50);
  wall.shapeColor = color(80,80,80);
  
  Speed = random(+10,+25);
  weight = random(32,52);
}
function draw() {
  background("black");  
  bullet.velocityX=Speed;
  
    if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage = 0.5*weight*Speed*Speed/(thickness*thickness*thickness)
      if (damage>10){
        bullet.shapeColor=color(255,0,0);
      }
      if (damage<10){
        bullet.shapeColor=color(0,255,0);
      }
    }
    console.log(Speed); 
  drawSprites();
} 
function hasCollided(bullet,wall){
   var bulletleftrightedge = bullet.x+bullet.width
   var wallleftrightedge = wall.x;
   if (bulletleftrightedge>=wallleftrightedge){
      return true;
   }
   return false;
}
