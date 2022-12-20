let system, system2, system3;

function setup() {
  createCanvas(1000, 500);
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
  
  newTree();
  
}

function newTree() {

  stroke(0);
  push();
  translate(width/2, height);
  branch(120);
  pop();
  
}



function branch(h) {
  var sw = map(h, 2, 120, 1, 5);
  strokeWeight(sw);
  line(0, 0, 0, -h);
  translate(0, -h);
  

  h *= 0.66;

  if (h > 2) {
    var n = Math.floor(random(1, 4));
    for (var i = 0; i < n; i++) {
      var theta = random(-PI/3, PI/3);
      push();   
      rotate(theta);    
      branch(h);         
      pop();       
    }
  }
}
