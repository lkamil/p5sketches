let cols;
let rows;

let scl = 10;

let x;
let y;

let sizex = 600;
let sizey = 600;

function setup() {
	createCanvas(sizex, sizey);
	background(200);
	cols = sizex / scl;
	rows = sizey / scl;
}

function draw() {
	stroke(0);
	strokeWeight(1);
	noFill();

	for (y = 0; y < rows; y += 1) {
		beginShape(TRIANGLE_STRIP);
		for (x = 0; x < cols; x += 1) {
			//rect(x * scl, y * scl, scl, scl);
			vertex(x * scl, y * scl);
			vertex(x * scl, (y + 1) * scl);
		}
		endShape();
	}
}