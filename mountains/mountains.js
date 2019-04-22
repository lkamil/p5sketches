let amount;
// let scl;
// let offset;
let layerHeight;
let prevY;
// let y;
// let color1;
// let color2;

let inc;
let start;

p5.disableFriendlyErrors = true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	amount = 8;
	layerHeight = height / amount;
	console.log(layerHeight);

	//drawMountains()
	// drawMountainRange(0, 600);
	color1 = color(255);
	color2 = color(0);

	start = 0.0;
	inc = 0.05;

}

function draw() {
	background(255);
	drawMountains(color1, color2);

	start += inc;
}

function drawMountains(c1, c2) {

	let speed;
	let amountInter = 0;
	prevY = 0;
	speed = 0.04;
	for (let y = layerHeight; y < height; y += layerHeight) {

		let inter = 1 / amount + amountInter;
		let c = lerpColor(c1, c2, inter);

		
		drawMountainRange(prevY, y, (y + start) + 1000, c, speed);
		prevY = y;

		amountInter += 1 / amount;
		speed -= 0.0055;
	}
	 
}

function drawMountainRange(y0, y1, xoff, c, speed) {

	for (let x = 0; x < width; x += 2) {
		let noiseHeight = noise(xoff) * (y1-y0) * 1.5 + y0;
		// console.log(noiseHeight);
		stroke(c);
		strokeWeight(2);
		// strokeCap(SQUARE);
		smooth();
		line(x, noiseHeight, x, height)
		xoff += speed;
	}
}
