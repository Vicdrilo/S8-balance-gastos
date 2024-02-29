import { useContext } from "react";
import { dataProvider } from "../../context/DataProvider";

export function ChartSummary() {
  const { today, variation } = useContext(dataProvider);
  const sign =
    variation > 0 ? (
      <span className="text-[1.5rem]">
        <b>+</b>
      </span>
    ) : variation < 0 ? (
      <span className="text-[1.5rem]">
        <b>-</b>
      </span>
    ) : (
      <span className="text-[1.5rem]"></span>
    );
  return (
    <>
      <div className="despeses-avui flex flex-col items-start">
        <h1 className="text-sm text-slate-400">
          <b>Despeses avui</b>
        </h1>
        <h1 className="text-[3rem]">
          <b>{today} €</b>
        </h1>
      </div>
      <div className="respecte-ahir flex flex-col items-end">
        <h1 className="text-[1.5rem]">
          <b>
            {sign}
            {variation}%
          </b>
        </h1>
        <h1 className="text-sm">
          <b>respecte a ahir</b>
        </h1>
      </div>
    </>
  );
}
