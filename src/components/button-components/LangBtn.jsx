import es from "../../assets/es.svg";
import ca from "../../assets/ca.svg";
import en from "../../assets/en-bis.svg";

export function LangBtn({ lang }) {
  const languaje = lang;
  console.log(flag(languaje));
  return <div className="lang-btn w-10 m-3">{flag(languaje)}</div>;
}
const flag = (lang) => {
  if (lang === "es") {
    return <img src={es} alt={lang} className="button" />;
  } else if (lang === "ca") {
    return <img src={ca} alt={lang} className="button" />;
  } else if (lang === "en") {
    return <img src={en} alt={lang} className="button" />;
  }
};
