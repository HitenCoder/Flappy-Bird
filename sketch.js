var backImg;
var obs1Img,obs2Img;
var upobGroup,downobGroup;
var bird,birdImg;

function preload(){
  backImg=loadImage("wp6956942.png");

  obs1Img=loadImage("Capture.png");
  obs2Img=loadImage("Capture1.png");

  birdImg=loadImage("h.png");
}

function setup() {
  createCanvas(1000,600);
  
  back=createSprite(500,200,10,10);
  back.addImage("back",backImg);
  back.velocityX=-4;
  back.x = back.width/2;

  bird=createSprite(100,300,10,10);
  bird.addImage("bird",birdImg);
  bird.scale=0.4;

  upobGroup= new Group();
  downobGroup= new Group();
}

function draw() { 
  background(0);
  console.log(back.x);
  
  if (back.x < 120){
    back.x = back.width/2;
  }

  if(keyWentDown("space")){
    bird.velocityY=-10;
} 
 bird.velocityY= bird.velocityY +0.5;
  spawnUpOb();
  spawnDownOb();

  drawSprites();
}

function spawnUpOb(){
  if (frameCount % 40 === 0) {
    var upob = createSprite(1000,40,40,10);
      upob.addImage(obs1Img);
      upob.scale = random(1.5,0.7);
      upob.velocityX = -3;
    
     //assign lifetime to the variable
     upob.lifetime = 280;
    
    
    
    //add each cloud to the group
    upobGroup.add(upob);
  }
 }

 function spawnDownOb(){
  if (frameCount % 40 === 0) {
    var downob = createSprite(1000,560,40,10);
    downob.addImage(obs2Img);
    downob.scale = random(1.5,0.7);
    downob.velocityX = -3;
    
     //assign lifetime to the variable
     downob.lifetime = 280;
    
    
    
    //add each cloud to the group
    downobGroup.add(downob);
  }
 }

