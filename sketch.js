var cat,cat1,cat2,cat3,garden,mouse1,mouse2,mouse3,mouse4;
var mouseG,catG
var 
function preload() {
    //load the images here
    cat=addImage("cat1.png");
    cat1=addImage("cat2.png");
    cat2=addImage("cat3.png");
    cat3=addImage("cat4.png");
    garden=addImage("garden.png");
    mouse1=addImage("mouse1.png");
    cat3=addImage("mouse2.png");
    cat3=addImage("mouse3.png");
    cat3=addImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprites(500,400,50,50);
   cat2=createSprites(500,400,50,50);
   cat1=createSprites(500,400,50,50);
   cat3=createSprites(500,400,50,50);
   garden=createSprites()
   catG=createGroup;
   mouseG=createGroup;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(catG)isColliding(mouseG);{
    
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
