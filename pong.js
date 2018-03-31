var xPos = 100;
var yPos = 100;
var xSpeed = 2;
var ySpeed = 2;

var leftPaddle = 100;
var rightPaddle = 100;

function setup () {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(xPos, yPos, 20, 20);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (yPos >= 400) {
    ySpeed = -1 * ySpeed;
  }
  if (xPos >= 600) {
    xSpeed = -1 * xSpeed;
  }
  if (yPos <= 0) {
    ySpeed = -1 * ySpeed;
  }
  if (xPos <= 0 && yPos >= leftPaddle && yPos <= leftPaddle + 40) {
    xSpeed = -1 * xSpeed;
  }

  rect(0, leftPaddle, 10, 40);
  rect(590, rightPaddle, 10, 40);

  if(keyIsDown(87)){
    leftPaddle = leftPaddle - 1;
  }
  if(keyIsDown(83)){
    leftPaddle = leftPaddle + 1;
  }

}
