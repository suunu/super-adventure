let balls = [];
let xoff = 0
let yoff = 10000
let zoff = 2000
let c,d;


function setup() {
  createCanvas(windowWidth, windowHeight); 

noiseSeed(100);

  for(let i = 0; i<windowHeight/2; i++){
    let b = new Walker(c,d,zoff);   
    xoff = xoff + 1;
    yoff = yoff + 1;
    c = map(noise(xoff), 0, 1, -50, 50);
    d = map(noise(yoff), 0, 1, -50, 50);
    balls.push(b)
  }
}
  


function draw() {
   background(10);
for(let b of balls){
  // for (let i=0; i<5; i++){
  //   let b = balls[i]; // balls의 i를 하나씩 꺼내서 정의함
   if (mouseIsPressed === true){
  zoff +=0.0001;}
  b.update(zoff)
  b.display()
}
}