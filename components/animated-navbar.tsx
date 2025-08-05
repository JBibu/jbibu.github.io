"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

interface NavItem {
  readonly title: string;
  readonly url: string;
}

interface AnimatedNavbarProps {
  logo?: {
    readonly url: string;
    readonly src: string;
    readonly alt: string;
    readonly title: string;
  };
  menu?: readonly NavItem[];
}

export const AnimatedNavbar = ({
  logo = {
    url: "/",
    src: "/favicon.ico",
    alt: "Portfolio Logo",
    title: "Javi Dev.",
  },
  menu = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Projects", url: "#projects" },
    { title: "Skills", url: "#skills" },
    { title: "Contact", url: "#contact" },
  ],
}: AnimatedNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (url: string) => {
    setIsMenuOpen(false);
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = url;
    }
  };

  return (
    <nav className="w-full px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href={logo.url}
          className="flex items-center space-x-2 font-bold text-xl hover:scale-105 transition-transform duration-200"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span>{logo.title}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {menu.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleMenuItemClick(item.url)}
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side - Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors hover:scale-110 transition-transform duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <ul className="space-y-2 pb-4">
          {menu.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleMenuItemClick(item.url)}
                className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-all duration-200 hover:translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};