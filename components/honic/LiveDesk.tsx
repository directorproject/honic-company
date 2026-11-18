"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/honic.module.css";

type Disp = { name: string; state: "idle" | "filling" | "done"; kg: number; target: number; wait: number };

const START: Disp[] = [
  { name: "Dispenser 1", state: "filling", kg: 4.2, target: 11.7, wait: 0 },
  { name: "Dispenser 2", state: "idle", kg: 0, target: 9.4, wait: 6 },
  { name: "Dispenser 3", state: "filling", kg: 8.9, target: 13.2, wait: 0 },
];

/** Illustrative GasDesk screen: fills climb, finish, get a receipt, and add to today's totals. */
export default function LiveDesk() {
  const [disps, setDisps] = useState<Disp[]>(START);
  const [totals, setTotals] = useState({ kg: 486.3, fills: 41, receipts: 41 });
  const [toast, setToast] = useState<string | null>(null);
  const ref = useRef<Disp[]>(START);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      const finished: Disp[] = [];
      const next = ref.current.map((d): Disp => {
        if (d.state === "filling") {
          const kg = Math.min(d.target, d.kg + 0.18 + Math.random() * 0.12);
          if (kg >= d.target) {
            finished.push(d);
            return { ...d, kg, state: "done", wait: 9 };
          }
          return { ...d, kg };
        }
        if (d.wait > 0) return { ...d, wait: d.wait - 1 };
        if (d.state === "done") return { ...d, state: "idle", kg: 0, wait: 4 + Math.floor(Math.random() * 6) };
        return { ...d, state: "filling", kg: 0, target: +(7 + Math.random() * 8).toFixed(1) };
      });
      ref.current = next;
      setDisps(next);
      if (finished.length) {
        const f = finished[0];
        setTotals((t0) => ({
          kg: +(t0.kg + finished.reduce((s, d) => s + d.target, 0)).toFixed(1),
          fills: t0.fills + finished.length,
          receipts: t0.receipts + finished.length,
        }));
        setToast(`${f.name} · ${f.target.toFixed(1)} kg · receipt issued`);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(null), 2600);
      }
    }, 220);
    return () => {
      clearInterval(t);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <div className={styles.desk} role="img" aria-label="Illustration of the GasDesk sales screen with dispensers filling and receipts being issued">
      <div className={styles.deskBar}>
        <span className={styles.deskDots}>
          <i />
          <i />
          <i />
        </span>
        <span>GasDesk · Sales</span>
        <span className={styles.livePill}>Live</span>
      </div>
      <div className={styles.deskTotals}>
        <div>
          <span>Today</span>
          <strong>{totals.kg.toFixed(1)} kg</strong>
        </div>
        <div>
          <span>Fills</span>
          <strong>{totals.fills}</strong>
        </div>
        <div>
          <span>Receipts</span>
          <strong>{totals.receipts}</strong>
        </div>
      </div>
      <div className={styles.deskDisps}>
        {disps.map((d) => (
          <div key={d.name} className={`${styles.disp} ${styles["disp_" + d.state]}`}>
            <div className={styles.dispTop}>
              <span>{d.name}</span>
              <em>{d.state === "filling" ? "Filling" : d.state === "done" ? "Receipted" : "Idle"}</em>
            </div>
            <strong>
              {d.kg.toFixed(2)}
              <small> kg</small>
            </strong>
            <span className={styles.dispBar}>
              <span style={{ width: `${Math.min(100, (d.kg / d.target) * 100)}%` }} />
            </span>
          </div>
        ))}
      </div>
      <div className={styles.deskChart} aria-hidden="true">
        {[38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 82, 94].map((h, i) => (
          <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }} />
        ))}
      </div>
      <div className={`${styles.toast} ${toast ? styles.toastOn : ""}`}>{toast ?? " "}</div>
      <span className={styles.deskNote}>Illustration · sample figures</span>
    </div>
  );
}
