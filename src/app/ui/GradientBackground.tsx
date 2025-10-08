'use client';

import { useEffect, useRef } from 'react';

function createParticle(container: HTMLDivElement) {
  const particle = document.createElement('div');
  const size = Math.random() * 3 + 1;

  particle.className = 'absolute rounded-full bg-white/20 pointer-events-none';
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  resetParticle(particle);
  container.appendChild(particle);
  animateParticle(particle);
}

function resetParticle(particle: HTMLDivElement) {
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;

  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.opacity = '0';

  return { x: posX, y: posY };
}

function animateParticle(particle: HTMLDivElement) {
  const pos = resetParticle(particle);
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  setTimeout(() => {
    particle.style.transition = `all ${duration}s linear`;
    particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();

    const moveX = pos.x + (Math.random() * 20 - 10);
    const moveY = pos.y - Math.random() * 30;

    particle.style.left = `${moveX}%`;
    particle.style.top = `${moveY}%`;

    setTimeout(() => {
      particle.remove();
      if (particle.parentElement) {
        createParticle(particle.parentElement as HTMLDivElement);
      }
    }, duration * 1000);
  }, delay * 1000);
}

export function GradientBackground() {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    // Create initial particles
    for (let i = 0; i < 80; i++) {
      createParticle(container);
    }

    // Mouse interaction for particles
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;

      particle.className = 'absolute rounded-full bg-white/40 pointer-events-none';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;

      container.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        setTimeout(() => particle.remove(), 2000);
      }, 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient spheres */}
      <div className="absolute w-[40vw] h-[40vw] rounded-full blur-[60px] bg-gradient-to-br from-[rgba(255,0,128,0.8)] to-[rgba(255,102,0,0.4)] -top-[10%] -left-[10%] animate-[float-1_15s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[45vw] h-[45vw] rounded-full blur-[60px] bg-gradient-to-br from-[rgba(72,0,255,0.8)] to-[rgba(0,183,255,0.4)] -bottom-[20%] -right-[10%] animate-[float-2_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[30vw] h-[30vw] rounded-full blur-[60px] bg-gradient-to-br from-[rgba(133,89,255,0.5)] to-[rgba(98,216,249,0.3)] top-[60%] left-[20%] animate-[float-3_20s_ease-in-out_infinite_alternate]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] z-20" />

      {/* Particles container */}
      <div ref={particlesContainerRef} className="absolute inset-0 z-30 pointer-events-none" />
    </div>
  );
}
