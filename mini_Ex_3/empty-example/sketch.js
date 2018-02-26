function setup(){
  createCanvas(windowWidth, windowHeight);
frameRate(10);

}

function draw(){
background(110, 150, 220);

translate(width/2, height/2);
push();
strokeWeight(4);
line(0,0,-60,150);
line(0,0,60,150);
pop();

push();
fill(0,100);
noStroke();
ellipse(0,157,240,40)
pop();

rotate(radians(frameCount));

push();
noFill();
ellipse(0,0,240,240);
pop();

	for (var i = 0; i < 20; i++) {
		push();
		rotate(TWO_PI * i / 20);
    line(0,0,120,0);

    fill(255,random(0,200),0);
		ellipse(120, 0, 20, 20);
		pop();

  }
}
