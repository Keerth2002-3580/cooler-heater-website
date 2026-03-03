'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      maxOpacity: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = color;
        this.maxOpacity = Math.random() * 0.3 + 0.1;
        this.opacity = 0;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Fade in
        if (this.opacity < this.maxOpacity) {
          this.opacity += 0.01;
        }
        
        // Fade out as particles move away from origin
        const distanceFromOrigin = Math.sqrt(
          Math.pow(this.x - canvas!.width / 4, 2) + 
          Math.pow(this.y - canvas!.height / 2, 2)
        );
        if (distanceFromOrigin > 200) {
          this.opacity -= 0.02;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particles
    const leftParticles: Particle[] = [];
    const rightParticles: Particle[] = [];

    // Left burst (pink/magenta)
    for (let i = 0; i < 80; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const distance = Math.random() * 150;
      const x = canvas.width / 4 + Math.cos(angle) * distance;
      const y = canvas.height / 2 + Math.sin(angle) * distance;
      leftParticles.push(new Particle(x, y, '#ec4899')); // Pink
    }

    // Right burst (blue/cyan)
    for (let i = 0; i < 80; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const distance = Math.random() * 150;
      const x = (canvas.width * 3) / 4 + Math.cos(angle) * distance;
      const y = canvas.height / 2 + Math.sin(angle) * distance;
      rightParticles.push(new Particle(x, y, '#06b6d4')); // Cyan
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      [...leftParticles, ...rightParticles].forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove faded particles and create new ones
        if (particle.opacity <= 0) {
          if (index < leftParticles.length) {
            const angle = (Math.random() * Math.PI * 2);
            const distance = Math.random() * 50;
            leftParticles[index] = new Particle(
              canvas.width / 4 + Math.cos(angle) * distance,
              canvas.height / 2 + Math.sin(angle) * distance,
              '#ec4899'
            );
          } else {
            const angle = (Math.random() * Math.PI * 2);
            const distance = Math.random() * 50;
            const rightIndex = index - leftParticles.length;
            rightParticles[rightIndex] = new Particle(
              (canvas.width * 3) / 4 + Math.cos(angle) * distance,
              canvas.height / 2 + Math.sin(angle) * distance,
              '#06b6d4'
            );
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
