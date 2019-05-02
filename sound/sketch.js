let song;
let button;

function setup() {
	createCanvas(300, 300);

	background(170);
	song = loadSound("libertango.mp3"); 
	button = createButton("play");
	button.mousePressed(togglePlaying);
	// song.play(); // song can be played here if it was loaded in preload
	// song.setVolume(0.5); // Plays the song at half of it's volume
}

function togglePlaying() {
	if (!song.isPlaying()) {
		song.play();
		button.html("pause");
	} else {
		song.pause();
		button.html("play");
	}
	
}

function draw() {
}