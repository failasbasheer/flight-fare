"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full z-[100] bg-transparent backdrop-blur-xl border-b border-white/10"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/15 backdrop-blur-lg rounded-xl flex items-center justify-center">
            <span className="text-white text-lg font-bold">✈</span>
          </div>
          <span className="text-xl font-semibold text-white">FarePredictor</span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 items-center">

          <a href="#about" className="text-white hover:text-primary transition">About</a>

          <a
            href="https://flightfare-backend.onrender.com/docs"
            target="_blank"
            className="text-white hover:text-primary transition"
          >
            API Docs
          </a>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setMobile(!mobile)}
            className="p-2 bg-white/20 rounded-lg"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition ${mobile ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition ${mobile ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition ${mobile ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl text-white border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a href="#demo" onClick={() => setMobile(false)}>Demo</a>
            <a href="#about" onClick={() => setMobile(false)}>About</a>

            <a
              href="https://flightfare-backend.onrender.com/docs"
              target="_blank"
              onClick={() => setMobile(false)}
            >
              API Docs
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
