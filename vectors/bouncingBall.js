
let position;
let velocity;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250, 200, 200);

	position = createVector(100, 100);
	velocity = createVector(1, 3.3);
}

function draw() {
	position.add(velocity);

	// If ball is out of bounce, change direction 
	if ((position.x > windowWidth) || (position.x < 0)) {
		velocity.x *= (-1);
	}
	if ((position.y > windowHeight) || (position.y < 0)) {
		velocity.y *= (-1);
	}

	if (position.y < windowHeight / 2) {
		velocity.y += 2;
	}


	if (position.y > windowHeight / 2) {
		velocity.y -= 2;
	}

	strokeWeight(1);
	stroke(255, 255, 255, 70);
	fill(255, 25, 20, 70);
	ellipse(position.x, position.y, 25, 25);
}