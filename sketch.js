function setup() {
  createCanvas(400, 400);
  height = 200;
  width = 200;
}

function draw() {
  stroke(255,0,0);
  strokeWeight(10);
  background(255,0,255);
  fill(0);
  ellipse(50, 150, width,height);
  line(10,10,40,40);
  fill(255,255,0);
  triangle(30, 75, 58, 20, 86, 75);
}