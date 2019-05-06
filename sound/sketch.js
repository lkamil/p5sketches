// idea: lines fade out (fall down) after a while

let song;
let button;
let jumpButton;
let amp;
let xoff;
let x, y;
let speedX;
let speedY;

function setup() {
	createCanvas(1000, 800);

	background(220);
	song = loadSound("libertango.mp3", loaded);
	amp = new p5.Amplitude(); // this listens to the sound of the sketch

	// cue is a great function to change the animation at a certain point of time
	// song.addCue(2.0, changeBackground, color(100,100,255)); // after 2 seconds, change background, third argument gets passed to changeBackground()
	// song.addCue(4.0, changeBackground, color(100,200,255));
	// song.addCue(6.0, changeBackground, color(200,200,255));
	// song.addCue(6.0, changeBackground, color(200,100,255));

	xoff = 0.0;
	x = width/100;
	y = height/ 50;
	speedX = 2.5;
	speedY = 0.06;
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
	if (song.isPlaying()) {
		drawEllipse();
	}
}

function drawEllipse() {
	
	//strokeWeight(0.5);
	//console.log(amp.getLevel());
	let vol = amp.getLevel();
	let diam = map(vol, 0, 0.2, 1.5, 2.5)

	let r = map(vol, 0, 0.2, 155, 25);; // noise(xoff) * 100 + map(vol, 0, 0.2, 10, 150);
	let g = map(vol, 0, 0.2, 155, 25);; //noise(300 + xoff) * 100 + map(vol, 0, 0.2, 10, 150);
	let b = 255;// noise(500 + xoff) * 100 + map(vol, 0, 0.2, 70, 150);

	speedDiffX = map(vol, 0, 0.3, 0, 1);
	speedDiffY = map(vol, 0, 0.3, 0, 1)

	stroke(r, g, b, 100);
	strokeWeight(1);
	noFill();

	// move ellipse
	// speedX = 1;
	// speedY = 0.2;

	if ((x > width) || (x < 0)) {
		speedX *= -1;
		speedY += 0.02;
		console.log(speedX);
	}
	if ((y > height) || (y < 0))  {
		speedY *= -1;
	}
	x += sin(speedX * speedDiffX * 4) * diam;
	y += sin(speedY * speedDiffY * 2) * diam;
	// console.log(speedDiffX + speedX);

	line(x, y, x, ((y * speedDiffY) * 3));

	xoff += 0.01;
}



