class ParticleSystem {

    constructor(position) {
      this.origin = position.copy();
      this.particles = [];
    }
  
    addParticle() {
      let r = random(1);
      if (r < 0.2) {
        this.particles.push(new Particle(this.origin));
      } else {
        this.particles.push(new leaves(this.origin));
      }
    }
  
    run() {
      for (let particle of this.particles) {
        particle.run();
      }
  
      // Filter removes any elements of the array that do not pass the test
      this.particles = this.particles.filter(particle => !particle.isDead());
    }
  }