import { useState } from "react";
import { LangBtn } from "./button-components/LangBtn";

export function Lang() {
  const [langs, setLangs] = useState(["en", "es", "ca"]);
  const changeLangs = (lang) => {
    let arr = [...langs];
    if (arr.filter((opt) => opt === lang).length === 0) {
      arr.push(lang);
    } else {
      arr = arr.filter((opt) => opt !== lang);
    }

    setLangs(arr);
  };

  const generaLangBtn = langs.map((lang) => {
    return <LangBtn key={lang} lang={lang} />;
  });

  return <div className="flex flex-nowrap">{generaLangBtn}</div>;
}
