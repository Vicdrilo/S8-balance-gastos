import { describe, expect, it, test } from "vitest"
import { render, screen } from "@testing-library/react"
import {ShowSummary} from "./ShowSummary";


describe("Tests de Show Summary component: ", ()=>{
  test("Debería renderizar",()=>{
    render(<ShowSummary/>);
    expect(screen.getAllByText(/Balanç total/)).toBeDefined();
  });
  
});