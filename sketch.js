const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var bgImg;
var bg;
var sound;
var bg1;
var engine, world;
var snow = [];

function preload() {
  //snowflakeImg = loadImage("snow4.webp");
  bg= loadImage("snow2.jpg");
  //boyImg = loadImage("boy.jpg");
  bgImg = loadImage("snow3.jpg");
  sound = loadSound("Jingle Bells.mp3");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
 
}

function draw() {
  if(bg){
  background(bg);
}
  
 fill(255);
 textSize(15);
 text("Press Space To Start The Music And Change The Image", 50, 50);

 if(frameCount% 30 === 0){
  snow.push(new Snow(random(400,800),10,10));
}

for (var j = 0; j < snow.length; j++) {
   
  snow[j].display();
}

  drawSprites();

}

function keyPressed(){
  if(keyCode === 32){
    bg1 = createSprite(400, 180);
    bg1.addImage("bgImg",bgImg);
    bg1.scale = 0.8
    sound.play();
 }
}
