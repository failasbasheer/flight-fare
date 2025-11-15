// lib/api.ts
import { FlightInput } from "@/types/flight";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://flightfare-backend.onrender.com";

export async function predictFlightPrice(
  payload: FlightInput
): Promise<{ predicted_price: number }> {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to fetch prediction");
  }

  return res.json();
}
