let system, system2, system3;

function setup() {
  createCanvas(400, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  system2 = new ParticleSystem(createVector(150, 100));
  system3 = new ParticleSystem(createVector(250, 100));
  
}

function draw() {
  
  
  background(255);
  
  fill(128,0,0);
  rect(200,40,10,400);
  
  system.addParticle();
  system.run();
  
  system2.addParticle();
  system2.run();
  
  system3.addParticle();
  system3.run();
  
  
}
