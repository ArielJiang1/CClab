let imgs = [];
let imgFilenames = [
    "img/cloud.png",
    "img/lakenorain.png",
    "img/lakerain.png",
    "img/grass1.png",
    "img/grass1.png",
    "img/grass1.png",
    "img/grass1.png",
    "img/grass1.png",
    "img/grass2.png",
    "img/grass2.png",
    "img/grass2.png",
    "img/grass2.png",
    "img/tinyflower1.png",
    "img/tinyflower2.png",
    "img/tinyflower3.png",
    "img/tinyflower1.png",
    "img/tinyflower2.png",
    "img/tinyflower3.png",
    "img/tinyflower1.png",
    "img/tinyflower2.png",
    "img/tinyflower3.png",
    "img/tinyflower2.png",
    "img/tinyflower3.png",

];
let imgCount = 0;

let sounds = [];
let soundFilenames = [
    "sound/waterfall.wav",
    "sound/rain.wav",
];

let soundCount = -1;

let mySound1;
let mySound2;



function preload() {
    for (let i = 0; i < imgFilenames.length; i++) {
        let img = loadImage(imgFilenames[i]);
        // each images will be stored in the array
        imgs.push(img);
    }
    for (let i = 0; i < soundFilenames.length; i++) {
        let sound = loadSound(soundFilenames[i]);
        // each images will be stored in the array
        sounds.push(sound);
    }
    mySound1 = loadSound("sound/waterfall.mp3");
    mySound2 = loadSound("sound/rain.mp3");

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
        image(imgs[1], 500, 410); // lake1

    }
    else if (imgCount == 3) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 500, 410); // lake1
        image(imgs[2], 500, 400); // lake2

    }
    else if (imgCount == 4) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 500, 410); // lake1
        image(imgs[2], 500, 400); // lake2
        image(imgs[3], 80, 360); // grass1
        image(imgs[4], 50, 410); // grass1
        image(imgs[5], 30, 400); // grass1
        image(imgs[6], 980, 360); // grass1
        image(imgs[7], 960, 400); // grass1
    }
    else if (imgCount == 5) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 500, 410); // lake1
        image(imgs[2], 500, 400); // lake2
        image(imgs[3], 80, 360); // grass1
        image(imgs[4], 50, 410); // grass1
        image(imgs[5], 30, 400); // grass1
        image(imgs[6], 980, 360); // grass1
        image(imgs[7], 960, 400); // grass1
        image(imgs[8], 70, 500); // grass2
        image(imgs[9], 90, 530); // grass2
        image(imgs[10], 930, 490); // grass2
        image(imgs[11], 890, 540); // grass2
    }
    else if (imgCount >= 6) {
        image(imgs[0], 500, 160); // sky
        image(imgs[1], 500, 410); // lake1
        image(imgs[2], 500, 400); // lake2
        image(imgs[3], 80, 360); // grass1
        image(imgs[4], 50, 410); // grass1
        image(imgs[5], 30, 400); // grass1
        image(imgs[6], 980, 360); // grass1
        image(imgs[7], 960, 400); // grass1
        image(imgs[8], 70, 500); // grass2
        image(imgs[9], 90, 530); // grass2
        image(imgs[10], 930, 490); // grass2
        image(imgs[11], 890, 540); // grass2
        image(imgs[12], 920, 520); // flower
        image(imgs[13], 960, 480); // grass2
        image(imgs[14], 900, 500); // grass2
        image(imgs[15], 40, 520); // grass2
        image(imgs[16], 70, 480); // grass2
        image(imgs[17], 130, 500); // grass2
        image(imgs[18], 150, 540); // grass2
        image(imgs[19], 170, 530); // grass2
        image(imgs[20], 820, 540); // grass2
        image(imgs[21], 230, 530); // grass2
        image(imgs[22], 20, 440); // grass2
    }


    //console.log(mouseX, mouseY);

    // add other images and decide the locations

    // volume
    let volValue = map(mouseY, 0, height, 1.0, 0.0); // min(0.0) to max(1.0);
    volValue = constrain(volValue, 0.0, 1.0);
    mySound1.setVolume(volValue);
    mySound2.setVolume(volValue);
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

    if (soundCount < sounds.length) {
        soundCount++;
        console.log(soundCount);
    }
    if (soundCount > sounds.length) {
        soundCount = sounds.length;
    }

    // check whether the mouse position is close to the center of each imaage
    // and generate sound
    if (sounds[soundCount].isPlaying() == false) {
        sounds[soundCount].play();
    }


}



// function mouseClicked() {
//   translate(mouseX, mouseY);
//   scale(0.7);
//   imageMode(CENTER);
//   image(imgTree, 0, 0);
// }




