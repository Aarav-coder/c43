var player;
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
player = createSprite(displayWidth/4,displayHeight/4);
wolf = createSprite(100,100);
lion = createSprite(100,100);
dog = createSprite(100,100);
panther = createSprite(100,100);
leftbutton = createButton('←');
rightbutton = createButton('→');
upbutton = createButton('↑');
downbutton = createButton('↓');
leftbutton.position(50,displayHeight-200);
rightbutton.position(100,displayHeight-200);
upbutton.position(75,displayHeight-225);
downbutton.position(75,displayHeight-175);
wall1 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);

}

function draw() {
  background(0); 
 
  drawSprites();
}