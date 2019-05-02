let song;
let sliderVolume;
let sliderRate;
let sliderPan;

// preload gets executed before setup() but the user cannot see the sketch until the file is loaded
// function preload() {
// 	song = loadSound("libertango.mp3");
// }

function setup() {
	createCanvas(300, 300);

	sliderVolume = createSlider(0, 1, 0.5, 0.01);
	sliderRate = createSlider(0.1, 3, 1, 0.01);
	sliderPan = createSlider(-1, 1, 0, 0.01);

	background(170);
	song = loadSound("libertango.mp3", loaded); // Execute loaded() after song was loaded
	// song.play(); // song can be played here if it was loaded in preload
	// song.setVolume(0.5); // Plays the song at half of it's volume
}

function loaded() {
	song.play(); // use song.loop() if you want to play the song forever
}

function draw() {
	song.pan(sliderPan.value());
	song.rate(sliderRate.value()); // Determines how fast the song is player
	song.setVolume(sliderVolume.value());
}