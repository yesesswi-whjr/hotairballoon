var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadImage("hotairballoon2.png");
   balloonImage2=loadImage("hotairballoon2.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var balloonpos=database.ref("balloon/height")
  balloonpos.on("value",readpos)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    writepos(-10,0)
    balloon.addImage("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    
    balloon.scale=balloon.scale+0.05
  }
  else if(keyDown(RIGHT_ARROW)){
    writepos(10,0)
    balloon.addImage("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    
    balloon.scale=balloon.scale-0.05
  }
  else if(keyDown(UP_ARROW)){
    writepos(0,-10)
    balloon.addImage("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
  
    balloon.scale=balloon.scale-0.05
  }
  else if(keyDown(DOWN_ARROW)){
    writepos(0,10)
    balloon.addImage("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    
    balloon.scale=balloon.scale+0.05
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readpos(data){
position=data.val()
balloon.x=position.x
balloon.y=position.y


}
function writepos(x,y){
database.ref("balloon/height").set({x:position.x+x,y:position.y+y})


}