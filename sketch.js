
function preload() {
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      Cat.velocityx = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");


  }


}

