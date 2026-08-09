"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [client, setClient] = useState(false);

  useEffect(() => setClient(true), []);

  const move = useCallback(
    (e: MouseEvent) => {
      if (!client) return;
      setTrail((prev) =>
        [
          ...prev,
          { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY },
        ].slice(-14)
      );
    },
    [client]
  );

  useEffect(() => {
    if (!client) return;
    window.addEventListener('mousemove', move);
    const timer = setInterval(() => setTrail((prev) => prev.slice(1)), 45);

    return () => {
      window.removeEventListener('mousemove', move);
      clearInterval(timer);
    };
  }, [move, client]);

  if (!client) return null;

  return (
    <AnimatePresence>
      {trail.map((p, i) => (
        <motion.span
          key={p.id}
          className="fixed pointer-events-none z-[55] rounded-full"
          style={{
            left: p.x - 3,
            top: p.y - 3,
            width: 6,
            height: 6,
            background: i % 3 === 0 ? '#67e8f9' : '#a78bfa',
            boxShadow:
              i % 3 === 0
                ? '0 0 12px rgba(103,232,249,.7)'
                : '0 0 12px rgba(167,139,250,.65)',
          }}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: Math.min(0.6, ((i + 1) / trail.length) * 0.6),
            scale: 1 + i / trail.length,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </AnimatePresence>
  );
}