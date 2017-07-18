function setup(){
    createCanvas(windowWidth,windowHeight);
   

}
var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;

function draw() {

    background(25);
   //distance from center of the screen
        var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

     fill ("white");
         ellipse (x, y, 20, 20);

 //bouncing horizontally
     x = x + xspeed;
    
   if (x > windowWidth || x < 0)  {
        xspeed = -xspeed;
     }

 //bouncing veritcally
     y = y + yspeed;

 if (y > windowHeight || y < 0) {
          yspeed = -yspeed;
     }

    text("PONG!!!", 545,100);
    textSize(64);
    fill("White");
    rect(300,300, 10,40);
    fill("White");
    rect(1000,300,10,40);
    fill("White");
}