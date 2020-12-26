
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score;
var survivalTime = 0;
var gameState = "play";


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.124

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  
  bananaGroup = new Group(); 
  obstacleGroup = new Group();
  
}


function draw() {
  background("white")
    monkey.collide(ground);
    monkey.velocityY = monkey.velocityY + 2.5;
  
  if (ground.x < 100){
    ground.x = 400;
  }
  
  if(keyDown("space") && (monkey.y > 306)){
    monkey.velocityY = -28;
  }
  
  food();
  obstacles();
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.destroy();
  }
  
  stroke("black");
  textSize(20);
  fill("grey");
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time: " + survivalTime,50,50);
 
  drawSprites();
}

function food() {
   if(frameCount%80===0){
     banana = createSprite(400,160,25,25);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.125;
     banana.velocityX = -5;
     banana.lifetime = 130
     
     
     monkey.depth = banana.depth + 1;
     bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(400,335,25,25);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -8;
    obstacle.lifetime = 120;
    obstacle.scale = 0.18;
    
    obstacleGroup.add(obstacle);
  }
}


