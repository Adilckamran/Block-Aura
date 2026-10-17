import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  speed: number;
  phase: number;
  colorType: 'gold' | 'cyan' | 'purple';
}

export const HeroSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate sphere points
    const pointsCount = 76;
    const radius = Math.min(width, height) * 0.38;
    const points: Point3D[] = [];

    // Fibonacci sphere distribution for uniform points
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < pointsCount; i++) {
      const y = 1 - (i / (pointsCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Color scheme: mostly champagne gold, with subtle neon cyan & solana purple nodes
      const colorType = i % 7 === 0 ? 'cyan' : i % 11 === 0 ? 'purple' : 'gold';

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
        size: Math.random() * 2 + 1.8,
        speed: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2,
        colorType,
      });
    }

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetAngleY = (mouseX / width) * 0.7;
      targetAngleX = -(mouseY / height) * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const fov = 420;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate angles towards target
      if (!prefersReducedMotion) {
        angleY += (targetAngleY - angleY) * 0.04 + 0.0025;
        angleX += (targetAngleX - angleX) * 0.04 + 0.0008;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Central ambient gold & cyan aura glow
      const radialGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        radius * 1.3
      );
      radialGlow.addColorStop(0, 'rgba(198, 161, 91, 0.16)');
      radialGlow.addColorStop(0.3, 'rgba(0, 240, 255, 0.04)');
      radialGlow.addColorStop(0.6, 'rgba(130, 71, 229, 0.03)');
      radialGlow.addColorStop(1, 'rgba(8, 8, 8, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Projected 2D points
      const projectedPoints: {
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        colorType: 'gold' | 'cyan' | 'purple';
      }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate X
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // Projection
        const scale = fov / (fov + z2 + radius);
        const x2d = x1 * scale + width / 2;
        const y2d = y2 * scale + height / 2;
        const alpha = Math.max(0.12, (z2 + radius) / (radius * 2));

        projectedPoints.push({
          x: x2d,
          y: y2d,
          z: z2,
          size: p.size * scale,
          alpha,
          colorType: p.colorType,
        });
      }

      // Draw connecting lines between near nodes
      const maxDistance = radius * 0.65;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(198, 161, 91, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes sorted by Z for proper depth
      projectedPoints.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);

        if (p.colorType === 'cyan') {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha * 0.95})`;
          ctx.shadowColor = 'rgba(0, 240, 255, 0.7)';
        } else if (p.colorType === 'purple') {
          ctx.fillStyle = `rgba(153, 69, 255, ${p.alpha * 0.95})`;
          ctx.shadowColor = 'rgba(153, 69, 255, 0.7)';
        } else {
          ctx.fillStyle = `rgba(226, 194, 127, ${p.alpha * 0.95})`;
          ctx.shadowColor = 'rgba(198, 161, 91, 0.6)';
        }

        ctx.shadowBlur = p.alpha > 0.6 ? 8 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Central core aura ring
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 0.36, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(198, 161, 91, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Outer subtle orbital ring
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-label="Interactive 3D blockchain sphere visual"
      />
      {/* Decorative center premium 3D coin badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-champagne-gold/40 bg-surface/90 backdrop-blur-md flex flex-col items-center justify-center shadow-gold-glow relative group">
          <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-pulse-subtle" />
          <span className="font-display text-xl sm:text-2xl font-bold tracking-widest text-champagne-gold">
            BA
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase text-secondary-text mt-0.5">
            DUAL-CHAIN
          </span>
        </div>
      </div>
    </div>
  );
};
