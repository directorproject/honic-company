"use client";

import { useState, useEffect } from "react";

export default function Spinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`spinner-overlay bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${show ? "show" : ""}`}
      style={{ zIndex: 99999 }}
    >
      <div className="spinner" />
    </div>
  );
}
