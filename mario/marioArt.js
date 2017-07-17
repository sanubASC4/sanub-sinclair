function setup(){
    createCanvas(300,300);
    background(900);
    framework(100);
}
function draw(){
    background(244, 248, 252);
    line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouse + "->" + mouse)
}

if(mouseClicked){
    var value = 0;
    function draw(){
      fill(value);
      line(mouseX, mouseY, pmouseX, pmouseY); 
      value = value + 5;
      if(value > 255){
          value = 0;
      }
    }

}