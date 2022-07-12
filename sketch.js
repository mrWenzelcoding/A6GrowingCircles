let rad = 0;
let r,g,b;
let radSpeed = 1
let radSpeed2 = 0

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(r,g,b)
  r = random(150)
  g = random(150)
  b = random(150)
  background(0);
}

function draw() {
  ellipse(width/2,height/2,rad)
  rad+=radSpeed;
  radSpeed += radSpeed2
  radSpeed2 = 0.01+rad/2000
  fill(r,g,b)
  r = lerp(r,r+rad/10,0.01)
  g = lerp(g,g+rad/10,0.01)
  b = lerp(b,b+rad/10,0.01)


  if(rad > 900){
    background(r,g,b)
    r=random(150)
    g=random(150)
    b=random(150)
    rad=0
    radSpeed = 0
    radSpeed2 = 0.001
  }
}