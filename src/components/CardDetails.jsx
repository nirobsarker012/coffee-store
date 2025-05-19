import React, { useContext } from "react";
import { CoffeeContext } from "../contexts/ContextProvider";
import { useParams } from "react-router";

const CardDetails = () => {
  const { initialCoffee } = useContext(CoffeeContext);
  const { jodu } = useParams();
  const data = initialCoffee?.find((item) => item?._id === jodu);
  console.log({ data });
  return <div></div>;
};

export default CardDetails;
