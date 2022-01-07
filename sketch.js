var baground,santa;
var bagroundImg,santaImg;
var raindeer, raindeerImg
var gift, giftImg
function preload(){
  bagroundImg = loadImage("baground.png");
  santaImg = loadImage("santa.png");
  raindeerImg = loadImage("raindeer.png")
  giftImg = loadImage("gift.png")
}

function setup(){
  
  createCanvas(600,600);
  
// Moving background
baground=createSprite(300,300)
baground.addImage(bagroundImg);

//creating santa running
santa = createSprite(200,400,80,80);
santa.scale =1;
santa.addImage(santaImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  santa.collide(edges);
  santa.x=World.mouseX
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
  if (select_sprites  == 1) 
  { createraindeer(); }
  else if  (select_sprites == 2) {createraindeer(); }
else {  createraindeer(); } }
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) 
  { creategift(); }
  else if  (select_sprites == 5) {
    creategift(); }
else {  creategift(); } }
  drawSprites();
}
function createraindeer() {
raindeer=createSprite(random(50,350),40,10,10)
raindeer.addImage(raindeerImg);
raindeer.scale=0.1;
raindeer.velocityY=5;
raindeer.lifetime=150;
}
function creategift() {
gift=createSprite(random(50,350),40,10,10)
gift.addImage(giftImg);
gift.scale=0.1;
gift.velocityY=5;
gift.lifetime=150;
}
