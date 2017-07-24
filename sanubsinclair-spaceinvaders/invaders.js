var x = 500;
var y = 800;
var bullet = new Bullet();

function setup(){
    createCanvas(1000,1000)
}

function draw(){
    background(0);
    if(keyIsDown(32))
    if else(keyReleased(32));
    bullet.move();

    if (keyIsDown(LEFT_ARROW)){
        x-=5;
    if (x<=0)
    x = 0
    }
        
    if (keyIsDown(RIGHT_ARROW)) 
    x+=5;
    if (x>=970)
    x = 970

    // if(keyIsDown(32)){
    // fill("purple");
    // bulletY= bulletY - 5;
    // }
    // if(keyReleased(32))
    // rect(512,bulletY,5,20);

    fill(250,0,0);
    rect(x,y,30,30);
    ;if (x>=500){
        xSpeed = 0;
     }
     else if (x<=0){
    xSpeed = 0;
     }
     fill("white")

var h = 60
var w = 40
rect(100, 70,w,h);
rect(200, 70,w,h,);
rect(300, 70,w,h,);
rect(400, 70,w,h,);
rect(500, 70,w,h,);
rect(600, 70,w,h,);
rect(700, 70,w,h,);
rect(800, 70,w,h,);
rect(100, 200,w,h);
rect(200, 200,w,h,);
rect(300, 200,w,h,);
rect(400, 200,w,h,);
rect(500, 200,w,h,);
rect(600, 200,w,h,);
rect(700, 200,w,h,);
rect(800, 200,w,h,);
rect(100, 330,w,h);
rect(200, 330,w,h,);
rect(300, 330,w,h,);
rect(400, 330,w,h,);
rect(500, 330,w,h,);
rect(600, 330,w,h,);
rect(700, 330,w,h,);
rect(800, 330,w,h,);
rect(100, 460,w,h);
rect(200, 460,w,h,);
rect(300, 460,w,h,);
rect(400, 460,w,h,);
rect(500, 460,w,h,);
rect(600, 460,w,h,);
rect(700, 460,w,h,);
rect(800, 460,w,h,);

var c = color(105, 204, 5);
fill(c);

rect( 50, 680, 100, 90);
rect(220, 680, 100, 90);
rect(390, 680, 100, 90);
rect(560, 680, 100, 90);
rect(730, 680, 100, 90);


};

function Bullet(){
    this.x = x;
    this.y = y;
    this.velY = 5;
    this.move = function(){
        rect(this.x, this.y, 5, 10);
        this.y -= this.velY
    }
}   