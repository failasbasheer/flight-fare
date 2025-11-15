// types/flight.ts
export interface FlightInput {
  Airline: string;
  Source: string;
  Destination: string;
  Total_Stops: string;
  Date_of_Journey: string; // YYYY-MM-DD from <input type="date">
  Time_Slot: string;       // "morning" | "evening" etc.
}
