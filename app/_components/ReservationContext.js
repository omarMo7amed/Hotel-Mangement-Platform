"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialValue = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialValue);

  function resetRange() {
    setRange(initialValue);
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("Context was used outside provider");

  return context;
}

export { ReservationProvider, useReservation };
