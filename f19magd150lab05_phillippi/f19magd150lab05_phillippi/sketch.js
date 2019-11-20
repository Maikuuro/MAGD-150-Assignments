let button;
var x= 120;
var y= 365;
var w= 40;
var h= 40;

var d= 363;
var e= 345;
var f= 60;
var g= 40;

var b,c;

var bspeed;

function setup() {
  createCanvas(500, 500);
  
  button=
    createButton('Light Switch');
  button.position(10, 10);
  
  button.mousePressed(changeBG);
  b= 125;
  c=height/2;
  bspeed=3;
  
}

function changeBG(){
  let val = random(220);
  background(val);
}
function draw() {
  
noStroke();
  fill(100);
  strokeWeight(3);
  push(0);
  stroke(160);
  line(150, 20, 380, 200);
  line(350, 20, 250, 100);
  pop();
  ellipse(250, 120, 75,75);
  triangle(150, 450, 250, 250, 350, 450);
  rect(50, 100, 400, 290);
  fill(30);
   ellipse(x,y,w,h);
  fill(45);
   rect(d, e, f, g);
   
  push();
  fill(220);
  textSize(9);
  s = "PRESS";
  text(s, 105, 370);
  pop();
  
  push();
  stroke(10);
  fill(70);
  rect(75, 115, 348, 225);
  if(mouseIsPressed)
    if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
    fill(20);
      rect(75,115,348,225);
      pop(); }
      
      push();
  fill(220);
  textSize(9);
  s = "CHANNEL";
  text(s, 370, 370);
  pop();
  
  push();
  stroke(10);
  fill(70);
  rect(75, 115, 348, 225);
  if(mouseIsPressed){
    if(mouseX>d && mouseX <d+f && mouseY>e && mouseY <e+g){
    fill(20);
      rect(75,115,348,225);
      pop();
      
      fill(220);
      rect(b,c,50,50);
      b+= bspeed;
      
      if(b-25 <= 0 || b+25>width){
        bspeed *= -1;
      }
    }
}
}