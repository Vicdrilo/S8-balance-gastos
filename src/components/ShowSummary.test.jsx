import { useContext } from "react";
import { dataProvider } from "../context/DataProvider";
import { test, expectTypeOf, assertType, expect } from "vitest";
import { ShowSummary } from "./ShowSummery";
import { createRoot } from "react-dom";

test("ShowSummary renderiza correctamente", () => {
  const container = document.createElement("div");

  createRoot(<ShowSummary />, container);

  // Verificar que el contenedor ahora contiene el componente renderizado
  expect(container.innerHTML).toContain("Balance total");
});

test("El tipo del estado que guarda la opción que muestra es string", () => {
  const {
    chosenOption,
    handleChosenOption,
    balance,
    setBalance,
    variation,
    setVariation,
    today,
    setToday,
  } = useContext(dataProvider);

  expectTypeOf(chosenOption).toMatchTypeOf("string");

  assertType(chosenOption);
});

test("Al cambiar de estado muestra el mensaje correcto", () => {
  const {
    chosenOption,
    handleChosenOption,
    balance,
    setBalance,
    variation,
    setVariation,
    today,
    setToday,
  } = useContext(dataProvider);
});
