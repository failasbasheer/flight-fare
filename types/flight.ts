// types/flight.ts

export interface FlightInput {
  Airline: string;           // MUST match backend airline_map keys
  Source: string;            // MUST match dataset spellings exactly
  Destination: string;       // MUST match dataset spellings exactly
  Total_Stops: string;       // "non-stop" | "1 stop" | "2 stops" | ...
  Date_of_Journey: string;   // "YYYY-MM-DD"
  Time_Slot: string;         // "early_morning" | "morning" | ...
}
