var xoff = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(10);
}

function draw() {

	// blue = map(mouseY, 0, mouseX, 0, 255);
	// color = (230, 244, blue);
	strokeWeight(10);
	var red = (noise(xoff+10) * 200) + 50
	var green = (noise(xoff+20) * 200) + 50
	var blue = (noise(xoff) * 100) + 150
	stroke(red, green, blue);
	line(mouseX, mouseY, windowWidth / 2, windowHeight / 2);

	xoff += 0.01

	

	// fill(200, 220, 12, 190);
	// stroke(255, 190);
	// strokeWeight(10);
	// ellipse(windowWidth / 2, windowHeight / 2, 300, 300);

	// fill(99, 56, 210);
	// strokeWeight(5);
	// ellipse(mouseX, mouseY, 100, 100);
	
}
