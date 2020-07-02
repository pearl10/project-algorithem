var fixedrect,movingrect,runningrect1,runningrect2
var fixedrect1,fixedrect2

function setup() {
  createCanvas(800,400);
  
 fixedrect=createSprite(100,200,50,100);
 movingrect=createSprite(200,200,100,50);
 runningrect1=createSprite(300,0,50,100);
 runningrect2 =createSprite(300,400,100,50);
 fixedrect1=createSprite(300,200,50,100);
 fixedrect2 =createSprite(500,200,50,100);


 fixedrect.shapeColor="green"
 movingrect.shapeColor="green"
 fixedrect1.shapeColor="green"
 fixedrect2.shapeColor="green"
 runningrect1.shapeColor="pink"
 runningrect2.shapeColor="yellow"

 fixedrect.debug=true
movingrect.debug=true
runningrect1.debug=true
 runningrect2.debug=true
 fixedrect1.debug=true
 fixedrect2.debug=true
 runningrect1.velocityY=4;
 runningrect2.velocityY=-4;
}

function draw() {
  background(0);  
  
  movingrect.y=World.mouseY
  movingrect.x=World.mouseX
  
if(isTouching(fixedrect2,movingrect)){
  fixedrect2.shapeColor="blue"
    movingrect.shapeColor="blue"
}else{
  fixedrect2.shapeColor="green"
    movingrect.shapeColor="green"
}

bounceOff(runningrect1,runningrect2);
 
    drawSprites();
}

















