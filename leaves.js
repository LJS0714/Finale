class leaves extends Particle {
  
    constructor(position) {
      super(position);
      this.w = 12;
    }
    
    display() {
      stroke(255, this.lifespan);
      noStroke;
      push();
      fill(85,107,47);
      translate(this.position.x, this.position.y);
      let theta = map(this.position.x, 0, width, TWO_PI*-1, TWO_PI * 1);
      rotate(theta);
      curve(100, 50, 80, 150, 100, 100, 400, 100);
      pop();
    }
  }