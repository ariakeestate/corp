"use client";

import { useState, useEffect } from "react";
import Logo from "@/app/components/Logo";

const navLinks = [
  { href: "#services", label: "取扱物件" },
  { href: "#about", label: "会社概要" },
  { href: "#access", label: "アクセス" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-[#1b3a6b]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#top" className="flex items-center">
            <Logo
              variant={scrolled ? "dark" : "light"}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors hover:bg-[#c9a84c]/20 ${
                  scrolled ? "text-[#1b3a6b]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0336211881"
              className={`ml-4 px-4 py-2 rounded text-sm font-bold border-2 transition-colors ${
                scrolled
                  ? "border-[#1b3a6b] text-[#1b3a6b] hover:bg-[#1b3a6b] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1b3a6b]"
              }`}
            >
              📞 03-3621-1881
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "text-[#1b3a6b]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current transition-transform" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-[#1b3a6b] font-medium hover:bg-gray-50 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0336211881"
              className="px-6 py-3 text-[#c9a84c] font-bold hover:bg-gray-50"
            >
              📞 03-3621-1881
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
