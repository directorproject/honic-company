"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  durationMs?: number;
  suffix?: string;
}

export default function CountUp({ end, durationMs = 1200, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
      setValue(0);
      return;
    }
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, durationMs, inView]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
