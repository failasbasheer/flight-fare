// components/navbar.tsx
"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-lg">✈</span>
          </div>
          <h1 className="text-xl font-bold text-foreground hidden sm:block">
            FarePredictor
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Demo
          </button>
          <a
            href="https://flightfare-backend.onrender.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            API Docs
          </a>
          <button
            onClick={() => scrollToSection("developer")}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Developers
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <div className="w-5 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-foreground transition-all ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-foreground transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-foreground transition-all ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("demo")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Demo
            </button>
            <a
              href="https://flightfare-backend.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              API Docs
            </a>
            <button
              onClick={() => scrollToSection("developer")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Developers
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
