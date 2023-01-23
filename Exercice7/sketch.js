let playing;
let analyzer;
let tech;
let mic;
let img;
let h
let soundGain 
let color = 0
let fr = 60
let mr = 1 
let rms
let bgr = 255
let bgg = 255
let bgb = 255
let tileSize = 60;
let spacing = 10


function preload() {
	tech = loadSound("audio/7am.mp3");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	playing = false;
	capture = createCapture(VIDEO);
	capture.size(width, height);
	capture.hide();
	mic = new p5.AudioIn();
	mic.start();
	analyzer = new p5.Amplitude();
	analyzer.setInput(tech);
	soundGain = new p5.Gain();
	soundGain.setInput(tech);
}

function draw() {
	frameRate(fr)
	console.log(tileSize);
	background(bgr, bgg, bgb);
	let vol = mic.getLevel();
	rms = analyzer.getLevel();	
	tech.rate(mr)

	if(playing){
		h = map(vol, 0, 1, -30, 10);
	}else{
		h = -10
	}
	var soundVolume = constrain(map(mouseX,width,0,0,1), 0, 1);
	soundGain.amp(soundVolume);
	// let h = map(vol, 0, 1, -20, 30);
	
	let nbTiles = 400;

	// let tiles = width / tileSize;
	capture.loadPixels();
	push();
	fill(color);
	noStroke();

	translate(spacing / 2, spacing / 2);
	for (let y = 0; y < capture.height; y += spacing) {
		for (let x = 0; x < capture.width; x += spacing) {
			const index = (y * capture.width + x) * 4;
			const r = capture.pixels[index];
			const g = capture.pixels[index + 1];
			const b = capture.pixels[index + 2];
			let size = map(r + g + b, 0, 255 * 3, 1, tileSize);
			rect(x, y, size+h*2, size+h*2);
		}
	}

	pop();
	
}
function keyPressed() {
	console.log(key); 
	if(key === " "){
	if (playing == false) {
		tech.play();
		playing = true;
	} else if (playing == true) {
		tech.pause();
		playing = false;
	}
}
if(keyCode === UP_ARROW){
	fr = fr*2
}
if(keyCode === DOWN_ARROW){
	fr = fr/2
}
if(keyCode === RIGHT_ARROW){
	mr = mr+0.1
}
if(keyCode === LEFT_ARROW){
	mr = mr-0.1 
}
if(key=== "1"){
	if(color == 0){
		color = 255
	}else {color = 0
	}
}
if(key=== "2"){
	color = map(rms, 0, 0.5, 0, 200);
}
if (key=== "3"){
	bgr = random(0,255)
	bgg = random(0,255)
	bgb = random(0,255)
}

if (key=== "4"){
	if(tileSize<100){
		tileSize = tileSize+10
	}
}
if (key=== "5"){
	if(tileSize>20){
	tileSize = tileSize-10
	}
}
if (key=== "6"){
	spacing = spacing + 1
}
if (key=== "7"){
	spacing = spacing - 1
}

}
