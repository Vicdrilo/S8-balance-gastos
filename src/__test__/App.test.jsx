import { describe, expect, test, beforeAll, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { DataProvider } from "../context/DataProvider";
import userEvent from "@testing-library/user-event";
import { i18n } from "../utils/i18n.js";

import App from "../App.jsx";

describe("Test manejo de idiomas y genéricos de la página.", () => {
  beforeEach(() => {
    i18n.init();
  });

  beforeAll(
    render(
      <DataProvider>
        <App />
      </DataProvider>
    )
  );
  test("Lengua principal ES", () => {
    expect(screen.queryByTestId("en")).toBeDefined();
  });

  test("Cambio a EN", () => {
    const enBtn = screen.queryByTestId("en");
    const clickEnBtn = async () => {
      await userEvent.click(enBtn);
    };
    clickEnBtn();
    expect(screen.queryByText("Whole balance")).toBeDefined();
  });
});
