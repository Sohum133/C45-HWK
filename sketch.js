var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie1, zombie2, zombie2Img, zombie1Img, zombieGroup;
var bullet


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  bgImg = loadImage("assets/background_tree.png");

  zombie1Img = loadImage("assets/zombie.png");
  zombie2Img = loadImage("assets/zombie2.png");

  bullet = loadImage("assets/bullet.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 4.5
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombieGroup = new Group();


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("SPACE")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("A")||touches.length>0){
 player.x = player.x-30
}
if(keyDown("D")||touches.length>0){
  player.x = player.x+30
}

//if(){

//}


//release bullets and change the image of shooter to shooting position when space is pressed
if(mousePressed(bullets)){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnZombie();


drawSprites();

}

function spawnZombie(){
  if(frameCount % 150 === 0){
    
    var zombie = createSprite(1200,400,40,10);

    zombie.y = Math.round(random(200,600));
    zombie.velocityX = -3;
    var rand = Math.round(random(1,2));
    
    switch(rand){
      case 1: zombie.addImage(zombie1Img);
      break;
      case 2: zombie.addImage(zombie2Img);
      break;
      default: break;

    }
    zombie.scale = 0.3;
    zombie.lifetime = 400
  }

}

function bullets(){
  
}
