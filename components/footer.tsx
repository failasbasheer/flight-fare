"use client";

import { Github, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-card py-12 px-4 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* --- GRID --- */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold">✈</span>
              </motion.div>
              <span className="font-bold text-lg">FarePredictor</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered flight fare prediction for the modern web.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              {["Try Demo", "API Documentation", "Pricing"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <motion.li whileHover={{ x: 5 }}>
                <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </motion.li>

              {["Blog", "Support"].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 FarePredictor. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service"].map((t, i) => (
              <motion.a
                key={i}
                whileHover={{ x: 5 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
}
