var randomXA;
var randomYA;
var randomXS;
var randomYS;
var randomXD;
var randomYD;
var randomXF;
var randomYF;
var freqA = 110;
var freqC = 130.81;
var freqE = 164.81;
var freqG = 196; 

var osc;

var playing = false;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(255);
  background(backgroundColor);
  colorMode (HSB);
  textAlign(CENTER);
  text('Press SPACE to restart', width/2, height-30);
  
  noStroke();
  
  
  osc = new p5.Oscillator();
  osc.setType('square');
  osc.amp(0);
  osc.start();
  
  
}

var sizeA = 0;
var sizeS = 0;
var sizeD = 0;
var sizeF = 0;
var keyPress = 0;
var keyA = false;
var keyS = false;
var keyD = false;
var keyF = false;
var colorA;
var colorS;
var colorD;
var colorF;

function keyPressed() {
  if (key == 'A'){
    keyA = true;
    keyPress = 1;
    osc.freq(freqA);
    osc.amp(1);
    colorA = random(0,60);
    fill(colorA,40,100);
  } else if (key == 'S'){
    keyS = true;
    keyPress = 2;
    osc.freq(freqC);
    osc.amp(1);
    colorS = random(90,150);
    fill(colorS,40,100);
  } else if (key == 'D'){
    keyD = true;
    keyPress = 3;
    osc.freq(freqE);
    osc.amp(1);
    colorD = random(180,240);
    fill(colorD,40,100);
  } else if (key == 'F'){
    keyF = true;
    keyPress = 4;
    osc.freq(freqG);
    osc.amp(1);
    colorF = random(270,330);
    fill(colorF,40,100);
  } else if (keyCode == 32){
    background(backgroundColor);
    sizeA = 0;
    sizeS = 0;
    keyPress = 0;
}
  randomXA = random(width);
	randomYA = random(height);
  randomXS = random(width);
	randomYS = random(height);
  randomXD = random(width);
	randomYD = random(height);
  randomXF = random(width);
	randomYF = random(height);
}

function keyReleased() {
  if (key == 'A'){
    keyPress = 0;
    sizeA = 0;
    osc.amp(0);
  } else if (key == 'S'){
    keyPress = 0;
    sizeS = 0;
    osc.amp(0);
  } else if (key == 'D'){
    keyPress = 0;
    sizeD = 0;
    osc.amp(0);
  } else if (key == 'F'){
    keyPress = 0;
    sizeF = 0;
    osc.amp(0);
  }
}


function draw() {
  
  if (keyPress == 1) {
    fill (colorA, 40, 100);
    ellipse (randomXA, randomYA, sizeA, sizeA);
    sizeA += 2;
  } else if (keyPress == 2) {
    fill (colorS, 40, 100);
    ellipse (randomXS, randomYS, sizeS, sizeS);
    sizeS += 2;
  } else if (keyPress == 3) {
    fill (colorD, 40, 100);
    ellipse (randomXD, randomYD, sizeD, sizeD);
    sizeD += 2;
  } else if (keyPress == 4) {
    fill (colorF, 40, 100);
    ellipse (randomXF, randomYF, sizeF, sizeF);
    sizeF += 2;
  }
  

}


