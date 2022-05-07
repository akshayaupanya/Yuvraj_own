var bird,ground;
var topGroup,bottomGroup;
var top,bottom,rand;
function preload(){
  bird_img = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png");
bg = loadImage("farm_land.png")
top_img=loadImage("top.png")
top_img1=loadImage("top1.png")
top_img2=loadImage("top2.png")
top_img3=loadImage("top3.png")
top_img4=loadImage("top4.png")
bottom_img = loadImage("bottom.png")
bottom_img1 = loadImage("bottom1.png")
bottom_img2 = loadImage("bottom2.png")
bottom_img3 = loadImage("bottom3.png")
bottom_img4 = loadImage("bottom4.png")
}

function setup(){
  createCanvas(800,600);
ground = createSprite(400,300,1600,20);
ground.addImage(bg);
ground.scale=3;
ground.velocityX = -2;
bird = createSprite(50,300);
bird.addAnimation("flying",bird_img)
bird.scale = 0.5



}
function draw(){
  background(0);
if(ground.x<200){
  ground.x = 400;
}
 spawnbot();
  spawntop();
  drawSprites();
}
function spawntop(){
  if(frameCount % 200 === 0){
    top1 = createSprite(width,50,10,10)
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: top1.addImage(top_img1);
              break;
      case 2: top1.addImage(top_img1);
              break;
      case 3: top1.addImage(top_img2);
              break;
      case 4: top1.addImage(top_img3);
              break;
      case 5: top1.addImage(top_img4);
              break;
      case 6: top1.addImage(top_img1);
              break;
      default: break;
    }
   // top1.addImage(top_img);
    top1.velocityX = -2;
  }

}
function spawnbot(){
if(frameCount % 200 === 0){
  bottom = createSprite(width,500,10,10);
  var rand1 = Math.round(random(1,5));
    switch(rand1) {
      case 1: bottom.addImage(bottom_img);
              break;
      case 2: bottom.addImage(bottom_img1);
              break;
      case 3: bottom.addImage(bottom_img2);
              break;
      case 4: bottom.addImage(bottom_img3);
              break;
      case 5: bottom.addImage(bottom_img4);
              break;
      case 6: bottom.addImage(bottom_img);
              break;
      default: break;
    }

  //bottom.addImage(bottom_img);
  bottom.velocityX = -2;
}
}