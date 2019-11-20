function setup() {
  // put setup code here
  createCanvas(500, 500);
  colorMode(HSB);
  background(175, 20, 90);
  frameRate(50);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here

    
  background(175, 20, 90);
  circle(250, 500- frameCount, 200 - 150, 100 / 3);

  circle(300, 450- frameCount, 200 - 175, 100 / 4);
  circle(200, 400- frameCount, 200 - 120, 100 / 5);
  circle(150, 300- frameCount, 200 - 100, 100 / 3);

 x1= 150
 y1= 300
 x2= mouseX
 y2= mouseY

a= 50
b= 450
c= lerp(a, b, 0.2);
d= lerp(a, b, 0.8);

e= 50

strokeWeight(3);
stroke(0);
point(a, e);
point(b, e);

  arc(250, 365, 350, 350, 0, PI);
  rect(50, 350, 400, 20, 200);
  
  float(3.05, -9.998, PI);
  float(400.05, -7.998, PI);
  float(20, 10);

  let x= 100
  print('The value of x is' + x);
  let y= 50
  print('The value of y is' + y);

value= 50
m= map(value, 0, 250, 0, width);
ellipse(m, 325, 10, 10);


  }