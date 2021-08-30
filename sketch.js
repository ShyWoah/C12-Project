var road, path;
var runner, runningjaxon;
var bomb;
var coin;
var energyDrink;
function preload(){
  //pre-load images
  road.loadImage("path.png");
  runningJaxon.loadAnimation( "runner1.png", "runner2.png");

}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage("path", road);
  path.velocityY = 5;
  path.scale = 1.2;

  //code to reset the background
  if(path.y > 400){
    path.y = height/2
  };

  // Running Jaxon
  runner = createSprite(50,150,60,60);
  runner.addAnimation("running", runningJaxon);
  
 
  
}


function draw() {
  background(0);
 runner.x = mouseX;

 createEdgesSprite();
 runner.collide(leftEdge);
 runner.collide(rightEdge)
}
