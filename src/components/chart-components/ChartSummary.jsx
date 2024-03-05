import { useContext } from "react";
import { dataProvider } from "../../context/DataProvider";
import { useTranslation } from "react-i18next";

export function ChartSummary() {
  const { t } = useTranslation();
  const { today, variation } = useContext(dataProvider);
  const sign =
    variation > 0 ? (
      <span className="text-[1.5rem]">
        <b>+</b>
      </span>
    ) : (
      <span className="text-[1.5rem]"></span>
    );
  return (
    <>
      <div className="despeses-avui flex flex-col items-start">
        <h1 className="text-sm text-slate-400 text-nowrap">
          <b>{t("showChart.part1")}</b>
        </h1>
        <h1 className="text-[3rem] text-black text-nowrap">
          <b>{today} €</b>
        </h1>
      </div>
      <div className="respecte-ahir flex flex-col items-end">
        <h1 className="text-[1.5rem]  text-black text-nowrap">
          <b>
            {sign}
            {variation}%
          </b>
        </h1>
        <h1 className="text-sm  text-black text-nowrap">
          <b>{t("showChart.part2")}</b>
        </h1>
      </div>
    </>
  );
}
