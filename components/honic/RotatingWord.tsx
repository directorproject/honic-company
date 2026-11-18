"use client";

import { useEffect, useState } from "react";
import styles from "@/app/honic.module.css";

export default function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className={styles.rotator} aria-live="polite">
      <span key={i} className={styles.rotWord}>
        {words[i]}
      </span>
    </span>
  );
}
