function setup() {
  createCanvas(400, 500);
  noLoop();
}

function draw() {
  background(255); // Blanco
  noStroke();

  // Círculo rojo
  fill(197, 76, 31);
  ellipse(85, 85, 115, 115);

  // Barra amarilla 
  fill(230, 198, 35);
  rect(30, 200, 270, 25);
  
   // Trapecio
  fill(226, 226, 232);
  quad(175, 300, 215, 300, 235, 410, 195, 410);
 
 
  // Cruz
  push();
  translate(175, 165);
  rotate(radians(-10));//rotación
  fill(20, 29, 142);
  rect(5, -85, 40, 8); // horizontal
  rect(20, -95, 8, 390);    // vertical
  pop();


  // Cuadrado
  push();
  translate(230, 125); 
  rotate(radians(38));
  fill(18, 18, 22);
  rect(-35, -35, 130, 130);
  pop();


  // Barra café
  fill(162, 76, 40);
  push();
  translate(155, 265);
  rotate(radians(18));
  rect(45, 90, 30, 120);
  pop();

  // Barra amarilla
  fill(230, 198, 35);
  push();
  translate(110, 250);
  rotate(radians(18));
  rect(73, 130, 20, 130);
  pop()

  
  // Barra roja
  fill(197, 76, 31);
  push();
  translate(235, 340);
  rotate(radians(-25));
  rect(-35, 120, 100, 22);
  rotate(radians(-25));
pop()
  // Barra amarilla abajo
  fill(230, 198, 35);
  push();
  translate(280, 350);
  rotate(radians(-25));
  rect(-25, 120, 80, 18);
  pop()
}