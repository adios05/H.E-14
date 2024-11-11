let imgArray = [];
let theColors = ["#DF1F2D", "#B11313", "#2B3784", "#447BBE", "#000000", "#ffffff"];

let randomColor = 0;
let isPressed = false;

function preload() {
  imgArray[0] = loadImage("/assets/DPHead.png");
  imgArray[1] = loadImage("/assets/spideyHead.png");
  imgArray[2] = loadImage("/assets/marvel-logo.png");
  imgArray[3] = loadImage("/assets/Miles Morales.png")
  imgArray[4] = loadImage("/assets/Spidey Spider.png")
}
function setup() {

  let canvas = createCanvas(765.8, 400);
  canvas.parent("sketch-holder");
  randomColor = int(random(theColors.length));

  var button1 = createButton("Draw DeadPool");
  button1.parent("button-holder");
  button1.mousePressed(DpDraw);

  var button2 = createButton("Draw Spider-Man");
  button2.parent("button-holder");
  button2.mousePressed(spideyDraw);
  
  var button4 = createButton("Draw Miles Morales");
  button4.parent("button-holder");
  button4.mousePressed(drawMiles);
  
  var button5 = createButton("Draw Spider");
  button5.parent("button-holder");
  button5.mousePressed(drawSpider);
  
  var button3 = createButton("Random Marvel");
  button3.parent("button-holder");
  button3.mousePressed(randomDraw);
  
  var button6 = createButton("Change Brush");
  button6.parent("button-holder");
  button6.mousePressed(changeColor);
  
  var button7 = createButton("Create Canvas");
  button7.parent("button-holder");
  button7.mousePressed(clearCanvas)


}

function draw() {
  paintBrush();
}

function DpDraw() {
  image(imgArray[0], random(width), random(height), 75, 75);
}

function clearCanvas() {
  background(random(0, 255));
}

function spideyDraw() {
  image(imgArray[1], random(width), random(height), 50, 50);
}

function randomDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 80, 80);
}

function drawMiles(){
  image(imgArray[3], random(width), random(height), 50, 70);
}


function drawSpider(){
  image(imgArray[4], random(width), random(height), 50, 50);
}


function paintBrush() {
  noStroke();
  if (mouseIsPressed) {
    
    ellipse(mouseX, mouseY, random(0,20));
  }
}

function changeColor(){
randomColor = int(random(theColors.length));
fill(theColors[randomColor]);
stroke(theColors[randomColor]);
 


  
}
