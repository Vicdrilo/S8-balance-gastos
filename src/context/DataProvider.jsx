import React, { useState } from "react";
import data from "./datos.json";

export const dataProvider = React.createContext();

export function DataProvider({ children }) {
  //Opcion con que se trabaja en la barra
  const [chosenOption, setChosenOption] = useState("balanc");
  const handleChosenOption = (arr, action) => {
    let index = arr.indexOf(chosenOption);
    if (action === "next" && index !== arr.length - 1) {
      setChosenOption(arr[index + 1]);
    } else if (action === "prev" && index != 0) {
      setChosenOption(arr[index - 1]);
    }
  };

  //Datos de cada opción
  const [balance, setBalance] = useState(data.balance);
  const [variation, setVariation] = useState(data.variation);
  const [today, setToday] = useState(data.today);

  const values = {
    chosenOption,
    handleChosenOption,
    balance,
    setBalance,
    variation,
    setVariation,
    today,
    setToday,
  };

  return (
    <dataProvider.Provider value={values}>{children}</dataProvider.Provider>
  );
}
