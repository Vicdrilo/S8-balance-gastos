import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { dataProvider } from "../../context/DataProvider";

export function NextBtn({ options }) {
  const arrayOptions = options;
  const { handleChosenOption } = useContext(dataProvider);
  return (
    <>
      <div
        className="button"
        data-testid="next-btn"
        onClick={() => handleChosenOption(arrayOptions, "next")}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: "white" }}
          className="text-3xl"
        />
      </div>
    </>
  );
}
