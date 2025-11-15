"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 bg-gradient-to-b from-white to-gray-50">
      
      {/* Top Curved Mask */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-gray-100"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-600">FarePredictor</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We use advanced machine learning models trained on thousands of flight records to help you 
            secure the best fares effortlessly. No guesswork. No hidden complexities. Just accurate predictions, 
            smart travel guidance, and a seamless booking experience.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform continuously evaluates price trends, demand patterns, seasonal variations, 
            and travel behavior to give you real-time insights that actually matter.
          </p>

          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT – STATS PANEL */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {/* CARD */}
          {[
            { value: "98%", label: "Prediction Accuracy" },
            { value: "150k+", label: "Daily Searches" },
            { value: "350+", label: "Routes Covered" },
            { value: "24/7", label: "Model Monitoring" },
          ].map((stat, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl border border-white/40"
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-700 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      

    </section>
  );
}
