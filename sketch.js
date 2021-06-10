var player1,player2,position;



function setup() {
  createCanvas(800,500);
  createSprite(400, 200, 50, 50);
  player1=createSprite(48,42,50,50);
  player2=createSprite(752,42,50,50)
}

function draw() {
  background(20);  
  drawSprites();
}

player1Position.on("value",readPosition)


function draw(){
  background("Cyan");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}



function readPosition(data){
  position = data.val();
  console.log(position.x);
  player1.x = position.x;
  player1.y = position.y;
}
