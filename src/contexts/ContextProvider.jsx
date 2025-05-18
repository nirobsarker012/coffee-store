import React, { createContext, useEffect, useState } from "react";
export const CoffeeContext = createContext();

const ContextProvider = ({ children }) => {
  const [initialCoffee, setInitialCoffee] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/coffees`);
        if (!response.ok) {
          throw new Error("Failed to fetch apps Data");
        }
        const data = await response.json();
        setInitialCoffee(data);
      } catch (error) {
        console.error("Error fecthing apps:", error);
      }
    };
    fetchData();
  }, []);
  const coffeeData = {
    initialCoffee,
    setInitialCoffee,
  };
  return <CoffeeContext value={coffeeData}>{children}</CoffeeContext>;
};

export default ContextProvider;
