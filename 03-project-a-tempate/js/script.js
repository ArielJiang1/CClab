/*console.log("test");*/

let xSpeed, ySpeed;
let x, y;
let r, g, b;

function setup() {

    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");

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

    // the background
    noStroke();
    fill(255, random(255), random(255), 100);
    star(random(width), random(height), random(5, 30));

    for (let angle = 0; angle < 360; angle += 45) {
        push();
        blendMode(ADD);

        if (mouseIsPressed) {
            translate(width / 2, height / 2);
            rotate(radians(angle - 10));
            scale(frameCount * 0.003);
            r = r + 1;
        } else {
            translate(width / 2, height / 2);
            rotate(radians(angle));
            scale(frameCount * 0.003);
            r = r - 1;
        }
        r = constrain(r, 0, 255);


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
        stroke(255, random(255), random(255), 100);
        // stroke(255, 30);
        ellipse(x, y, 150, 50);
        ellipse(50, 0, 30, 20);
        ellipse(30, 0, 10, 10);
        ellipse(0, 0, 30, 20);
        ellipse(20, 0, 10, 10);


        pop();

        pop();
    }


}



/*
function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
}

function draw() {
    background(random(255));
}*/