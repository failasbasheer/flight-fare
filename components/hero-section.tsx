// components/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background pt-20 pb-20 md:pt-28 md:pb-28"
    >
      {/* Decorative gradient blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: yBg, opacity: opacityOverlay }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-72 h-72 bg-secondary/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          className="mb-6 inline-block px-4 py-2 bg-secondary/20 rounded-full border border-secondary/50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-sm font-semibold text-foreground">
            ✈️ Powered by Machine Learning
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-5 text-balance leading-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          AI-Powered Flight Fare{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Prediction API
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-muted-foreground mb-10 text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Predict flight prices instantly using advanced machine learning.
          Designed for travel platforms, booking engines, and price comparison tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Button
            size="lg"
            onClick={scrollToDemo}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 shadow-lg shadow-primary/20"
          >
            Try Demo
          </Button>
          <a
            href="https://flightfare-backend.onrender.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-lg px-8"
            >
              View API Docs
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-border"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {[
            { label: "API Calls", value: "10K+" },
            { label: "Accuracy", value: "98%" },
            { label: "Avg Response", value: "50ms" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
