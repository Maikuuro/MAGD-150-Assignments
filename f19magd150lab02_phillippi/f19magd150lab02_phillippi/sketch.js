function setup() {
  // put setup code here
  createCanvas(500, 500);
  colorMode(HSB);
  background(235, 50, 10);
}

function draw() {
  // put drawing code here
  fill(200, 45, 50);
  ellipse(0, 500, 400, 420);

  fill(200, 50, 30);
  ellipse(0, 500, 400, 400);

  fill(240, 0, 75);
  ellipse(500, 500, 640, 640);
  fill(5, 200, 20);
  noStroke();
  ellipse(500, 500, 630, 630);
  fill(5, 200, 15);
  noStroke();
  ellipse(500, 500, 600, 600);

  fill(100, 200, 7);
  ellipse(400, 100, 100, 100); 
  fill(100, 200, 15);
  ellipse(345, 120, 60, 60);
  fill(100, 200, 5);
  ellipse(350, 125, 60, 60); 

  fill(240, 0, 65);
  arc(0, 0, 65, 65, 0, HALF_PI);
  fill(240, 0, 55);
  arc(0, 0, 55, 55, 0, HALF_PI);
  fill(240, 0, 50);
  arc(0, 0, 50, 50, 0, HALF_PI);

  noFill();
  stroke(20);
  bezier(100, 100, 0, 50, 100, 0, 400, 0, 0, 0, 490, 0);

  fill(240, 0, 100);
  triangle(100, 95, 105, 100, 95, 100);

}