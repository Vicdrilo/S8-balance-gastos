import { useContext, useState } from "react";
import { PrevBtn } from "./button-components/PrevBtn";
import { NextBtn } from "./button-components/NextBtn";
import { dataProvider } from "../context/DataProvider";
import { useTranslation } from "react-i18next";

export function ShowSummary() {
  const { t } = useTranslation();
  const { chosenOption, balance, variation } = useContext(dataProvider);
  const sign =
    variation > 0 ? (
      <span className="text-[2.5rem]">
        <b>+</b>
      </span>
    ) : variation < 0 ? (
      <span className="text-[2.5rem]">
        <b>-</b>
      </span>
    ) : (
      <span className="text-[2.5rem]"></span>
    );
  console.log("Chosen Option: ", chosenOption);
  const title = () => {
    if (chosenOption === "balanc") {
      return (
        <>
          <h1 className="text-sm text-white">{t("showSummary.part1")}</h1>
          <h1 className="text-[2.5rem] text-white">
            <b>{balance} €</b>
          </h1>
        </>
      );
    } else if (chosenOption === "variacio") {
      return (
        <>
          <h1 className="text-sm text-white">{t("ShowSummary.part2")}</h1>
          <h1 className="text-[2.5rem] text-white">
            <strong>
              {sign}
              {variation} %
            </strong>
          </h1>
        </>
      );
    }
  };

  //state hook to add/remove data options. Could be necessary through the time to add/remove a service
  const [options, setOptions] = useState(["balanc", "variacio"]);
  const changeOptions = (opt) => {
    let arr = [...options];
    if (arr.filter((x) => x === opt).length === 0) {
      arr.push(opt);
    } else {
      arr = arr.filter((x) => x !== opt);
    }

    setOptions(arr);
  };

  return (
    <div className="bg-orange rounded-2xl flex justify-between h-[100px] items-center">
      <div className="data-container flex flex-col items-start ms-8">
        {title()}
      </div>
      <div className="btn-container flex gap-6 me-8">
        <PrevBtn options={options} data-testid="ss-prev-btn" />
        <NextBtn options={options} data-testid="ss-next-btn" />
      </div>
    </div>
  );
}
