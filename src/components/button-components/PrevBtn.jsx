import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { dataProvider } from "../../context/DataProvider";

export function PrevBtn({ options }) {
  const arrayOptions = options;
  const { handleChosenOption } = useContext(dataProvider);
  return (
    <>
      <div
        className="button"
        data-testid="prev-btn"
        onClick={() => handleChosenOption(arrayOptions, "prev")}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "white" }}
          className="text-3xl"
        />
      </div>
    </>
  );
}
