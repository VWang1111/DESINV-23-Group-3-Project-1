var notes = [48, 50, 53, 55, 60];
var timestep = 0;

function setup () {
	createCanvas(400, 400);
  colorMode(HSB)
	frameRate(2);
  background(255);

		
}

function draw () {
	stroke(0);
	var currentNote = notes[timestep]; //current note is between 48 and 60
  var rawInterval = currentNote - 47; //interval is between 1 and 13
  var interval = rawInterval * 10; // interval multiplier to space out lines on the canvas
	for (i = 0; i < height; i += interval){
		line(mouseX, mouseY, 0, i);
	}
	
	for (i = 0; i < width; i += interval){
		line(mouseX, mouseY, i, 0);
	}
	
	for (i = 0; i < height; i += interval){
		line(mouseX, mouseY, width, i);
	}
	
	for (i = 0; i < width; i += interval){
		line(mouseX, mouseY, i, height)
	}
  
  timestep++;
  if (timestep > notes.length - 1){
    timestep = 0;
    background(255);
  }
}