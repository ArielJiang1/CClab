let imgs = [];
let imgFilenames = [
    "img/sunset.png",
    "img/flower1.png",
    "img/flower1.png",
    "img/flower2.png",
    "img/flower2.png",
    "img/flower1.png",
    "img/flower1.png",
    "img/flower2.png",
    "img/flower2.png",
    "img/flower1.png",
    "img/flower1.png",
    "img/flower2.png",
    "img/flower2.png",


    "img/flower3.png",
    "img/flower3.png",
    "img/flower3.png",
    "img/flower4.png",
    "img/flower4.png",
    "img/flower4.png",


    "img/flower5.png",
    "img/flower5.png",
    "img/flower5.png",
    "img/flower5.png",
    "img/flower5.png",
    "img/flower6.png",
    "img/flower6.png",
    "img/flower6.png",
    "img/flower6.png",

    "img/flower7.png",
    "img/flower7.png",
    "img/flower7.png",
    "img/flower7.png",
    "img/flower7.png",
    "img/flower8.png",
    "img/flower8.png",
    "img/flower8.png",
    "img/flower8.png",
    "img/flower8.png",
    "img/flower8.png",
    "img/flower5.png",
    "img/flower5.png",

    "img/butterfly1.png",
    "img/butterfly1.png",
    "img/butterfly2.png",
    "img/butterfly2.png",
    "img/butterfly2.png",
];


let imgCount = 0;

let mySound1;



function preload() {
    for (let i = 0; i < imgFilenames.length; i++) {
        let img = loadImage(imgFilenames[i]);
        // each images will be stored in the array
        imgs.push(img);
    }

    mySound1 = loadSound("sound/wind.wav");

}


function setup() {
    // console.log("test");
    let canvas = createCanvas(1000, 570);
    canvas.parent("p5-canvas-container");
}

