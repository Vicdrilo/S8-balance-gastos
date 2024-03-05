import { describe, expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataProvider } from "../context/DataProvider";
import { ShowChart } from "../components/ShowChart";

describe("Tests de Show Chart component: ", () => {
  beforeAll(() => {
    render(
      <>
        <DataProvider>
          <ShowChart />
        </DataProvider>
      </>
    );
  });
  test("Renderiza", () => {
    expect(screen.getByText("Despeses - Última setmana")).toBeDefined();
  });

  test("Renderiza el gráfico", () => {
    expect(screen.queryByTestId("bar-chart")).toBeDefined();
  });
});
