"use client";

import { useState, useEffect, useRef } from "react";

import Header from "/components/Header.jsx";
import Layout from "/components/Layout.jsx";
import Overlay from "/components/Overlay.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowLogo(!entry.isIntersecting),
      { threshold: 0.9 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [menuOpen]);


  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} showLogo={showLogo}  />
      {menuOpen && <Overlay />}
      <Layout heroRef={heroRef} showLogo={showLogo}  />
    </div>
  );
}
