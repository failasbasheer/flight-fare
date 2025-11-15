// // components/demo-search-form.tsx
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import AutocompleteSelect from "@/components/autocomplete-select";
// import PredictionCard from "@/components/prediction-card";
// import { predictFlightPrice } from "@/lib/api";
// import { FlightInput } from "@/types/flight";
// import { motion } from "framer-motion";

// const AIRLINES = [
//   "Jet Airways",
//   "IndiGo",
//   "Air India",
//   "Multiple carriers",
//   "SpiceJet",
//   "Vistara",
//   "Air Asia",
//   "GoAir",
//   "Air India Express",
// ];

// const SOURCES = ["Delhi", "Kolkata", "Mumbai", "Chennai", "Bangalore"];
// const DESTINATIONS = ["Cochin", "Delhi", "Hyderabad", "Kolkata", "Bangalore"];
// const STOPS = ["non-stop", "1 stop", "2 stops", "3 stops", "4 stops"];
// const TIME_SLOTS = [
//   { label: "Early Morning (5–7:30 AM)", value: "early_morning" },
//   { label: "Morning (9–11:30 AM)", value: "morning" },
//   { label: "Afternoon (2–4:30 PM)", value: "afternoon" },
//   { label: "Evening (7–9:30 PM)", value: "evening" },
// ];

// type FlightForm = FlightInput & {
//   Duration: string; // local-only, not sent to backend
// };

// export default function DemoSearchForm() {
//   const [form, setForm] = useState<FlightForm>({
//     Airline: "",
//     Source: "",
//     Destination: "",
//     Total_Stops: "",
//     Date_of_Journey: "",
//     Time_Slot: "",
//     Duration: "",
//   });

