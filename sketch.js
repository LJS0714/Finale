let system, system2, system3;

function setup() {
  createCanvas(1000, 1000);
  system = new ParticleSystem(createVector(width / 2, 50));
  system2 = new ParticleSystem(createVector(width/3, 100));
  system3 = new ParticleSystem(createVector(width*2/3, 100));
  
}

function draw() {
  
  
  background(255);
  
  fill(128,0,0);
  rect(width/2,40,10,height);
  
  system.addParticle();
  system.run();
  
  system2.addParticle();
  system2.run();
  
  system3.addParticle();
  system3.run();
  
  
}
