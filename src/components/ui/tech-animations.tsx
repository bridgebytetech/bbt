'use client';

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { cn } from '@/lib/utils';

// Matrix Rain Background
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ea5e9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-10 pointer-events-none"
    />
  );
}

// Particle Network
export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.5)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

// Glowing Orb
interface GlowingOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
}

export function GlowingOrb({
  color = 'primary',
  size = 300,
  top = '50%',
  left = '50%',
  delay = 0,
}: GlowingOrbProps) {
  const colors = {
    primary: 'rgba(14, 165, 233, 0.3)',
    accent: 'rgba(168, 85, 247, 0.3)',
    tech: 'rgba(0, 255, 136, 0.3)',
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${colors[color as keyof typeof colors]}, transparent 70%)`,
        filter: 'blur(40px)',
        animation: `float-slow ${20 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// Terminal Text Effect - FIXED with useState import
interface TerminalTextProps {
  text: string;
  className?: string;
}

export function TerminalText({ text, className }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <span className={cn('font-mono', className)}>
      <span className="text-cyan-400">$ </span>
      {displayText}
      {showCursor && <span className="text-cyan-400">_</span>}
    </span>
  );
}

// 3D Card Effect
interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export function Card3D({ children, className }: Card3DProps) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  const calc = (x: number, y: number, rect: DOMRect) => {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return [
      -(y - centerY) / 20,
      (x - centerX) / 20,
      1.05,
    ];
  };

  const trans = (x: number, y: number, s: number): string =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <animated.div
      className={cn('card card-tech', className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        set({ xys: calc(e.clientX, e.clientY, rect) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to(trans as any),
      }}
    >
      {children}
    </animated.div>
  );
}

// Cyber Button
interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CyberButton({ children, className, ...props }: CyberButtonProps) {
  return (
    <button
      className={cn(
        'relative px-8 py-4 font-bold text-white uppercase tracking-wider overflow-hidden group',
        'bg-gradient-to-r from-cyan-500 to-blue-600',
        'hover:from-cyan-400 hover:to-blue-500',
        'transition-all duration-300',
        'border border-cyan-400/30',
        'shadow-lg shadow-cyan-500/25',
        'hover:shadow-xl hover:shadow-cyan-500/40',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Animated border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white/50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      <div className="absolute top-0 left-0 w-0.5 h-full bg-white/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-white/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </button>
  );
}

// Code Block Animation
interface CodeBlockProps {
  code: string;
  language?: string;
  animated?: boolean;
}

export function CodeBlock({ code, language = 'typescript', animated = true }: CodeBlockProps) {
  const [displayCode, setDisplayCode] = useState(animated ? '' : code);

  useEffect(() => {
    if (!animated) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= code.length) {
        setDisplayCode(code.slice(0, index));
        index += 5;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [code, animated]);

  return (
    <div className="relative rounded-lg bg-gray-950 border border-gray-800 p-6 overflow-hidden">
      <div className="absolute top-4 right-4 text-xs text-gray-600">{language}</div>
      <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
        <code>{displayCode}</code>
      </pre>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-blue-600 animate-gradient-x" />
    </div>
  );
}

// Data Stream Visualization
export function DataStream() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech opacity-20" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          style={{
            top: `${20 * (i + 1)}%`,
            animation: `slideRight ${2 + i * 0.5}s linear infinite`,
            width: '200%',
            left: '-100%',
          }}
        />
      ))}
    </div>
  );
}

// Holographic Card
interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

export function HolographicCard({ children, className }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative p-6 rounded-xl overflow-hidden',
        'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90',
        'backdrop-blur-xl',
        'before:absolute before:inset-0',
        'before:bg-gradient-to-br before:from-cyan-500/20 before:via-blue-600/20 before:to-purple-600/20',
        'before:opacity-0 hover:before:opacity-100',
        'before:transition-opacity before:duration-500',
        'after:absolute after:inset-0',
        'after:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(14,165,233,0.15),transparent_50%)]',
        'border border-gray-800 hover:border-cyan-500/50',
        'transition-all duration-500',
        'hover:shadow-2xl hover:shadow-cyan-500/20',
        className
      )}
      style={{
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}