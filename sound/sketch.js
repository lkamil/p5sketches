let song;
let button;
let jumpButton;

function setup() {
	createCanvas(300, 300);

	background(170);
	song = loadSound("libertango.mp3");

	button = createButton("play");
	button.mousePressed(togglePlaying);

	jumpButton = createButton("jump");
	jumpButton.mousePressed(jump);

	// cue is a great function to change the animation at a certain point of time
	song.addCue(2.0, changeBackground, color(100,100,255)); // after 2 seconds, change background, third argument gets passed to changeBackground()
	song.addCue(4.0, changeBackground, color(100,200,255));
	song.addCue(6.0, changeBackground, color(200,200,255));
	song.addCue(6.0, changeBackground, color(200,255,255));

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
	// if (song.currentTime() > 0) {
	//background(song.currentTime()* 2, song.currentTime(), 230);
	// }
}