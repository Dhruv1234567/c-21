var fixedRect, movingRect,fixedRect2,fixedRect3,fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 700, 50, 80);
  fixedRect2 = createSprite(900,300,80,80);
  fixedRect3 = createSprite(100,300,80,80);
  //fixedRect4 = createSprite(400,70,40,60);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(600,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  movingRect.velocityY = 3;
  fixedRect.velocityY = -3;
  fixedRect3.velocityX = 3;
  fixedRect2.velocityX = -3;
  fixedRect2.shapeColor = "yellow";
  fixedRect3.shapeColor = "brown";
}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,fixedRect);
  bounceoff(fixedRect2,fixedRect3);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
//istouching(movingRect,fixedRect)
//istouching(movingRect,fixedRect2)
//istouching(movingRect,fixedRect3)
//istouching(movingRect,fixedRect4)
    
 
    
  drawSprites();
}
