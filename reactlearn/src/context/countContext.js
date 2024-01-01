import React, { createContext, useState } from "react";

const CountContext = createContext(undefined);

function CountProvider({ children }) {
  const [countDetails, setCountDetails] = useState({
    value: 0,
  });

  return (
    <CountContext.Provider value={countDetails}>
      {children}
    </CountContext.Provider>
  );
}

export { CountProvider, CountContext };
