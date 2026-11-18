"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/honic.module.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gasdesk", label: "GasDesk" },
  { href: "#projects", label: "Projects" },
  { href: "#packages", label: "Packages" },
  { href: "/learn", label: "HonicLearn" },
];

export default function HonicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.brand} aria-label="Honic Company Limited, back to top">
          <span className={styles.logoMark} />
          <span>Honic</span>
        </a>
        <nav className={`${styles.navLinks} ${open ? styles.navOpen : ""}`} aria-label="Main">
          {LINKS.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ),
          )}
          <a href="#contact" className={styles.navCta} onClick={() => setOpen(false)}>
            Talk to us
          </a>
        </nav>
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
