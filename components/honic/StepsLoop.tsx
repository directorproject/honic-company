"use client";

import { useEffect, useState } from "react";
import styles from "@/app/honic.module.css";

const STEPS = [
  { t: "Fill", d: "A vehicle is filled at the dispenser." },
  { t: "Read", d: "Our device reads the kilograms on the spot." },
  { t: "Receipt", d: "A TRA fiscal receipt is issued for the sale." },
  { t: "See", d: "The sale joins your sales history, reports and analytics." },
];

export default function StepsLoop() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((n) => (n + 1) % STEPS.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={styles.steps} role="list" style={{ ["--p" as string]: active / (STEPS.length - 1) }}>
      <span className={styles.stepsTrack} aria-hidden="true">
        <span className={styles.stepsFill} />
      </span>
      {STEPS.map((s, i) => (
        <div role="listitem" key={s.t} className={`${styles.step} ${i <= active ? styles.stepOn : ""}`}>
          <span className={styles.stepDot}>{i + 1}</span>
          <h4>{s.t}</h4>
          <p>{s.d}</p>
        </div>
      ))}
    </div>
  );
}
