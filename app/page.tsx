import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import styles from "./honic.module.css";
import HonicNav from "@/components/honic/HonicNav";
import Reveal from "@/components/honic/Reveal";
import RotatingWord from "@/components/honic/RotatingWord";
import StepsLoop from "@/components/honic/StepsLoop";
import LiveDesk from "@/components/honic/LiveDesk";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Honic Company Limited – Engineering solutions and related technologies | GasDesk",
  description:
    "Honic Company Limited is a Tanzanian company working in engineering solutions and related technologies. Makers of GasDesk: sales monitoring, reports and analytics, shift control and TRA fiscal receipts for CNG stations.",
};

const PHONES = [
  { label: "+255 627 377 461", tel: "+255627377461" },
  { label: "+255 624 619 842", tel: "+255624619842" },
];
const EMAIL = "honiccompany@gmail.com";

/* Stroke icons (24×24) */
const I = {
  receipt: <><path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21z" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  chart: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4M7 12l3-3 2 2 4-4" /></>,
  people: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 4.5a3.2 3.2 0 0 1 0 6.4M21 20c0-2.6-1.6-4.8-4-5.6" /></>,
  box: <><path d="M3 7l9-4 9 4-9 4z" /><path d="M3 7v10l9 4 9-4V7M12 11v10" /></>,
  wrench: <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5L16 12l-4-4z" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" /></>,
  pulse: <path d="M4 12h4l2-5 4 10 2-5h4" />,
  flame: <path d="M12 3c3 4 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 3-6 6-10z" />,
  lock: <><rect x="5" y="10" width="14" height="10" rx="1.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  pin: <><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 7l9 6 9-6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" /></>,
  cap: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></>,
  download: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};
function Icon({ name, className }: { name: keyof typeof I; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? styles.ico} aria-hidden="true">
      {I[name]}
    </svg>
  );
}

const SERVICES: { icon: keyof typeof I; title: string; text: string; feature?: boolean }[] = [
  { icon: "receipt", title: "TRA fiscal receipts", text: "An EFD or VFD receipt for every sale, issued automatically at the end of each fill or by the attendant. Provided through Smart EFD, a TRA-accredited service provider.", feature: true },
  { icon: "chip", title: "Dispenser devices", text: "Our device is fitted to each dispenser and reads every fill directly: kilograms, flow and gas temperature. If the network drops, it keeps the sales and sends them when the connection returns." },
  { icon: "chart", title: "Sales, reports and analytics", text: "Monitor every dispenser as it sells, look back through your full sales history, and check reports and analytics for any day, week, month or year. Reports export to PDF and Excel-ready CSV." },
  { icon: "people", title: "Shift management", text: "Register operators and supervisors, open and close shifts with meter readings, and see exactly which attendant sold what." },
  { icon: "box", title: "Stock management", text: "Track spare parts and consumables, where they are kept, and every item that comes in or goes out." },
  { icon: "wrench", title: "Plant automation and electronics maintenance", text: "Compressor, storage and device monitoring and management for stations that want the full plant view. Automation is delivered as a service, with critical automation installed locally at the station. Backed by our maintenance service for your station's electronics." },
];

const WHY: { icon: keyof typeof I; title: string; text: string }[] = [
  { icon: "receipt", title: "TRA receipts built in", text: "Compliance comes with the system, with no extra vendor to manage." },
  { icon: "check", title: "Proven at a live station", text: "GasDesk runs today at Energo's Coca-Cola station." },
  { icon: "pulse", title: "One partner to call", text: "Installation, training, receipts and support all come from Honic." },
  { icon: "flame", title: "Made for CNG", text: "Gas in kilograms and pressure in bar, storage banks and compressors. Not a petrol system adapted for gas." },
  { icon: "lock", title: "Your revenue protected", text: "Sales cannot be edited after they are recorded, no sale is lost when the network drops, and every action is logged." },
  { icon: "pin", title: "Devices repaired at our cost", text: "We maintain and repair our devices at our own cost, unless the damage is caused by customer negligence. Our Dar es Salaam team comes to site." },
];

const PROCESS = [
  { t: "Site visit", d: "We visit your station and agree what you need." },
  { t: "Installation", d: "A Honic device is fitted to each dispenser." },
  { t: "Set-up", d: "Dispensers, prices, receipts and staff accounts." },
  { t: "Training", d: "Hands-on training for your team, with a user guide." },
  { t: "Go live", d: "Every sale is recorded and receipted from day one." },
  { t: "Support", d: "We stay with you after go-live." },
];

