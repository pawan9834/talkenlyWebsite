"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Branding";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Download Now", href: "#download" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative">
      <nav className="fixed top-0 left-0 w-full z-[80] bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - Unified */}
          <Logo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
                suppressHydrationWarning
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#download"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button - Stable SVG paths */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                className={isOpen ? 'hidden' : 'block'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu (Safety Wrapped) */}
      {hasMounted && (
        <div
          className={`fixed inset-0 z-[100] bg-black transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
        >
          <div className="h-full flex flex-col p-8 pt-10">
            <div className="flex items-center justify-between mb-16">
              <Logo onClick={toggleMenu} />
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-4xl font-bold text-white hover:text-primary transition-colors"
                  suppressHydrationWarning
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link 
              href="#download"
              onClick={toggleMenu}
              className="w-full py-5 bg-orange-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-orange-600/20 block text-center"
            >
              Get Started Now
            </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
