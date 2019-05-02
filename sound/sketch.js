let song;
let button;
let jumpButton;
let amp;
let xoff;

function setup() {
	createCanvas(300, 300);

	background(255);
	song = loadSound("libertango.mp3", loaded);
	amp = new p5.Amplitude(); // this listens to the sound of the sketch

	// cue is a great function to change the animation at a certain point of time
	// song.addCue(2.0, changeBackground, color(100,100,255)); // after 2 seconds, change background, third argument gets passed to changeBackground()
	// song.addCue(4.0, changeBackground, color(100,200,255));
	// song.addCue(6.0, changeBackground, color(200,200,255));
	// song.addCue(6.0, changeBackground, color(200,100,255));

	xoff = 0.0

}

function loaded() {
	button = createButton("play");
	button.mousePressed(togglePlaying);

	jumpButton = createButton("jump");
	jumpButton.mousePressed(jump);
}

function changeBackground(col) {
	background(col);
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

function jump() {
	let len = song.duration(); // Gets duration of the song in seconds
	let t = 0;// random(len);
	console.log(t);
	song.jump(t); // jump to the middle of the song
}


function draw() {
	//background(200,100,255);
	let r = noise(xoff) * 50 + 200;
	let g = noise(xoff + 200) * 150 +100;
	let b = noise(xoff + 500) * 200 + 50;

	fill(r, g, b, 10);
	noStroke();
	let vol = amp.getLevel();
	let diam = map(vol, 0, 0.2, 50, 200)
	ellipse(width / 2, height / 2, diam, diam);

	xoff += 3;
}



