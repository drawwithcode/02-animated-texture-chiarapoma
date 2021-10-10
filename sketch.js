function preload() {
  // put preload code here
}
class Bubble {
  constructor(temp_radius, temp_x, temp_y) {
    this.x = temp_x;
    this.y = temp_y;
    this.color = random(["red", "blue", "orange", "purple", "violet"]);
    noStroke();
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    circle(50, 50, 50);
    pop();
  }

  move() {
    this.x += random(-10, +10);
    this.y += random(-10, +10);
  }

  run() {
    this.move();
    this.display();
  }
}

let bubbles = [];
const bubblesNum = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  for (let i = 0; i < bubblesNum; i++) {
    let newBubble = new Bubble(1, random(100, 1700), random(100, 900));
    bubbles.push(newBubble);
  }
  console.log(bubbles);
}

var iterator = 0;

function draw() {
  for (i = 0; i < bubblesNum; i++) {
    bubbles[i].run();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