const PACKAGES = [
  { name: "Package 1", sub: "TRA compliance", items: ["TRA fiscal receipts (EFD or VFD)", "TRA integration"] },
  { name: "Package 2", sub: "Everything in Package 1, plus", items: ["Sales", "Reports", "Analytics", "Shift management"] },
  { name: "Package 3", sub: "Everything in Package 2, plus", items: ["Plant monitoring, management and automation", "Stock management", "Maintenance of your station's electronics"], best: true },
];

export default function Home() {
  return (
    <div className={`${styles.root} ${jakarta.className}`} id="top">
      <Reveal />
      <HonicNav />

      {/* HERO */}
      <section className={styles.hero}>
        <svg className={styles.heroFlow} viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <path key={n} d={`M-50 ${420 - n * 46} C 250 ${300 - n * 40}, 520 ${560 - n * 50}, 820 ${360 - n * 38} S 1150 ${220 - n * 30}, 1260 ${260 - n * 34}`} style={{ animationDelay: `${n * -1.6}s` }} />
          ))}
        </svg>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Honic Company Limited · Dar es Salaam</span>
            <h1>
              Let&apos;s connect
              <br />
              your station.
            </h1>
            <p className={styles.heroLead}>
              Engineering solutions and related technologies. With GasDesk, every CNG sale is{" "}
              <RotatingWord words={["monitored live", "receipted for TRA", "in your sales history", "in your reports", "in your analytics", "tied to a shift"]} />
            </p>
            <div className={styles.heroCtas}>
              <a href="#contact" className={styles.btnPrimary}>
                Talk to us <Icon name="arrow" className={styles.btnIco} />
              </a>
              <a href="/Honic-Company-Profile.pdf" download className={styles.btnGhost}>
                <Icon name="download" className={styles.btnIco} /> Company profile (PDF)
              </a>
            </div>
            <div className={styles.heroPhones}>
              <Icon name="phone" className={styles.heroPhoneIco} />
              {PHONES.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && <i>|</i>}
                  <a href={`tel:${p.tel}`}>{p.label}</a>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.heroArt}>
            <LiveDesk />
          </div>
        </div>
        <div className={styles.marquee} aria-hidden="true">
          <div>
            {[0, 1].map((k) => (
              <span key={k}>
                TRA fiscal receipts <b>•</b> Sales monitoring <b>•</b> Sales history <b>•</b> Reports <b>•</b> Analytics <b>•</b> Shift management <b>•</b> Stock management <b>•</b> Plant monitoring <b>•</b> Electronics maintenance <b>•</b>{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div data-reveal className={styles.rv}>
              <span className={styles.label}>About us</span>
              <h2 className={styles.h2}>Who we are</h2>
              <p className={styles.lead}>Honic Company Limited is a Tanzanian company based in Dar es Salaam, working in engineering solutions and related technologies.</p>
              <p className={styles.body}>
                Our flagship product is GasDesk, built for CNG stations. It records each fill at the dispenser the moment it happens, so owners can monitor sales as they happen, look back through sales history, and check reports and analytics, on a phone or a computer. Every sale gets a TRA fiscal receipt. We install it, train the staff, and support it after go-live.
              </p>
              <div className={styles.facts}>
                <div><span>Head office</span><strong>Dar es Salaam</strong></div>
                <div><span>Founded</span><strong>2025</strong></div>
                <div><span>Sector</span><strong>Engineering solutions and related technologies</strong></div>
              </div>
            </div>
            <div className={styles.vmCol}>
              <div data-reveal className={`${styles.rv} ${styles.vm}`}>
                <span className={styles.label}>Our vision</span>
                <p>To be East Africa&apos;s most trusted partner in engineering solutions and related technologies, helping every business we serve run with accuracy, transparency and confidence.</p>
              </div>
              <div data-reveal className={`${styles.rv} ${styles.vm} ${styles.vmAlt}`} style={{ transitionDelay: "120ms" }}>
                <span className={styles.label}>Our mission</span>
                <p>To deliver reliable engineering solutions that help businesses work accurately and with confidence, starting with GasDesk for CNG stations.</p>
              </div>
            </div>
          </div>
          <div className={styles.values}>
            {[
              ["Accuracy", "Every kilogram and every shilling is recorded correctly."],
              ["Accountability", "Every action has a name and a time against it."],
              ["Safety first", "Critical controls stay on site, in the hands of your staff."],
              ["Close support", "A local team that answers and visits."],
            ].map(([t, d], i) => (
              <div key={t} data-reveal className={styles.rv} style={{ transitionDelay: `${i * 90}ms` }}>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.section}>
        <div className={styles.wrap}>
          <div data-reveal className={`${styles.rv} ${styles.head}`}>
            <span className={styles.label}>What we do</span>
            <h2 className={styles.h2}>Our services</h2>
            <p className={styles.lead}>Everything a CNG station needs to record, receipt and manage its sales.</p>
          </div>
          <div className={styles.services}>
            {SERVICES.map((s, i) => (
              <article key={s.title} data-reveal className={`${styles.rv} ${styles.svc} ${s.feature ? styles.svcFeature : ""}`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <span className={styles.icoBox}><Icon name={s.icon} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GASDESK */}
      <section id="gasdesk" className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.wrap}>
          <div data-reveal className={`${styles.rv} ${styles.head}`}>
            <span className={styles.label}>Our solution</span>
            <h2 className={styles.h2}>GasDesk: every kilogram, as it is sold</h2>
            <p className={styles.body}>Many station owners only learn what was sold at the end of the day, from paper records and meter readings that are hard to check. Gas that is sold but not recorded is money lost. GasDesk closes that gap.</p>
          </div>
          <div data-reveal className={styles.rv}>
            <StepsLoop />
          </div>
        </div>
      </section>

      {/* RECEIPTS */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div data-reveal className={styles.rv}>
              <span className={styles.label}>TRA compliance</span>
              <h2 className={styles.h2}>A fiscal receipt for every sale</h2>
              <div className={styles.band}>
                <h3>Receipts come with the system</h3>
                <p>Stations must issue a TRA fiscal receipt for their sales. With GasDesk you do not need to arrange a receipt provider yourself: we connect it for you, and receipts are part of every package.</p>
              </div>
              <dl className={styles.kv}>
                <div><dt>Receipt type</dt><dd>EFD by default, or VFD if you prefer</dd></div>
                <div><dt>How it is issued</dt><dd>Automatically at the end of each fill, or by the attendant</dd></div>
                <div><dt>Service provider</dt><dd>Smart EFD, TRA-accredited</dd></div>
                <div><dt>Available in</dt><dd>Every GasDesk package</dd></div>
                <div><dt>In use at</dt><dd>Energo CNG Tanzania</dd></div>
              </dl>
            </div>
            <div data-reveal className={`${styles.rv} ${styles.receiptStage}`}>
              <div className={styles.printer} aria-hidden="true" />
              <svg className={styles.receipt} viewBox="0 0 240 330" role="img" aria-label="Illustration of a fiscal receipt for a CNG sale">
                <path d="M12 8 H228 V300 l-12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 -12 10 -12 -10 Z" fill="#FFFFFF" />
                <rect x="12" y="8" width="216" height="6" fill="#1626D9" />
                <text x="120" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0F1638">CNG STATION</text>
                <text x="120" y="60" textAnchor="middle" fontSize="9.5" fill="#6B7293" letterSpacing="1.5">FISCAL RECEIPT · EFD</text>
                <line x1="30" y1="74" x2="210" y2="74" stroke="#E1E5F0" strokeDasharray="3 3" />
                <g fontSize="10.5" fill="#3B4262">
                  <text x="30" y="96">Dispenser</text><text x="210" y="96" textAnchor="end" fill="#0F1638" fontWeight="600">DISP-2 · N1</text>
                  <text x="30" y="116">Product</text><text x="210" y="116" textAnchor="end" fill="#0F1638" fontWeight="600">CNG</text>
                  <text x="30" y="136">Quantity</text><text x="210" y="136" textAnchor="end" fill="#0F1638" fontWeight="600">11.70 kg</text>
                  <text x="30" y="156">Amount</text><text x="210" y="156" textAnchor="end" fill="#0F1638" fontWeight="600">TZS 00,000</text>
                </g>
                <line x1="30" y1="172" x2="210" y2="172" stroke="#E1E5F0" strokeDasharray="3 3" />
                <rect x="30" y="184" width="180" height="26" rx="2" fill="#F3F5FC" />
                <text x="42" y="201" fontSize="10.5" fontWeight="700" fill="#1626D9">RECEIPT ISSUED</text>
                <circle cx="196" cy="197" r="6" fill="#17B26A" /><path d="M193 197 l2 2 4 -4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <g fill="#0F1638">
                  <rect x="92" y="222" width="56" height="56" fill="none" stroke="#0F1638" strokeWidth="2" />
                  <rect x="98" y="228" width="14" height="14" /><rect x="128" y="228" width="14" height="14" /><rect x="98" y="258" width="14" height="14" />
                  <rect x="118" y="246" width="6" height="6" /><rect x="128" y="256" width="6" height="6" /><rect x="136" y="264" width="6" height="8" /><rect x="118" y="262" width="6" height="10" /><rect x="128" y="246" width="14" height="5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.wrap}>
          <div data-reveal className={`${styles.rv} ${styles.head}`}>
            <span className={styles.label}>Why choose us</span>
            <h2 className={styles.h2}>Why stations work with Honic</h2>
          </div>
          <div className={styles.why}>
            {WHY.map((w, i) => (
              <div key={w.title} data-reveal className={`${styles.rv} ${styles.whyCard}`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <span className={styles.icoBox}><Icon name={w.icon} /></span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal className={`${styles.rv} ${styles.safe}`}>
            <h4>Safety comes first</h4>
            <p>Critical automation, such as starting and stopping compressors and resetting safety equipment, is done locally at the station, never from the web. GasDesk shows you what the plant is doing, and your site stays in control.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.project}>
            <div data-reveal className={`${styles.rv} ${styles.projArt}`} aria-hidden="true">
              <svg viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0B1350" /><stop offset="1" stopColor="#1626D9" /></linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#pg)" />
                <g className={styles.projLines} fill="none" stroke="#2DB4EE" strokeOpacity=".35" strokeWidth="1.5">
                  <path d="M-10 230 C 90 180, 170 260, 260 200 S 380 140, 420 160" />
                  <path d="M-10 255 C 90 205, 170 285, 260 225 S 380 165, 420 185" />
                </g>
                <g transform="translate(150 60)">
                  <rect width="100" height="170" rx="2" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".5" />
                  <rect x="14" y="16" width="72" height="40" rx="2" fill="#2DB4EE" fillOpacity=".25" stroke="#2DB4EE" strokeOpacity=".8" />
                  <text x="50" y="42" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">11.70</text>
                  <rect x="14" y="70" width="72" height="8" rx="2" fill="#fff" fillOpacity=".2" />
                  <rect x="14" y="86" width="50" height="8" rx="2" fill="#fff" fillOpacity=".2" />
                  <path d="M100 100 h24 v60" stroke="#fff" strokeOpacity=".6" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="50" cy="132" r="14" fill="none" stroke="#17B26A" strokeWidth="2" />
                  <circle className={styles.projPing} cx="50" cy="132" r="14" fill="none" stroke="#17B26A" strokeWidth="2" />
                  <path d="M44 132 l4 4 8 -8" stroke="#17B26A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <div data-reveal className={styles.rv}>
              <span className={styles.label}>Our projects</span>
              <h2 className={styles.h2}>Energo CNG Tanzania</h2>
              <div className={styles.clientRow}>
                <div><span>Client</span><strong>Energo CNG Tanzania</strong></div>
                <div><span>Site</span><strong>Coca-Cola station</strong></div>
              </div>
              <p className={styles.body}>Energo CNG Tanzania uses GasDesk at its Coca-Cola station. A Honic device is fitted to each dispenser, every fill appears on Energo&apos;s desk as it happens, and each sale is issued a TRA fiscal receipt. As Energo&apos;s needs grew, we added shift management so managers can see which attendant sold what on each dispenser.</p>
              <h4 className={styles.subhead}>What we delivered</h4>
              <ul className={styles.ticks}>
                <li>Devices fitted to every dispenser</li>
                <li>GasDesk sales monitoring, history, reports and analytics</li>
                <li>TRA fiscal receipts</li>
                <li>Shift management for operators and supervisors</li>
                <li>Staff training and a full user guide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + PACKAGES */}
      <section id="packages" className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.wrap}>
          <div data-reveal className={`${styles.rv} ${styles.head}`}>
            <span className={styles.label}>Working together</span>
            <h2 className={styles.h2}>How we work</h2>
          </div>
          <ol className={styles.process}>
            {PROCESS.map((p, i) => (
              <li key={p.t} data-reveal className={styles.rv} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <span className={styles.procNum}>{String(i + 1).padStart(2, "0")}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className={`${styles.rv} ${styles.head}`} style={{ marginTop: 72 }}>
            <span className={styles.label}>Packages</span>
            <h2 className={styles.h2}>Choose the package that fits</h2>
          </div>
          <div className={styles.pkgs}>
            {PACKAGES.map((p, i) => (
              <div key={p.name} data-reveal className={`${styles.rv} ${styles.pkg} ${p.best ? styles.pkgBest : ""}`} style={{ transitionDelay: `${i * 110}ms` }}>
                <div className={styles.pkgTop}>
                  <h3>{p.name}</h3>
                  <span>{p.sub}</span>
                </div>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div data-reveal className={`${styles.rv} ${styles.care}`}>
            <h4>Our devices, our responsibility</h4>
            <p>We maintain and repair our devices at our own cost, as long as the damage is not caused by customer negligence.</p>
          </div>
          <p className={styles.note}>Packages are quoted per station. Installation is quoted separately when needed.</p>
        </div>
      </section>

      {/* HONICLEARN */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <Link href="/learn" data-reveal className={`${styles.rv} ${styles.division}`}>
            <span className={styles.icoBox}><Icon name="cap" /></span>
            <div>
              <span className={styles.label}>Also from Honic</span>
              <h3>HonicLearn</h3>
              <p>Our education department: curriculum-based practical learning kits, workshops and training in Science, Engineering and Technology.</p>
            </div>
            <Icon name="arrow" className={styles.divArrow} />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <svg className={styles.heroFlow} viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          {[0, 1, 2, 3].map((n) => (
            <path key={n} d={`M-50 ${480 - n * 50} C 300 ${380 - n * 40}, 600 ${600 - n * 50}, 900 ${400 - n * 40} S 1150 ${300 - n * 30}, 1260 ${320 - n * 34}`} style={{ animationDelay: `${n * -2}s` }} />
          ))}
        </svg>
        <div className={styles.wrap}>
          <div data-reveal className={`${styles.rv} ${styles.contactHead}`}>
            <span className={styles.logoBig} role="img" aria-label="Honic logo" />
            <h2>Let&apos;s connect your station</h2>
            <p>Talk to us about GasDesk and TRA fiscal receipts for your CNG station, or about an engineering solution for your business.</p>
          </div>
          <div className={styles.contacts}>
            <div data-reveal className={styles.rv}>
              <span><Icon name="pin" className={styles.cIco} />Office</span>
              <p>Honic Company Limited<br />DIT CEIIT Tower, 3rd Floor<br />Bibititi Road, Dar es Salaam, Tanzania</p>
            </div>
            <div data-reveal className={styles.rv} style={{ transitionDelay: "90ms" }}>
              <span><Icon name="phone" className={styles.cIco} />Phone</span>
              <p>{PHONES.map((p) => (<a key={p.tel} href={`tel:${p.tel}`}>{p.label}<br /></a>))}</p>
            </div>
            <div data-reveal className={styles.rv} style={{ transitionDelay: "180ms" }}>
              <span><Icon name="mail" className={styles.cIco} />Email</span>
              <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <div data-reveal className={styles.rv} style={{ transitionDelay: "270ms" }}>
              <span><Icon name="globe" className={styles.cIco} />Website</span>
              <p><a href="https://honiccompany.com">honiccompany.com</a></p>
            </div>
          </div>
          <div className={styles.contactCtas}>
            <a href={`tel:${PHONES[0].tel}`} className={styles.btnPrimary}><Icon name="phone" className={styles.btnIco} /> Call us</a>
            <a href={`mailto:${EMAIL}`} className={styles.btnGhost}><Icon name="mail" className={styles.btnIco} /> Email us</a>
            <a href="/Honic-Company-Profile.pdf" download className={styles.btnGhost}><Icon name="download" className={styles.btnIco} /> Company profile (PDF)</a>
          </div>
        </div>
        <footer className={styles.footer}>
          <span>© 2026 Honic Company Limited</span>
          <span>GasDesk by Honic</span>
        </footer>
      </section>
      <Analytics />
    </div>
  );
}
