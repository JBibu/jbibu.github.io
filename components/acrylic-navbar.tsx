"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedNavbar } from "@/components/animated-navbar";
import { NAVBAR_CONFIG } from "@/lib/constants";

export const AcrylicNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side to avoid hydration issues
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/10 backdrop-blur-lg backdrop-saturate-150 shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedNavbar logo={NAVBAR_CONFIG.logo} menu={NAVBAR_CONFIG.menu} />
      </div>
    </div>
  );
};