let positionPink = -300
let positionBlack = -500
let positionGreen = 250
let positionBlue= 500

function setup() {
  var cnv = createCanvas(600, 600,WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
  background(240)
  let limit = frameCount*0.01
  if(limit < 12.55){
  rotateY(frameCount*0.01)
  }
  if(frameCount%2 == 0 && positionPink < 0){
    positionPink++
  }

  if(frameCount%2 == 0 && positionBlack< 0){
    positionBlack++
  }

  if(frameCount%4 == 0 && positionGreen > 0){
    positionGreen--
  }
 
// black
  fill(28,26,29)
  noStroke();
beginShape()
 vertex(-300,-300, positionBlack)
 vertex(0,-180, positionBlack)
 vertex(0,180, positionBlack)
 vertex(-300,300, positionBlack)
endShape(CLOSE)

// green
fill(199, 238,173)
noStroke();
beginShape()
 vertex(300,300, positionGreen)
 vertex(300, -300, positionGreen)
 vertex(0,-180, positionGreen)
 vertex(0, 180, positionGreen)
endShape(CLOSE)

// pink
fill(249, 206,236)
noStroke();
beginShape()
 vertex(-300,-300, positionPink)
 vertex(0, -180, positionPink)
 vertex(300,-300, positionPink)
endShape(CLOSE)

//blue
fill(186, 221,251)
noStroke();
beginShape()
 vertex(-300,300)
 vertex(0, 180)
 vertex(300,300)
endShape(CLOSE)

}
