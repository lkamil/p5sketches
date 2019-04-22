let angle = 0;

function setup() {
	createCanvas(400, 300, WEBGL);
}

function draw() {
	background(75);

	rectMode(CENTER);
	noStroke();
	fill(100, 130, 250);
	rotateY(angle);
	rotateZ(angle);
	rect(0, 0, 150, 100);

	angle += 0.01;

}