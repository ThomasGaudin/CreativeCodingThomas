function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  let scaleSin = map(sin(frameCount), -1, 1, 3,15)
  background(0,0,0,20);
  noFill()
  stroke(255)
  strokeWeight(0.3)
  translate(width/2, height/2);

  for (var i = 0; i < 200; i++) {

    push();
    scale(scaleSin)
    rotate(sin(frameCount + i * 2) *100)
    rect(cos(frameCount+i*300), cos(frameCount+i*190), 600 - i * 3, 600 - i * 3, 200 - i)
    pop()
    console.log(scaleSin);
  }
}

