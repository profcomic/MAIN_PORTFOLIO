"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubStatus from './GitHubStatus';

interface Position {
  x: number;
  y: number;
}

export default function DraggableStatus() {
  const [position, setPosition] = useState<Position>({
    x: 32,
    y: typeof window !== 'undefined' ? window.innerHeight - 200 : 400,
  });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef<Position>({ x: 0, y: 0 });
  const elementStartPos = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('draggableStatusPosition');
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition));
      } catch (e) {
        console.error('Failed to parse saved position:', e);
      }
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = { ...position };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 150;

      setPosition({
        x: Math.max(0, Math.min(maxX, elementStartPos.current.x + deltaX)),
        y: Math.max(0, Math.min(maxY, elementStartPos.current.y + deltaY)),
      });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        sessionStorage.setItem(
          'draggableStatusPosition',
          JSON.stringify(position)
        );
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging, position]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 40,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      className={`select-none ${
        isDragging ? 'scale-105' : 'scale-100'
      } transition-transform`}
    >
      <div
        className="flex flex-col items-center gap-4 p-4 bg-slate-950/90 backdrop-blur-xl rounded-2xl border border-violet-400/30 shadow-[0_0_35px_rgba(139,92,246,.15)]"
        onMouseDown={handleMouseDown}
      >
        {/* Drag handle header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-cyan-300/60 rounded-full" />
            ))}
          </div>
          <span className="text-xs text-slate-500">Drag orbital telemetry</span>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-violet-300/60 rounded-full" />
            ))}
          </div>
        </div>

        {/* Status Component */}
        <GitHubStatus />

        <div className="h-px w-8 bg-violet-400/30" />

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {[
            {
              label: 'GitHub',
              href: 'https://github.com/profcomic',
              color: 'text-cyan-300',
              dot: 'bg-emerald-300',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/anthonney-mwanzah-432977354',
              color: 'text-sky-300',
              dot: 'bg-emerald-300',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
              color: 'text-fuchsia-300',
              dot: 'bg-emerald-300',
            },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 ${s.color} border border-white/10`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-2 h-2 ${s.dot} rounded-full animate-pulse`}
              />
              <span className="text-xs font-medium">{s.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}