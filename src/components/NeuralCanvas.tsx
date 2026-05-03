"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODES = 90;
    const CONNECTION_DIST = 160;
    const MOUSE_REPEL = 120;
    let nodes: Node[] = [];
    let rafId: number;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      nodes = Array.from({ length: NODES }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // Mouse repulsion
        const dx = n.x - mouseRef.current.x;
        const dy = n.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          n.vx += (dx / dist) * force * 0.6;
          n.vy += (dy / dist) * force * 0.6;
          // Clamp velocity
          const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          if (speed > 2) { n.vx = (n.vx / speed) * 2; n.vy = (n.vy / speed) * 2; }
        }
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.45;
            const grad = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            grad.addColorStop(0, `rgba(123,47,255,${alpha})`);
            grad.addColorStop(1, `rgba(0,245,255,${alpha * 0.6})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 4);
        grd.addColorStop(0, "rgba(123,47,255,0.9)");
        grd.addColorStop(0.4, "rgba(0,245,255,0.4)");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,180,255,0.9)";
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    init();
    draw();

    window.addEventListener("resize", () => { resize(); init(); });
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", () => { resize(); init(); });
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
}
