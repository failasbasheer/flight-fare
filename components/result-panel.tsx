"use client";

import { motion } from "framer-motion";
import { Plane, ArrowRight, Calendar, Timer, TrendingUp, TrendingDown } from "lucide-react";
import { PredictionResponse, FlightInput } from "@/types/flight";

export default function ResultPanel({
  prediction,
  form,
}: {
  prediction: PredictionResponse;
  form: FlightInput;
}) {
  const base = prediction.predicted_price;
  const nearby = prediction.nearby_days;
  const multi = prediction.multi_stop;
  const airlines = prediction.airline_comparison;

  const minNearby = Math.min(...nearby.map((d) => d.price));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-card shadow-xl rounded-2xl p-10 mt-10 border"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Plane className="w-7 h-7 text-primary" />
          Flight Price Summary
        </h2>

        <div className="text-4xl font-extrabold text-primary">
          ₹ {base.toLocaleString()}
        </div>
      </div>

      {/* ROUTE */}
      <div className="flex flex-wrap items-center gap-4 text-xl font-semibold mb-10">
        <span>{form.Source}</span>
        <ArrowRight className="w-6 h-6" />
        <span>{form.Destination}</span>

        <div className="ml-auto text-sm text-muted-foreground flex gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {form.Date_of_Journey}
          </span>
          <span className="flex items-center gap-1">
            <Timer className="w-4 h-4" />
            {form.Time_Slot}
          </span>
        </div>
      </div>

      {/* MULTI STOP */}
      <h3 className="text-lg font-semibold mb-3 text-primary">
        Multi-stop Comparison
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {multi.map((opt) => (
          <div
            key={opt.stops}
            className="p-5 border rounded-xl bg-muted/40 shadow-sm"
          >
            <div className="text-sm text-muted-foreground">{opt.stops}</div>
            <div className="text-xl font-bold mt-1">
              ₹ {opt.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* NEARBY DAYS */}
      <h3 className="text-lg font-semibold mb-3 text-primary">
        Nearby Day Prices
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-3 mb-10">
        {nearby.map((item) => {
          const cheapest = item.price === minNearby;
          return (
            <div
              key={item.date}
              className={`min-w-[140px] p-4 border rounded-xl ${
                cheapest
                  ? "bg-green-100 border-green-400"
                  : "bg-muted/40"
              }`}
            >
              <div className="text-xs text-muted-foreground">{item.date}</div>
              <div className="text-xl font-bold">₹ {item.price.toLocaleString()}</div>

              {cheapest ? (
                <div className="text-green-600 text-xs flex items-center gap-1">
                  <TrendingDown className="w-4 h-4" /> Cheapest
                </div>
              ) : (
                <div className="text-red-500 text-xs flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> Higher
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AIRLINES */}
      <h3 className="text-lg font-semibold mb-3 text-primary">
        Cheapest Airlines
      </h3>

      <div className="grid sm:grid-cols-3 gap-4">
        {airlines.slice(0, 3).map((a, idx) => (
          <div
            key={a.airline}
            className="p-4 bg-muted/40 border rounded-xl shadow-sm"
          >
            <div className="text-xs text-muted-foreground">#{idx + 1}</div>
            <div className="font-semibold">{a.airline}</div>
            <div className="text-lg font-bold">₹ {a.price.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
