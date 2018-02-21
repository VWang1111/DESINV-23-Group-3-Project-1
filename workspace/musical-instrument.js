//Envelope stuff
var env;
var attLevel = 1.0;
var releaseLevel = 0;
var attTime = 0.001;
var decayTime = 0.3;
var susLevel = 0;
var releaseTime = 0.3;

//Filter stuff
var filter1 = 0;
var filter2 = 0;
var filterHz = 0; 
var filterQ = 20;  //make it squeel

var notes = [];
var timestep = 0;
var osc = 0;
var freq = 0;

function setup () {
	createCanvas(400, 400);
  colorMode(HSB);
	textSize(12);
	background(0);
	fill(255);
	text("type in some notes", 10, height - 30);
	text("use ~ for rests", 10, height-20);
	text("or just use 1-9 for classic tb-303 acid lines", 10, height-10);
	frameRate(8);  //16th notes @ 120bpm
	
	//inititalizes the envelope, creates the shape, and sets its range
	env = new p5.Env();
	env.setADSR(attTime, decayTime, susLevel, releaseTime);
	env.setRange(attLevel, releaseLevel);
	
	//creates 2 12 dB/oct low pass filters in series (to make one 24 dB/oct low pass filter)
	filter1 = new p5.LowPass();
	filter2 = new p5.LowPass();
	
	//creates oscillator, passes it through both LPFs, binds envelope to "VCA"
	osc = new p5.Oscillator();
	osc.setType('square');  //could be a saw too...
	osc.amp(env);
	osc.disconnect(); //Just in case...
	osc.connect(filter1);
	osc.connect(filter2);
	osc.start()
}

function draw () {
  if(notes.length > 15 && notes[timestep] !== 0) {  //who needs more than 16 notes anyways
			
		filterHz = map(mouseY, 0, height, 15000, 20);  //maps the height of the mouse to the filter cutoff
		filter1.freq(filterHz );
		filter2.freq(filterHz);
		filter1.res(filterQ);
		filter2.res(filterQ);
		
		freq = midiToFreq(notes[timestep]);		//changes MIDI data into something p5.osc can actually read (Hz)
		osc.freq(freq);
		env.play(); 		//pings envelope
		
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
  }
	if(notes.length > 15){
		timestep++;
    if (timestep > notes.length - 1){
      timestep = 0;
      background(0);
    }
	}
}


//"Keyboard keyboard."  Binds letters to MIDI notes and adds them to notes[]
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
