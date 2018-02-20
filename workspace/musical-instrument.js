var notes = [];
var timestep = 0;
var osc = 0;
var freq = 0;

function setup () {
	createCanvas(400, 400);
  colorMode(HSB);
	print("type in some notes");
	print("use ~ for rests");
	frameRate(2);
  background(0);
	osc = new p5.Oscillator();
	osc.setType('square');
	osc.amp(0);
	osc.start()
		
}

function draw () {
  if(notes.length > 15) {
		osc.amp(1);
		freq = midiToFreq(notes[timestep]);
		osc.freq(freq);
		
		
    var currentNote = notes[timestep]; //current note is between 48 and 60
    var rawInterval = currentNote - 47; //interval is between 1 and 13
    var interval = rawInterval * 25; // interval multiplier to space out lines on the canvas is between 10 and 130
    var color = (360/13) * rawInterval; //split color wheel into 13
    for (i = 0; i < height; i += interval){
      stroke(color, 100, 100);
      line(mouseX, mouseY, 0, i);
    }

    for (i = 0; i < width; i += interval){
      stroke(color, 100, 100);
      line(mouseX, mouseY, i, 0);
    }

    for (i = 0; i < height; i += interval){
      stroke(color, 100, 100);
      line(mouseX, mouseY, width, i);
    }

    for (i = 0; i < width; i += interval){
      stroke(color, 100, 100);
      line(mouseX, mouseY, i, height)
    }

    timestep++;
    if (timestep > notes.length - 1){
      timestep = 0;
      background(0);
    }
  }
}

function keyPressed(){
	if(keyCode == 49){
		notes = [59, 57, 48, 57, 60, 57, 48, 51, 57, 51, 60, 57, 48, 51, 57, 59];
	}
	if(notes.length > 15){
		return false;
	}
	else if (keyCode == 65)	{
		append(notes, 48);
	}
	else if (keyCode == 87){
		append(notes, 49);	
	}
	else if (keyCode == 83){
		append(notes, 50);		
	}
	else if (keyCode == 69){
		append(notes, 51);	
	}
	else if (keyCode == 68){
		append(notes, 52);		
	}
	else if (keyCode == 70){
		append(notes, 53);	
	}
	else if (keyCode == 84){
		append(notes, 54);	
	}
	else if (keyCode == 71){
		append(notes, 55);	
	}
	else if (keyCode == 89){
		append(notes, 56);
	}
	else if (keyCode == 72){
		append(notes, 57);	
	}
	else if (keyCode == 85){
		append(notes, 58);	
	}
	else if (keyCode == 74){
		append(notes, 59);	
	}
	else if (keyCode ==75){
		append(notes, 60);	
	}
	else if (keyCode == 192){
		append(notes, 0);	
	}
	else{
		print("NOT A NOTE");
		return false;
	}
	print(notes.length);
}