//   const [prediction, setPrediction] = useState<{ predicted_price: number } | null>(
//     null
//   );
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const update = (key: keyof FlightForm, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setPrediction(null);

//     if (
//       !form.Airline ||
//       !form.Source ||
//       !form.Destination ||
//       !form.Total_Stops ||
//       !form.Date_of_Journey ||
//       !form.Time_Slot
//     ) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const { Duration: _duration, ...apiPayload } = form; // avoid sending Duration
//       const data = await predictFlightPrice(apiPayload);
//       setPrediction(data);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="grid md:grid-cols-2 gap-8">
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="p-6 md:p-8 bg-card border rounded-2xl shadow-md">
//           <h3 className="text-xl font-bold mb-2">Flight Price Prediction</h3>
//           <p className="text-muted-foreground mb-6 text-sm">
//             Fill the required details to estimate the fare for your route.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <AutocompleteSelect
//               label="Airline"
//               value={form.Airline}
//               onChange={(v) => update("Airline", v)}
//               options={AIRLINES}
//             />

//             <div className="grid grid-cols-2 gap-4">
//               <AutocompleteSelect
//                 label="Source"
//                 value={form.Source}
//                 onChange={(v) => update("Source", v)}
//                 options={SOURCES}
//               />
//               <AutocompleteSelect
//                 label="Destination"
//                 value={form.Destination}
//                 onChange={(v) => update("Destination", v)}
//                 options={DESTINATIONS}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Total Stops</label>
//               <select
//                 value={form.Total_Stops}
//                 onChange={(e) => update("Total_Stops", e.target.value)}
//                 className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all"
//               >
//                 <option value="">Select stops</option>
//                 {STOPS.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Time Slot */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Time Slot</label>
//               <select
//                 value={form.Time_Slot}
//                 onChange={(e) => update("Time_Slot", e.target.value)}
//                 className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all"
//               >
//                 <option value="">Select time slot</option>
//                 {TIME_SLOTS.map((slot) => (
//                   <option key={slot.value} value={slot.value}>
//                     {slot.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Date + Duration (UX only) */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Journey Date</label>
//                 <input
//                   type="date"
//                   value={form.Date_of_Journey}
//                   onChange={(e) => update("Date_of_Journey", e.target.value)}
//                   className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Duration (optional)
//                 </label>
//                 <input
//                   placeholder="e.g. 2h 30m"
//                   value={form.Duration}
//                   onChange={(e) => update("Duration", e.target.value)}
//                   className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all"
//                 />
//                 <p className="text-[11px] text-muted-foreground mt-1">
//                   Backend currently uses time slot for duration.
//                 </p>
//               </div>
//             </div>

//             {error && (
//               <div className="text-destructive bg-destructive/10 p-3 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full py-6 text-base font-semibold shadow-sm"
//             >
//               {loading ? "Predicting..." : "Get Prediction"}
//             </Button>
//           </form>
//         </Card>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 24 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.5 }}
//       >
//         {prediction ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.35 }}
//           >
//             <PredictionCard price={prediction.predicted_price} />
//           </motion.div>
//         ) : (
//           <Card className="p-8 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl h-full flex items-center justify-center shadow-md border-border/60">
//             <div className="text-center text-muted-foreground">
//               <div className="text-6xl mb-3">🔮</div>
//               <p>Your prediction will appear here</p>
//             </div>
//           </Card>
//         )}
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AutocompleteSelect from "@/components/autocomplete-select";
import PredictionCard from "@/components/prediction-card";
import { predictFlightPrice } from "@/lib/api";
import { FlightInput } from "@/types/flight";
import { motion } from "framer-motion";

// MUST MATCH BACKEND EXACTLY
const AIRLINES = [
  "Jet Airways",
  "IndiGo",
  "Air India",
  "Multiple carriers",
  "SpiceJet",
  "Vistara",
  "Air Asia",
  "GoAir",
  "Jet Airways Business",
  "Multiple carriers Premium economy",
  "Vistara Premium economy",
  "Trujet",
];

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

export default function DemoSearchForm() {
  const [form, setForm] = useState<FlightInput>({
    Airline: "",
    Source: "",
    Destination: "",
    Total_Stops: "",
    Date_of_Journey: "",
    Time_Slot: "",
  });

  const [prediction, setPrediction] = useState<{ predicted_price: number } | null>(
    null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key: keyof FlightInput, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    // Validation
    if (
      !form.Airline ||
      !form.Source ||
      !form.Destination ||
      !form.Total_Stops ||
      !form.Date_of_Journey ||
      !form.Time_Slot
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const data = await predictFlightPrice(form);
      setPrediction(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 md:p-8 bg-card border rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Flight Price Prediction</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Fill the required details to estimate the fare for your route.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AutocompleteSelect
              label="Airline"
              value={form.Airline}
              onChange={(v) => update("Airline", v)}
              options={AIRLINES}
            />

            {/* SOURCE + DESTINATION */}
            <div className="grid grid-cols-2 gap-4">
              <AutocompleteSelect
                label="Source"
                value={form.Source}
                onChange={(v) => update("Source", v)}
                options={SOURCES}
              />
              <AutocompleteSelect
                label="Destination"
                value={form.Destination}
                onChange={(v) => update("Destination", v)}
                options={DESTINATIONS}
              />
            </div>

            {/* TOTAL STOPS */}
            <div>
              <label className="block text-sm font-medium mb-2">Total Stops</label>
              <select
                value={form.Total_Stops}
                onChange={(e) => update("Total_Stops", e.target.value)}
                className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Select stops</option>
                {STOPS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* TIME SLOT */}
            <div>
              <label className="block text-sm font-medium mb-2">Time Slot</label>
              <select
                value={form.Time_Slot}
                onChange={(e) => update("Time_Slot", e.target.value)}
                className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Select time slot</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Journey Date
              </label>
              <input
                type="date"
                value={form.Date_of_Journey}
                onChange={(e) => update("Date_of_Journey", e.target.value)}
                className="w-full px-3 py-2 bg-input border rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* ERRORS */}
            {error && (
              <div className="text-destructive bg-destructive/10 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* SUBMIT */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-6 text-base font-semibold shadow-sm"
            >
              {loading ? "Predicting..." : "Get Prediction"}
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* PREDICTION RESULT */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {prediction ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <PredictionCard price={prediction.predicted_price} />
          </motion.div>
        ) : (
          <Card className="p-8 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl h-full flex items-center justify-center shadow-md border-border/60">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-3">🔮</div>
              <p>Your prediction will appear here</p>
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
