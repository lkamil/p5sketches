// let amount;
// let scl;
// let offset;
let layerHeight;
let prevY;
// let y;
// let color1;
// let color2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	layerHeight = height / 12;
	console.log(layerHeight);

	drawMountains()
	// drawMountainRange(0, 600);
}

function draw() {
}

function drawMountains() {
	// color1 = color(255, 255, 255, 150);
	// color2 = color(0, 0, 0, 150);

	// line(20, 10, 1000, 300);

	// for(y = 0; y < height; y += offset) {
	// 	fill(255, 0, 0, 50);
	// 	noStroke();
	// 	//rect(0, y, width, layerHeight);
	// 	setGradient(0, y, width, layerHeight, color1, color2)
	// }

	// line(20, 10, 1000, 300);
	//  setGradient(0, 0, width, layerHeight, color1, color2);
	//  stroke(0);
	prevY = 0;
	for (let y = layerHeight; y < height; y += layerHeight) {
		drawMountainRange(prevY, y, y);
		prevY = y;
	}
	 
}

function drawMountainRange(y0, y1, xoff) {
	for (let x = 0; x < width; x++){
		let noiseHeight = noise(xoff) * (y1-y0) * 1.5 + y0;
		console.log(noiseHeight);
		stroke(0, 50);
		line(x, noiseHeight, x, height)

		xoff += 0.01;
	}
}

function setGradient(x, y, w, h, c1, c2) {
	for(let i = y; i <= y + h; i += 1) {
		let inter = map(i, y, y + h, 0, 1);
     	let c = lerpColor(c1, c2, inter);
     	stroke(c);
    	line(x, i, x + w, i);
    }
}