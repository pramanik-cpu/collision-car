var car,wall;
var speed,weight




function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,heigth/2);
  wall.shapeColour=80,80,80;
  car.velocityX=speed;
  speed= random(55,98);
  weight= random(400,1500);

}

function draw() {
  background(255,255,255); 
  if(wall.x-Car.x<(car.width+wall.width/2) ){
    car.velocityX=0;
    var deformation=0.5* weight * speed * speed/22509;
      if(deformation>180){
      car.shapeColour=(250,0,0);
      }
        if(deformation>100){
           car.shapeColour=(230,230,0);
        }
      if(deformation<100){
        car.shapeColour=(0,255,0);
      }


  } 
  drawSprites();
}