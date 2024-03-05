import { describe, expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShowSummary } from "../components/ShowSummary";
import { DataProvider } from "../context/DataProvider";
import userEvent from "@testing-library/user-event";
//import { useTranslation } from "react-i18next";

describe("Tests de Show Summary component: ", () => {
  //const [t, i18n] = useTranslation();
  beforeAll(() => {
    render(
      <>
        <DataProvider>
          <ShowSummary />
        </DataProvider>
      </>
    );
  });
  // test("Renderiza", () => {
  //   expect(screen.getByText("Balance total")).toBeDefined();
  // });

  test("Cambia estado/titulo al darle a la flecha derecha", () => {
    const nextBtn = screen.queryByTestId("next-btn");
    const checkNextBtn = async () => {
      await userEvent.click(nextBtn);
      expect(screen.getByText("Variación respecto a ayer")).toBeDefined();
    };
    checkNextBtn();
  });
  test("Cambia estado/titulo al darle a la flecha izquierda", () => {
    const prevBtn = screen.queryByTestId("prev-btn");
    const checkPrevBtn = async () => {
      await userEvent.click(prevBtn);
      expect(screen.getByText("Balance total")).toBeDefined();
    };
    checkPrevBtn();
  });
});
