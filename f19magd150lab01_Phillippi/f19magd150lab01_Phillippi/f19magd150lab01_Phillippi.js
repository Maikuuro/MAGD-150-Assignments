function setup() {
  // put setup code here
createCanvas(500, 500);
background(200);
}

function draw() {
  // put drawing code here
  strokeWeight(6.0);
  strokeCap(ROUND);
  line(0, 375, 500, 375);
  line(150, 325, 350, 325);
  fill(100);
rect(145, 165, 210, 210);
fill(60);
rect(0, 375, 500, 375);
fill(80);
triangle(250, 30, 120, 165, 380, 165);
fill(125);
rect(225, 275, 50, 100);
rect(165, 295, 35, 45);
rect(300, 295, 35, 45);
triangle(110, 375, 0, 500, 0, 375);
triangle(390, 375, 500, 375, 500, 500);
noStroke();
fill(80);
ellipseMode(CENTER);
fill(50);
ellipse(380, 355, 50, 50);
ellipse(120, 355, 50, 50);
fill(20);
point(100, 100);
point (400, 400);
}