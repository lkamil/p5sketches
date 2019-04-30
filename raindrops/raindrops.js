let drops;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	drops = [];
	drops.push(new Drop(mouseX, mouseY));

}

function draw() {

	background(255);

	if (frameCount % 20 == 0){
			let newDrop = new Drop(mouseX, mouseY);
		drops.push(newDrop);
	}


	if (drops.length > 1000) {
		drops.shift(); // Remove first array element
	}

	for (let i = 0; i < drops.length; i += 1) {
		drops[i].fall();
	}

	// console.log(drops);
}

function mouseMoved() {
	// let newDrop = new Drop(mouseX, mouseY);
	// drops.push(newDrop);

	// if (drops.length > 1000) {
	// 	drops.shift(); // Remove first array element
	// }
}




function Drop(x, y) {
	this.x = x + random(-50, 50);
	this.y = y;
	this.speed = 1;
	console.log("Drop created")
	this.fall = function() {
		this.y += this.speed + this.y * (0.005);
		noFill;
		line(this.x, this.y, this.x, this.y + 10);
	}
}
