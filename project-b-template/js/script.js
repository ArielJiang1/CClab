let xSpeed, ySpeed;
let x, y;
let r, g, b;
let additiveAngle = 0;
let scaleAdj = 0;


function setup() {
  createCanvas(800, 500);
  // background(0)

  x = 250;
  y = 200;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);

  r = 255;
  g = 255;
  b = 0;


}

function star(a, b, size, spd) {
  push();
  translate(a, b);
  rotate(frameCount * spd);
  ellipse(0, 0, size, size / 5);
  ellipse(0, 0, size / 5, size);
  circle(0, 0, size / 2);

  pop();
}

function draw() {
  background(0, 3);

  scaleAdj += 0.003;
  scaleAdj = constrain(scaleAdj, 0, 2.0);

  // the background
  noStroke();
  fill(255, random(255), random(255), 100);
  star(random(width), random(height), random(5, 30));

  // check mouse interaction
  if (mouseIsPressed) {
    //
    r = r - 2;
    g = g - 2;
    additiveAngle += 0.3;
    scaleAdj -= 0.005;
  } else {
    r = r + 1;
    g = g + 1;
    additiveAngle -= 0.05;
  }
  r = constrain(r, g, 255);

  // draw pattern
  for (let angle = 0; angle < 360; angle += 45) {
    push();
    blendMode(ADD);
    translate(width / 2, height / 2);
    scale(scaleAdj);
    rotate(radians(angle + additiveAngle));

    // the spinning shape
    push();
    translate(100, 0);
    rotate(frameCount * 0.001);

    x = x + xSpeed;
    y = y + ySpeed;
    if (x < 0 || x > width) {
      xSpeed = xSpeed * -1;
    }
    if (y < 0 || y > height) {
      ySpeed = ySpeed * -1;
    }

    noFill();
    strokeWeight(1)
    stroke(r, random(255), random(255), 100);
    ellipse(x, y, 150, 50);
    ellipse(50, 0, 30, 20);
    ellipse(30, 0, 10, 10);
    ellipse(0, 0, 30, 20);
    ellipse(20, 0, 10, 10);

    pop();

    pop();
  }
}

