
var bg, backgroundImg;
var stoneGroup,stoneImage;
var diamondGroup,diamondImage;
var diamondScore=0;



function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg=loadImage("images/iron.png");
  stoneImage=loadImage("images/stone.png");
  diamondImage=loadImage("images/diamond.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg=createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=4;
  
  ironman=createSprite(150,50);
  ironman.addImage(ironmanImg);
  ironman.scale=0.5;
  ground=createSprite(200,585,400,10);
  ground.visible=false;

  stoneGroup=new Group();
  diamondGroup=new Group();


 
}

function draw() {
  if (bg.y > 500){
    bg.y=bg.width/4;
    if(ironman.y<200)
    ironman.y=200;
    if(ironman.y<50)
    ironman.y=50;
  }
  if(keyDown("space") ) {
    ironman.velocityY = -16;
    
  }

  ironman.velocityY = ironman.velocityY + 0.5;
  
  ironman.collide(ground);
  
  generateStone();
  for(var i=0;i<(stoneGroup).length;i++){
      var temp=(stoneGroup).get(i);
      if(temp.isTouching(ironman))
      ironman.collide(temp); 
  }
  generateDiamond();
  for(var i=0;i<(diamondGroup).length;i++){
  var temp=(diamondGroup).get(i);
  if(temp.isTouching(ironman)){  diamondScore++;
    temp.destroy();
    temp=null;
  }
  }
    
  
    drawSprites();
    textSize(25);
    fill("white")
    text("Diamonds Collected:" + diamondScore,500,50);

  
}
    function generateStone(){
      if(frameCount%70===0){
          var stone=createSprite(1200,120,40,10);
          stone.x=random(50,450);
          stone.y=random(50,450);
          stone.addImage(stoneImage);
          stone.scale=0.5;
          stone.velocityY=-3;
          stone.lifetime=250;
          stoneGroup.add(stone);

      }
}

      function generateDiamond(){
        if(frameCount%70===0){
          var diamond=createSprite(1000,100,20,5);
          diamond.x=random(40,430);
          diamond.y=random(30,420);
          diamond.addImage(diamondImage);
          diamond.scale=0.4;
          diamond.velocityY=-4;
          diamond.lifetime=250;
          diamondGroup.add(diamond);
        }
        
      }