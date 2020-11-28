function istouching(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
   movingRect.shapeColor = "mediumspringgreen";
   fixedRect.shapeColor = "mediumspringgreen";
  }
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  }

  function bounceoff(movingRect,fixedRect){
      if (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
          movingRect.velocityY=-1*movingRect.velocityY;
          fixedRect.velocityY=-1*fixedRect.velocityY;
      }
      if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
          fixedRect.velocityX=-1*fixedRect.velocityX;
          movingRect.velocityX=-1*movingRect.velocityX;
      }
      
  }