"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AutocompleteSelect from "@/components/autocomplete-select";
import { Button } from "@/components/ui/button";
import { predictFlightPrice } from "@/lib/api";
import { FlightInput, PredictionResponse } from "@/types/flight";
import ResultPanel from "@/components/result-panel";
import Image from "next/image";

const CABIN_CLASSES = [
  { label: "Economy", value: "economy" },
  { label: "Premium Economy", value: "premium" },
  { label: "Business", value: "business" },
];

const AIRLINE_BY_CLASS: Record<string, string[]> = {
  economy: ["Jet Airways", "IndiGo", "Air India", "SpiceJet", "Vistara", "Air Asia", "GoAir", "Trujet"],
  premium: ["Multiple carriers Premium economy", "Vistara Premium economy"],
  business: ["Jet Airways Business"],
};

const SOURCES = ["Banglore", "Kolkata", "Delhi", "Chennai", "Mumbai"];
const DESTINATIONS = ["New Delhi", "Banglore", "Cochin", "Kolkata", "Delhi", "Hyderabad"];
const STOPS = ["non-stop", "1 stop", "2 stops", "3 stops", "4 stops"];

const TIME_SLOTS = [
  { label: "Early Morning (5–7 AM)", value: "early_morning" },
  { label: "Morning (9–11 AM)", value: "morning" },
  { label: "Afternoon (2–4 PM)", value: "afternoon" },
  { label: "Evening (7–9 PM)", value: "evening" },
  { label: "Night (11 PM–1 AM)", value: "night" },
];

type FormState = FlightInput & { Cabin_Class: string };

export default function HeroSection() {
  const [form, setForm] = useState<FormState>({
    Airline: "",
    Source: "",
    Destination: "",
    Total_Stops: "",
    Date_of_Journey: "",
    Time_Slot: "",
    Cabin_Class: "",
  });

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrediction(null);
    setLoading(true);

    try {
      const { Cabin_Class, ...payload } = form;
      const data = await predictFlightPrice(payload); // now returns full PredictionResponse
      setPrediction(data);
    } finally {
      setLoading(false);
    }
  };

  const airlineOptions = form.Cabin_Class ? AIRLINE_BY_CLASS[form.Cabin_Class] : [];
  const filteredDestinations = DESTINATIONS.filter((d) => d !== form.Source);

  return (
    <>
      <section className="relative h-[100vh] w-full overflow-hidden flex items-center">
        <Image
          alt="bg"
          src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              AI-Powered  
              <span className="text-primary"> Flight Fare Prediction</span>
            </motion.h1>

            <p className="text-lg opacity-90">
              Predict domestic flight prices instantly using Machine Learning.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30">
              <h3 className="text-xl font-semibold mb-4">Check Flight Price</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* CABIN + AIRLINE */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold">Cabin Class</label>
                    <select
                      value={form.Cabin_Class}
                      onChange={(e) => {
                        update("Cabin_Class", e.target.value);
                        update("Airline", "");
                      }}
                      className="w-full p-2 mt-1 border rounded-lg text-sm"
                    >
                      <option value="">Select</option>
                      {CABIN_CLASSES.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <AutocompleteSelect
                    label="Airline"
                    value={form.Airline}
                    onChange={(v) => update("Airline", v)}
                    options={airlineOptions}
                    compact
                  />
                </div>

                {/* SOURCE + DESTINATION */}
                <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
                  <AutocompleteSelect
                    label="From"
                    value={form.Source}
                    onChange={(v) => {
                      update("Source", v);
                      update("Destination", "");
                    }}
                    options={SOURCES}
                    compact
                  />

                  <button
                    type="button"
                    className="p-2 mb-1 rounded-lg border bg-gray-100 hover:bg-gray-200"
                    onClick={() => {
                      if (form.Source && form.Destination) {
                        update("Source", form.Destination);
                        update("Destination", form.Source);
                      }
                    }}
                  >
                    ⇄
                  </button>

                  <AutocompleteSelect
                    label="To"
                    value={form.Destination}
                    onChange={(v) => update("Destination", v)}
                    options={filteredDestinations}
                    compact
                  />
                </div>

                {/* STOPS + TIME SLOT */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold">Stops</label>
                    <select
                      value={form.Total_Stops}
                      onChange={(e) => update("Total_Stops", e.target.value)}
                      className="w-full p-2 mt-1 border rounded-lg text-sm"
                    >
                      <option value="">Stops</option>
                      {STOPS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold">Time Slot</label>
                    <select
                      value={form.Time_Slot}
                      onChange={(e) => update("Time_Slot", e.target.value)}
                      className="w-full p-2 mt-1 border rounded-lg text-sm"
                    >
                      <option value="">Slot</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* DATE */}
                <div>
                  <label className="text-xs font-semibold">Date</label>
                  <input
                    type="date"
                    value={form.Date_of_Journey}
                    onChange={(e) => update("Date_of_Journey", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-lg text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    loading ||
                    !form.Cabin_Class ||
                    !form.Airline ||
                    !form.Source ||
                    !form.Destination ||
                    !form.Date_of_Journey ||
                    !form.Time_Slot ||
                    !form.Total_Stops
                  }
                  className={`w-full mt-2 text-white rounded-lg py-3 ${
                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Predicting..." : "Get Price"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {prediction && (
        <div className="px-6 max-w-7xl mx-auto">
          <ResultPanel prediction={prediction} form={form} />
        </div>
      )}
    </>
  );
}
