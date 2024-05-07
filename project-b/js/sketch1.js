let imgs = [];
let imgFilenames = [
  "img/sky.png",
  "img/tree4.png",
  "img/tree4copy.png",
  "img/tree3.png",
  "img/tree3copy.png",
  "img/tree2.png",
  "img/tree2copy.png",
  "img/leaf1-2.png",
  "img/leaf1-1.png",
  "img/tree1.png",
  "img/tree1copy.png",
  "img/tree.png",
  "img/leaf1.png",
  "img/leaf2.png",
  "img/leaf3.png",

];

let sounds = [];
let soundFilenames = [
  "sound/birds.wav",
  "sound/leaves.wav",
  "sound/birds.wav",
  "sound/environment.wav",
  "sound/birds.wav",
];


let imgCount = 0;
let soundCount = -1;


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

  // mySound1 = loadSound("sound/birds.wav");
  // mySound2 = loadSound("sound/plants.wav");
  // mySound3 = loadSound("sound/leaves.wav");
  // mySound4 = loadSound("sound/environment.wav");
}


function setup() {
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
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
  }
  else if (imgCount == 2) {
    image(imgs[0], 500, 160); // sky
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
    image(imgs[3], 640, 290);//tree3
    image(imgs[4], 360, 290);//tree3
  }
  else if (imgCount == 3) {
    image(imgs[0], 500, 160); // sky
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
    image(imgs[3], 640, 290);//tree3
    image(imgs[4], 360, 290);//tree3
    image(imgs[5], 680, 310);//tree2
    image(imgs[6], 320, 310);//tree2
  }
  else if (imgCount == 4) {
    image(imgs[0], 500, 160); // sky
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
    image(imgs[3], 640, 290);//tree3
    image(imgs[4], 360, 290);//tree3
    image(imgs[5], 680, 310);//tree2
    image(imgs[6], 320, 310);//tree2
    image(imgs[7], 490, 390);//leaf1-2
  }
  else if (imgCount == 5) {
    image(imgs[0], 500, 160); // sky
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
    image(imgs[3], 640, 290);//tree3
    image(imgs[4], 360, 290);//tree3
    image(imgs[5], 680, 310);//tree2
    image(imgs[6], 320, 310);//tree2
    image(imgs[7], 490, 390);//leaf1-2
    image(imgs[8], 450, 400);//leaf1-1
    image(imgs[9], 700, 300);//tree1
    image(imgs[10], 300, 300);//tree1
  }
  else if (imgCount >= 6) {
    image(imgs[0], 500, 160); // sky
    image(imgs[1], 600, 280); // tree4
    image(imgs[2], 400, 280); // tree4
    image(imgs[3], 640, 290);//tree3
    image(imgs[4], 360, 290);//tree3
    image(imgs[5], 680, 310);//tree2
    image(imgs[6], 320, 310);//tree2
    image(imgs[7], 490, 390);//leaf1-2
    image(imgs[8], 450, 400);//leaf1-1
    image(imgs[9], 700, 300);//tree1
    image(imgs[10], 300, 300);//tree1
    image(imgs[11], 700, 300);//tree
    image(imgs[12], 380, 420);//leaf1
    image(imgs[13], 570, 440);//leaf2
    image(imgs[14], 200, 430);//leaf3
  }










  //console.log(mouseX, mouseY);

  // add other images and decide the locations

  // volume
  // let volValue = map(mouseY, 0, height, 1.0, 0.0); // min(0.0) to max(1.0);
  // volValue = constrain(volValue, 0.0, 1.0);
  // mySound1.setVolume(volValue);
  // mySound2.setVolume(volValue);
  // mySound3.setVolume(volValue);
  // mySound4.setVolume(volValue);
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




