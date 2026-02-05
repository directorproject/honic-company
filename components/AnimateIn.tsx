"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type AnimationType = "fadeUp" | "zoomIn" | "slideUp" | "fadeIn";

interface AnimateInProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export default function AnimateIn({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-in animate-${animation} ${inView ? "animate-in-visible" : ""} ${className}`}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
