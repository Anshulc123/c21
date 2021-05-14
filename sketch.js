var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
 
 // fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
 // movingRect = createSprite(400,200,80,30);
 //movingRect.shapeColor = "green";
//  movingRect.debug = true;
  car=createSprite(300,200,40,40)
  wall=createSprite(800,200,20,100)
  car.shapeColor="red";
  wall.shapeColor="white";
  car.velocityX=4;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
if (isTouching(car,wall))
 {
car.shapeColor="green";
 }
 bounce(car,wall)
  drawSprites();
}
