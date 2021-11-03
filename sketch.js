
var box;

function setup() {
  createCanvas(1000,1000);
  box=createSprite(200,200,70,30)
  box.shapeColor="green"
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown("left")){
  box.x=box.x-3

}
if(keyDown("right")){
  box.x=box.x+3
}
if(keyDown("up")){
  box.y=box.y-3

}
if(keyDown("down")){
  box.y=box.y+3
}
}




