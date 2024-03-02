import React, { useState } from "react";
import datos from "./datos.json";

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

  //Idioma elegido
  const [chosenLang, setChosenLang] = useState("es");

  //Datos de cada opción
  const [balance, setBalance] = useState(datos.balance);
  const [variation, setVariation] = useState(datos.variation);
  const [today, setToday] = useState(datos.today);

  const values = {
    datos,
    chosenOption,
    handleChosenOption,
    chosenLang,
    setChosenLang,
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
