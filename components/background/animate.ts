const animate = (canvas: HTMLCanvasElement, background: HTMLDivElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  let system: any;
  let width: number;
  let height: number;

  class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x || 0;
      this.y = y || 0;
    }
    add(v: Vector) {
      this.x += v.x;
      this.y += v.y;
    }
  }

  class Particle {
    pos: Vector;
    velocity: Vector;
    radius: number;
    color: string;

    constructor(color: string, radius: number, minRadius: number) {
      this.pos = new Vector(Math.random() * width, Math.random() * height);
      const angle = Math.random() * 2 * Math.PI;
      this.velocity = new Vector(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
      this.radius = Math.random() * radius + minRadius;
      this.color = color;
    }

    step() {
      this.pos.add(this.velocity);

      if (this.pos.x < -this.radius) this.pos.x = width + this.radius;
      else if (this.pos.x > width + this.radius) this.pos.x = -this.radius;
      if (this.pos.y < -this.radius) this.pos.y = height + this.radius;
      else if (this.pos.y > height + this.radius) this.pos.y = -this.radius;
    }

    draw(context: CanvasRenderingContext2D) {
      context.globalCompositeOperation = "soft-light";
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      context.fill();
    }
  }

  class ParticleSystem {
    ctx: CanvasRenderingContext2D;
    colorPalette: string[];
    particles: Particle[];

    constructor(
      amount: number,
      context: CanvasRenderingContext2D,
      colorPalette: string[],
      radius: number,
      minRadius: number
    ) {
      this.ctx = context;
      this.colorPalette = colorPalette;
      this.particles = [];
      for (let i = 0; i < amount; i += 1) {
        const color =
          this.colorPalette[
            Math.floor(Math.random() * this.colorPalette.length)
          ];
        this.particles.push(new Particle(color, radius, minRadius));
      }
    }
    step() {
      for (let i = 0; i < this.particles.length; i += 1) {
        const particle = this.particles[i];
        particle.step();
      }
    }
    draw() {
      this.ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < this.particles.length; i += 1) {
        const particle = this.particles[i];
        particle.draw(this.ctx);
      }
    }
  }

  const reset = () => {
    width = background.clientWidth;
    height = background.clientHeight;
    canvas.width = width;
    canvas.height = height;

    system = new ParticleSystem(
      Math.floor((width * height) / 50000) + 2,
      ctx,
      ["#004E92aa", "#000428aa", "#4c7a83aa", "#a8c0a5aa", "#e85f3daa"],
      100,
      50
    );
  };

  const loop = () => {
    requestAnimationFrame(loop);
    system.step();
    system.draw();
  };

  return () => {
    window.addEventListener("resize", () => reset());
    reset();
    loop();
  };
};

export { animate };
