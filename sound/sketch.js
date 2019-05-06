// idea: lines fade out (fall down) after a while

let song;
let button;
let amp;
let xoff; // value for noise function
let x, y;
let speedX;
let speedY;

function setup() {
	createCanvas(1000, 800);

	background(220);
	song = loadSound("libertango.mp3", loaded);
	amp = new p5.Amplitude(); // this listens to the sound of the sketch

	xoff = 0.0;

	// start values for lines
	x = width/ 100;
	y = height/ 50;

	// default speeds
	speedX = 2.5;
	speedY = 0.06;
}

function loaded() {
	button = createButton("play");
	button.mousePressed(togglePlaying);
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
	//background(200,100,255);
	if (song.isPlaying()) {
		drawLines();
	}
}

function drawLines() {
	//strokeWeight(0.5);
	//console.log(amp.getLevel());
	let vol = amp.getLevel();
	let factor = map(vol, 0, 0.2, 1.5, 2.5)

	let r = map(vol, 0, 0.2, 155, 25);; // noise(xoff) * 100 + map(vol, 0, 0.2, 10, 150);
	let g = map(vol, 0, 0.2, 155, 25);; //noise(300 + xoff) * 100 + map(vol, 0, 0.2, 10, 150);
	let b = 255;// noise(500 + xoff) * 100 + map(vol, 0, 0.2, 70, 150);

	speedDiffX = map(vol, 0, 0.3, 0, 1);
	speedDiffY = map(vol, 0, 0.3, 0, 1)

	if ((x > width) || (x < 0)) {
		speedX *= -1;
		speedY += 0.02;
		console.log(speedX);
	}
	if ((y > height) || (y < 0))  {
		speedY *= -1;
	}
	x += sin(speedX * speedDiffX * 4) * factor;
	y += sin(speedY * speedDiffY * 2) * factor;
	// console.log(speedDiffX + speedX);

	stroke(r, g, b, 100);
	strokeWeight(1);
	noFill();
	line(x, y, x, ((y * speedDiffY) * 3));

	xoff += 0.01;
}



