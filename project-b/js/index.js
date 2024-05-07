let scaleAdj = 0;

function setup() {
    background(255, 255, 240, 90);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-canvas-background");
}


function draw() {
    // background(255, 255, 240);
    scaleAdj += 0.003;
    scaleAdj = constrain(scaleAdj, 0, 0.5);

    for (let angle = 0; angle < 360; angle += 30) {
        push();
        // blendMode(ADD);
        translate(200, 200);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(250, 210, 210, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(0, 0);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(250, 210, 210, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1000, 0);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(250, 210, 210, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1200, 200);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(250, 210, 210, 50);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(800, 400);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(240, 220, 220, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1200, 800);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(240, 190, 190, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(0, 600);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(240, 220, 220, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(400, 800);
        rotate(radians(angle));
        scale(scaleAdj);
        // the spinning shape
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(240, 220, 220, 70);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();
    }

    for (let angle = 0; angle < 360; angle += 60) {
        push();
        // blendMode(ADD);
        translate(600, 400);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(400, 0);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(800, 800);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        translate(800, 200);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        translate(1200, 600);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();

        push();
        translate(200, 800);
        rotate(radians(angle));
        scale(scaleAdj);
        push();
        translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(random(200, 255), random(200, 255), 255, 30);
        ellipse(0, 0, random(50, 100), random(50, 100));
        pop();
        pop();
    }

    for (let angle = 0; angle < 360; angle += 90) {
        push();
        // blendMode(ADD);
        translate(200, 400);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(114, 201, 158, 10);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(800, 600);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(114, 201, 158, 10);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(0, 200);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(114, 201, 158, 10);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1000, 200);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(205, 220, 220, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1400, 600);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(205, 220, 220, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(600, 0);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(205, 220, 220, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(600, 800);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(205, 220, 220, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1400, 0);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        translate(70, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(114, 201, 158, 10);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();
    }

    for (let angle = 0; angle < 360; angle += 360) {
        push();
        // blendMode(ADD);
        translate(1000, 600);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(220, random(190, 200), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(400, 200);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(220, random(190, 200), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(0, 400);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(220, random(190, 200), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1400, 800);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(220, random(190, 200), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(400, 600);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(130, random(190, 250), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1400, 400);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(130, random(190, 250), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();

        push();
        // blendMode(ADD);
        translate(1200, 0);
        rotate(frameCount);
        scale(scaleAdj);
        // the spinning shape!
        push();
        // translate(100, 0);
        rotate(frameCount * 0.001);
        noFill();
        stroke(130, random(190, 250), 250, 30);
        ellipse(0, 0, 150, 50);
        ellipse(100, 0, 30, 20);
        pop();
        pop();
    }


}

