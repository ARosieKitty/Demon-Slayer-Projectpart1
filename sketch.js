var canvas, game;
var background1, background2, gameTitle;
var form;

function preload() {
  background1 = loadImage ('background1.png');
  gameTitle = loadImage ('Demon Slayer Logo.PNG');
  background2= loadImage ('background2.png')

}

function setup() { 
  canvas = createCanvas(windowWidth,windowHeight);
  game = new Game();
  game.start();
}

function draw() {
  background(background1); 
 
  drawSprites();
}
function mousePressed(){

}

function windowResized (){
  resizeCanvas (windowWidth, windowHeight);
}