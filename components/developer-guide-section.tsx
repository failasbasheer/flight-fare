// components/developer-guide-section.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DeveloperGuideSection() {
  return (
    <section id="developer" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Developer Guide
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything you need to get started with the Flight Fare Predictor API.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8 bg-card border-border rounded-2xl h-full">
              <div className="mb-6">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold">Getting Started</h3>
              </div>
              <ol className="space-y-4 text-sm">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">Read the Documentation</p>
                    <p className="text-muted-foreground text-xs">
                      Explore available endpoints, payload structure, and response formats.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">Test the Demo</p>
                    <p className="text-muted-foreground text-xs">
                      Experiment with real routes and see predictions in real-time.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">Integrate the API</p>
                    <p className="text-muted-foreground text-xs">
                      Use simple REST calls from any backend or frontend client.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    4
                  </span>
                  <div>
                    <p className="font-semibold">Scale with Confidence</p>
                    <p className="text-muted-foreground text-xs">
                      Ideal for travel startups, dashboards, and experimentation.
                    </p>
                  </div>
                </li>
              </ol>
              <a
                href="https://flightfare-backend.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                  View Full Documentation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8 bg-card border-border rounded-2xl h-full">
              <h3 className="text-xl font-bold mb-6">API Specifications</h3>
              <div className="space-y-4 text-sm">
                <div className="pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground">Base URL</p>
                  <p className="font-mono text-xs mt-1">
                    https://flightfare-backend.onrender.com
                  </p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground">Rate Limit</p>
                  <p className="font-mono text-xs mt-1">1000 requests/minute</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground">Response Time</p>
                  <p className="font-mono text-xs mt-1">&lt;50ms average</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground">Content-Type</p>
                  <p className="font-mono text-xs mt-1">application/json</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Supported Platforms</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["JavaScript", "Python", "cURL", "REST"].map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
