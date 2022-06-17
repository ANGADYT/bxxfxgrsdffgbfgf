var road,bg,roadImg,taxi,taxiImg,coin;
var obstacle1,obstacle2
var coinGroup
var score = 0;


function preload(){
roadImg=loadImage("./road.png")
taxiImg=loadImage("./taxi.png")
coinImg=loadImage("./goldCoin.png")
obstacle1Img=loadImage("./obstacle1.png")
}

function setup(){

  createCanvas(1000,4000)


taxi=createSprite(500,3390,10,10)
taxi.addImage(taxiImg);

coinGroup= new Group();
obstaclesGroup=new Group();

}

function draw() {
  background(roadImg)


  if(keyDown("up_arrow")){
    taxi.y=taxi.y-20
  }
  if(keyDown("down_arrow")){
    taxi.y=taxi.y+20
  }  
taxi.x=World.mouseX





  spawnCoins();
  spawnObstacle();
if(taxi.isTouching(coinGroup)){
  coinGroup.destroyEach()
  score=score+1
}

if(taxi.isTouching(obstaclesGroup)){
  obstacle.destroyEach()

}






  drawSprites();
  textSize(100)
  text("Score:"+score,600,100)
}

function spawnCoins(){
if (frameCount % 60 === 0) {
  coin = createSprite(600,100,40,10);
  coin.y = Math.round(random(100,4000));
  coin.x = Math.round(random(100,4000));
  coin.addImage(coinImg);
  coin.scale = 0.2;

 coinGroup.add(coin);
 }
}
function spawnObstacle(){
  if (frameCount % 60 === 0) {
    obstacle1 = createSprite(600,100,40,10);
    obstacle1.y = Math.round(random(100,4000));
    obstacle1.x = Math.round(random(100,4000));
    obstacle1.addImage(obstacle1Img);
    obstacle1.scale = 0.1;
  
    obstaclesGroup.add(obstacle1);
   }
  }