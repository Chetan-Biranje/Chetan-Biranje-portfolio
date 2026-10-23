import React, { useCallback, useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const matrixCharsRef = useRef([]);
  const animationRef = useRef(null);

  const initParticles = useCallback((canvas) => {
    const particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    return particles;
  }, []);

  const initMatrixChars = useCallback((canvas) => {
    const chars = [];
    const columns = Math.floor(canvas.width / 20);
    const matrixGlyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|/<>~`';

    for (let i = 0; i < columns; i++) {
      chars.push({
        x: i * 20,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        char: matrixGlyphs[Math.floor(Math.random() * matrixGlyphs.length)],
        opacity: Math.random() * 0.15 + 0.02,
        changeCounter: 0,
        changeInterval: Math.floor(Math.random() * 20) + 5,
        glyphs: matrixGlyphs,
      });
    }
    return chars;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw matrix rain characters
    const matrixChars = matrixCharsRef.current;
    ctx.font = '14px "Fira Code", monospace';
    
    for (let i = 0; i < matrixChars.length; i++) {
      const mc = matrixChars[i];
      ctx.fillStyle = `rgba(0, 255, 136, ${mc.opacity})`;
      ctx.fillText(mc.char, mc.x, mc.y);

      mc.y += mc.speed;
      mc.changeCounter++;

      if (mc.changeCounter >= mc.changeInterval) {
        mc.char = mc.glyphs[Math.floor(Math.random() * mc.glyphs.length)];
        mc.changeCounter = 0;
      }

      if (mc.y > canvas.height) {
        mc.y = -20;
        mc.speed = Math.random() * 2 + 1;
        mc.opacity = Math.random() * 0.15 + 0.02;
      }
    }

    // Draw floating particles
    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.1 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas);
      matrixCharsRef.current = initMatrixChars(canvas);
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles, initMatrixChars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;
