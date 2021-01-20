var movingRect,fixedRect,fixedRect2,fixedRect3;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
 movingRect=createSprite(100,200,40,40)
 movingRect.shapeColor="green"
 fixedRect=createSprite(150,200,40,100)
 fixedRect.shapeColor="green"
fixedRect2=createSprite(350,200,40,100)
fixedRect2.shapeColor='green'
fixedRect3=createSprite(550,200,40,100)
fixedRect3.shapeColor='green'

rect1 = createSprite(50,100,20,20);
rect1.shapeColor="pink";
rect1.velocityY= 2;

rect2 = createSprite(50,350,20,20);
rect2.shapeColor="purple";
rect2.velocityY = -2;

}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY
  

  fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";
   fixedRect2.shapeColor = "green";
   fixedRect3.shapeColor = "green";

 if(isTouching(movingRect,fixedRect)){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 } 

 if(isTouching(movingRect,fixedRect2)){
  fixedRect2.shapeColor = "red";
  movingRect.shapeColor = "red";
} 
if(isTouching(movingRect,fixedRect3)){
  fixedRect3.shapeColor = "red";
  movingRect.shapeColor = "red";
} 

bounceoff(rect1,rect2);
  
  drawSprites();
  
}


