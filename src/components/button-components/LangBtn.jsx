import es from "../../assets/es.svg";
import ca from "../../assets/ca.svg";
import en from "../../assets/en-bis.svg";
import { useContext, useState } from "react";
import { dataProvider } from "../../context/DataProvider";

export function LangBtn({ lang }) {
  const languaje = lang;
  console.log();
  return <div className="lang-btn w-10 m-3">{<Flag lang={languaje} />}</div>;
}
const Flag = ({ lang }) => {
  const { chosenLang, setChosenLang } = useContext(dataProvider);

  const handleChangeLang = (lang) => {
    setChosenLang(lang);
    setIsDifuminado(!isDifuminado);
  };
  if (lang === "es") {
    return (
      <img
        src={es}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "es"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => handleChangeLang("es")}
      />
    );
  } else if (lang === "ca") {
    return (
      <img
        src={ca}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "ca"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => handleChangeLang("ca")}
      />
    );
  } else if (lang === "en") {
    return (
      <img
        src={en}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "en"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => handleChangeLang("en")}
      />
    );
  }
};
