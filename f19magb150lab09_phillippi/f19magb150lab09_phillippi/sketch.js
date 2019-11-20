var img; 
let photo, maskImage;
let mySound, reverb; //Let's my soundtrack work and have a reverb effect.

function preload() {
 img = loadImage("Lamp Mirror.jpg");
  maskImage = loadImage("FOG.png");
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('eerie.mp3');
}
function setup() {
  createCanvas(520, 440);
  // in this case the point (0,0).
  img.mask(maskImage); //Creates the fog image over the image of the lamp and mirror. 
  img.filter(GRAY);
  image(img, 0, 0, width, height);
   mySound.setVolume(0.1);
  mySound.play();
  
  reverb = new p5.Reverb();//Let's the soundtrack have a reverb effect
  mySound.disconnect();
  
  reverb.process(mySound, 3, 2);
  mySound.play();
  
  mySound.loop();
}


function draw(){ //referred to p5 reference on rate. This is to make the rate of the sound change with the mouses movement.
 
  let speed= map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  mySound.rate(speed);
  
}