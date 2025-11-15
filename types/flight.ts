// types/flight.ts

export interface FlightInput {
  Airline: string;
  Source: string;
  Destination: string;
  Total_Stops: string;
  Date_of_Journey: string;
  Time_Slot: string;
}

// ---- BACKEND RESPONSE TYPES ----

export interface NearbyDayPrice {
  date: string;
  price: number;
}

export interface MultiStopPrice {
  stops: string;
  price: number;
}

export interface AirlineComparison {
  airline: string;
  price: number;
}

export interface PredictionResponse {
  predicted_price: number;
  nearby_days: NearbyDayPrice[];
  multi_stop: MultiStopPrice[];
  airline_comparison: AirlineComparison[];
}
