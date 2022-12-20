let system, system2, system3;

function setup() {
  createCanvas(1000, 600);
  system = new ParticleSystem(createVector(width / 2, 50));
  system2 = new ParticleSystem(createVector(width/3, 100));
  system3 = new ParticleSystem(createVector(width*2/3, 100));

  
}

function draw() {
  
  background(255);
  
  system.addParticle();
  system.run();
  
  system2.addParticle();
  system2.run();
  
  system3.addParticle();
  system3.run();
  
  translate(width/2,height-20);
  branch(0);
  noLoop();
}

function branch(depth){ 
  if (depth < 10) { 
    line(0,0,0,-height/10); // draw a line going up
    { 
      translate(0,-height/10); // move the space upwards
      rotate(random(-0.05,0.05));  // random wiggle

      if (random(1.0) < 0.6){ // branching   
        rotate(0.3); // rotate to the right
        scale(0.8); // scale down
        
        push(); // now save the transform state
        branch(depth + 1); // start a new branch!
        pop(); // go back to saved state
        
        rotate(-0.6); // rotate back to the left 
        
        push(); // save state
        branch(depth + 1);   // start a second new branch 
        pop(); // back to saved state        
     } 
      else { // no branch - continue at the same depth  
        branch(depth);
      } 
    } 
  }
}