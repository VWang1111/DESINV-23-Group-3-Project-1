

var freqA = 110;
var freqC = 130.81;
var freqE = 164.81;
var freqG = 196; 

var oscA, oscS, oscD, oscF;

var playing = false;

/*var rectA = false;
var rectC = false;
var rectE = false;
var rectG = false;*/

function setup() {
  backgroundColor = color(255);
  colorMode (HSB);
  textAlign(CENTER);
  createCanvas(400, 400);

  
  rect (0, (height/2)-1, width/4, height/2) //RECT A
  textSize(25);
  text('A', width/9.5, height-30);
  rect (width/4, (height/2)-1, width/4, height/2) //RECT B
  text('S', width/2.8, height-30);
  rect (width/2, (height/2)-1, width/4, height/2) //RECT C
  text('D', width/2+width/9.5, height-30);
  rect (width/2+width/4, (height/2)-1, width/4-1, height/2) //RECT D
	text('F', width/2+width/2.8, height-30);
  
  oscA = new p5.Oscillator();
  oscA.setType('square');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscC = new p5.Oscillator();
  oscC.setType('square');
  oscC.freq(freqC);
  oscC.amp(0);
  oscC.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('square');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('square');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
}

function draw() {

}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscC;
  } else if (key == 'D') {
    osc = oscE;
  } else if (key == 'F') {
    osc = oscG;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
  
    if (key == 'A'){ //red
    fill (0,50, 100, 0.3);
    rect (0, (height/2)-1, width/4, height/2);
  } else if (key == 'S'){ //green
    fill (90, 50, 100, 0.3);
    rect (width/4, (height/2)-1, width/4, height/2);
  } else if (key == 'D'){ //blue
    fill (180, 50, 100, 0.3);
    rect (width/2, (height/2)-1, width/4, height/2);
  } else if (key == 'F'){ //purple
    fill (270, 50, 100, 0.3);
    rect (width/2+width/4, (height/2)-1, width/4-1, height/2);
  }

}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscC;
  } else if (key == 'D') {
    osc = oscE;
  } else if (key == 'F') {
    osc = oscG;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
   if (key == 'A'){ //red
    fill (250);
    rect (0, (height/2)-1, width/4, height/2);
    fill (0)
    text('A', width/9.5, height-30);
  } else if (key == 'S'){ //green
    fill (250);
    rect (width/4, (height/2)-1, width/4, height/2);
    fill (0)
    text('S', width/2.8, height-30);
  } else if (key == 'D'){ //blue
    fill (250);
    rect (width/2, (height/2)-1, width/4, height/2);
    fill (0)
    text('D', width/2+width/9.5, height-30);
  } else if (key == 'F'){ //purple
    fill (250);
    rect (width/2+width/4, (height/2)-1, width/4-1, height/2);
    fill (0);
    text('F', width/2+width/2.8, height-30);
  }
}