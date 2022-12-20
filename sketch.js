let particleSystem;

function setup() {
  createCanvas(1400, 600);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(255);
  
  particleSystem.run();
  strokeWeight(10);
  translate(width/2,height-20);
  branch(0);
  
  randomSeed(1);
}

function mousePressed(e) {
  particleSystem.origin = createVector(mouseX, mouseY);
  particleSystem.addParticle();
  return false;
}

function branch(depth){ 
  if (depth < 10) { 
    line(0,0,0,-height/10);
    { 
      translate(0,-height/10);
      rotate(random(-0.05,0.05)); 

      if (random(1.0) < 0.6){   
        rotate(0.3);
        scale(0.8); 
        
        push(); 
        branch(depth + 1);
        pop(); 
        
        rotate(-0.6); 
        
        push(); 
        branch(depth + 1);   
        pop();       
     } 
      else {   
        branch(depth);
      } 
    } 
  }
}