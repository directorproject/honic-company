"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speedMs?: number;
  pauseMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterText({
  text,
  speedMs = 22,
  pauseMs = 0,
  className = "",
  style,
}: TypewriterTextProps) {
  const [visible, setVisible] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      rafRef.current = null;
      timeoutRef.current = null;
      startRef.current = null;
      setVisible(0);
      return;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setVisible(text.length);
      return;
    }

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const count = Math.min(Math.floor(elapsed / speedMs), text.length);
      setVisible(count);

      if (count < text.length) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [text, speedMs, pauseMs, inView]);

  return (
    <span ref={ref} className={className} style={style}>
      {text.slice(0, visible)}
      <span style={{ opacity: 0.6, marginLeft: 2 }}>|</span>
    </span>
  );
}