function draw() {
    background(255, 255, 240);

    imageMode(CENTER);

    if (imgCount == 0) {
        // don't draw anything
    }
    else if (imgCount == 1) {
        image(imgs[0], 500, 160); // sky
    }
    else if (imgCount == 2) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 600, 280); // flower1
        image(imgs[2], 500, 280); // flower1
        image(imgs[3], 700, 290);//flower2
        image(imgs[4], 400, 290);//flower2
        image(imgs[5], 680, 310);//flower1
        image(imgs[6], 320, 310);//flower1
        image(imgs[7], 300, 310);//flower2
        image(imgs[8], 700, 320); // flower2
        image(imgs[9], 900, 280); // flower1
        image(imgs[10], 100, 280); // flower1
        image(imgs[11], 800, 290);//flower2
        image(imgs[12], 200, 290);//flower2

    }
    else if (imgCount == 3) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 600, 280); // flower1
        image(imgs[2], 500, 280); // flower1
        image(imgs[3], 700, 290);//flower2
        image(imgs[4], 400, 290);//flower2
        image(imgs[5], 680, 310);//flower1
        image(imgs[6], 320, 310);//flower1
        image(imgs[7], 300, 310);//flower2
        image(imgs[8], 700, 320); // flower2
        image(imgs[9], 900, 280); // flower1
        image(imgs[10], 100, 280); // flower1
        image(imgs[11], 800, 290);//flower2
        image(imgs[12], 200, 290);//flower2
        image(imgs[13], 150, 360); // flower3
        image(imgs[14], 550, 380); // flower3
        image(imgs[15], 850, 380); // flower3
        image(imgs[16], 250, 390);//flower4
        image(imgs[17], 650, 390);//flower4
        image(imgs[18], 450, 360);//flower4
    }
    else if (imgCount == 4) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 600, 280); // flower1
        image(imgs[2], 500, 280); // flower1
        image(imgs[3], 700, 290);//flower2
        image(imgs[4], 400, 290);//flower2
        image(imgs[5], 680, 310);//flower1
        image(imgs[6], 320, 310);//flower1
        image(imgs[7], 300, 310);//flower2
        image(imgs[8], 700, 320); // flower2
        image(imgs[9], 900, 280); // flower1
        image(imgs[10], 100, 280); // flower1
        image(imgs[11], 800, 290);//flower2
        image(imgs[12], 200, 290);//flower2
        image(imgs[13], 150, 360); // flower3
        image(imgs[14], 550, 380); // flower3
        image(imgs[15], 850, 380); // flower3
        image(imgs[16], 250, 390);//flower4
        image(imgs[17], 650, 390);//flower4
        image(imgs[18], 450, 360);//flower4
        image(imgs[19], 470, 420); // flower5
        image(imgs[20], 150, 410); // flower5
        image(imgs[21], 330, 380);//flower5
        image(imgs[22], 750, 390);//flower5
        image(imgs[23], 950, 410);//flower5
        image(imgs[24], 70, 390);//flower6
        image(imgs[25], 390, 410);//flower6
        image(imgs[27], 930, 320); // flower6

    }
    else if (imgCount == 5) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 600, 280); // flower1
        image(imgs[2], 500, 280); // flower1
        image(imgs[3], 700, 290);//flower2
        image(imgs[4], 400, 290);//flower2
        image(imgs[5], 680, 310);//flower1
        image(imgs[6], 320, 310);//flower1
        image(imgs[7], 300, 310);//flower2
        image(imgs[8], 700, 320); // flower2
        image(imgs[9], 900, 280); // flower1
        image(imgs[10], 100, 280); // flower1
        image(imgs[11], 800, 290);//flower2
        image(imgs[12], 200, 290);//flower2
        image(imgs[13], 150, 360); // flower3
        image(imgs[14], 550, 380); // flower3
        image(imgs[15], 850, 380); // flower3
        image(imgs[16], 250, 390);//flower4
        image(imgs[17], 650, 390);//flower4
        image(imgs[18], 450, 360);//flower4
        image(imgs[19], 470, 420); // flower5
        image(imgs[20], 150, 410); // flower5
        image(imgs[21], 330, 380);//flower5
        image(imgs[22], 750, 390);//flower5
        image(imgs[23], 950, 410);//flower5
        image(imgs[24], 70, 390);//flower6
        image(imgs[25], 390, 410);//flower6
        image(imgs[27], 930, 320); // flower6
        image(imgs[28], 50, 450); // flower7
        image(imgs[29], 250, 410); // flower7
        image(imgs[30], 430, 480);//flower7
        image(imgs[31], 750, 490);//flower7
        image(imgs[32], 1000, 570);//flower7
        image(imgs[33], 70, 510);//flower8
        image(imgs[34], 380, 530);//flower8
        image(imgs[35], 630, 470); // flower8
        image(imgs[36], 200, 540);//flower8
        image(imgs[37], 550, 580);//flower8
        image(imgs[38], 880, 500); // flower8
        image(imgs[39], 680, 540); // flower5
        image(imgs[40], 270, 570); // flower5

    }
    else if (imgCount >= 6) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 600, 280); // flower1
        image(imgs[2], 500, 280); // flower1
        image(imgs[3], 700, 290);//flower2
        image(imgs[4], 400, 290);//flower2
        image(imgs[5], 680, 310);//flower1
        image(imgs[6], 320, 310);//flower1
        image(imgs[7], 300, 310);//flower2
        image(imgs[8], 700, 320); // flower2
        image(imgs[9], 900, 280); // flower1
        image(imgs[10], 100, 280); // flower1
        image(imgs[11], 800, 290);//flower2
        image(imgs[12], 200, 290);//flower2
        image(imgs[13], 150, 360); // flower3
        image(imgs[14], 550, 380); // flower3
        image(imgs[15], 850, 380); // flower3
        image(imgs[16], 250, 390);//flower4
        image(imgs[17], 650, 390);//flower4
        image(imgs[18], 450, 360);//flower4
        image(imgs[19], 470, 420); // flower5
        image(imgs[20], 150, 410); // flower5
        image(imgs[21], 330, 380);//flower5
        image(imgs[22], 750, 390);//flower5
        image(imgs[23], 950, 410);//flower5
        image(imgs[24], 70, 390);//flower6
        image(imgs[25], 390, 410);//flower6
        image(imgs[27], 930, 320); // flower6
        image(imgs[28], 50, 450); // flower7
        image(imgs[29], 250, 410); // flower7
        image(imgs[30], 430, 480);//flower7
        image(imgs[31], 750, 490);//flower7
        image(imgs[32], 1000, 570);//flower7
        image(imgs[33], 70, 510);//flower8
        image(imgs[34], 380, 530);//flower8
        image(imgs[35], 630, 470); // flower8
        image(imgs[36], 200, 540);//flower8
        image(imgs[37], 550, 580);//flower8
        image(imgs[38], 880, 500); // flower8
        image(imgs[39], 680, 540); // flower5
        image(imgs[40], 270, 570); // flower5
        image(imgs[41], 150, 240);//butterfly1
        image(imgs[42], 60, 480);//butterfly1
        image(imgs[43], 750, 190);//butterfly2
        image(imgs[44], 490, 330);//butterfly2
        image(imgs[45], 940, 530);//butterfly2
    }


    //console.log(mouseX, mouseY);

    // add other images and decide the locations

    // volume
    let volValue = map(mouseY, 0, height, 1.0, 0.0); // min(0.0) to max(1.0);
    volValue = constrain(volValue, 0.0, 1.0);
    mySound1.setVolume(volValue);
}


function mousePressed() {
    if (imgCount < imgs.length) {
        imgCount++;
        console.log(imgCount);
    }

    // limit the imgCount based on the total number of images
    if (imgCount > imgs.length) {
        imgCount = imgs.length;
    }

    // check whether the mouse position is close to the center of each imaage
    // and generate sound
    if (mySound1.isPlaying() == false) {
        mySound1.play();
    }

}



// function mouseClicked() {
//   translate(mouseX, mouseY);
//   scale(0.7);
//   imageMode(CENTER);
//   image(imgTree, 0, 0);
// }




