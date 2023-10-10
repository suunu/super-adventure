// new way to define Object
class Walker {
  //setup values
  constructor(c, d) {
    this.pos = createVector(random(0, windowWidth), random(0, windowHeight));

    this.w = random(windowHeight/100,windowHeight/9);
    this.c = c / 100;
    this.d = d / 80;
    this.va = createVector(this.c, this.d);
    this.co = 180;
    this.s = 0;
  }
  update(yep) {
    //update position
    this.pos = this.pos.add(this.va);

    let vmid = createVector(windowWidth / 2, windowHeight / 2);

    let v5 = p5.Vector.sub(this.pos, vmid); //눈에서 중간

    let vnor2 = p5.Vector.normalize(v5); //단위벡터로 변환
    let vM = createVector(mouseX, mouseY);
    let v3 = p5.Vector.sub(this.pos, vM); //마우스에서 눈알로의 백터
    let m = v3.mag(); //v3벡터의 거리 반환
    let m2 = windowHeight/9/ m; //v3의 거리에 역수를 취하고 상수를 곱해 적절한 가중치 계산
    let vnor = p5.Vector.normalize(v3); //단위벡터로 변환
    let vnormap = p5.Vector.mult(vnor, m2); //단위벡터에 가중치를 곱함
    let vnormap2 = p5.Vector.div(vnor2, 9);
    
      let m3= m2 * 150;
   this.s= constrain(m3,10,90);
    
    let end = windowHeight/3;
    
    if (this.pos.x >= windowWidth - 5 || this.pos.x <= 5) {
      vnormap.x = vnormap.x * -1;
      end = 1000;
      this.va.x = (this.va.x * -3) / 5;
    }
    if (this.pos.y >= windowHeight - 5 || this.pos.y <= 5) {
      vnormap.y = vnormap.y * -1;
      end = 1000;
      this.va.y = (this.va.y * -3) / 5;
    }
    if (mouseIsPressed === true ) {
 this.co = map(noise(yep), 0, 1, 0, 360);
    } //눈알 위치에 적용


    if (mouseIsPressed === true && m < end) {
      this.va = this.va.add(vnormap);
       this.co = map(noise(yep), 0, 1, 0, 360)+50;
    } //눈알 위치에 적용

    this.pos = this.pos.add(vnormap2);
  }

  display() {
    //display walker
    colorMode(HSB);
   
   stroke(this.s-5);
    strokeWeight(5)
    fill(this.s-2);
    ellipse(this.pos.x, this.pos.y, this.w);
    fill(0);
    strokeWeight(this.w / 7);
    stroke(this.co, this.s, this.s-20);
    ellipse(this.pos.x, this.pos.y, this.w *3/7);
    noStroke(
    )
    fill(this.s)
    ellipse(this.pos.x+ this.w/20,this.pos.y- this.w/7,this.w/10)
  }
}

