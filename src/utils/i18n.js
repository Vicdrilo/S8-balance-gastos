import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "ca",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ca: {
        translation: {
          showSummary: {
            part1: "Balanç total",
            part2: "Variació respecte a ahir",
          },
          showChart: {
            part1: "Despeses avui",
            part2: "respecte a ahir",
            part3: "Despeses - Última setmana",
            part4: "Dg Dl Dt Dc Dj Dv Ds",
          },
        },
      },
      es: {
        translation: {
          showSummary: {
            part1: "Balance total",
            part2: "Variación respecto a ayer",
          },
          showChart: {
            part1: "Gastos hoy",
            part2: "respecto a ayer",
            part3: "Gastos - Última semana",
            part4: "D L M X J V S",
          },
        },
      },
      en: {
        translation: {
          showSummary: {
            part1: "Whole balance",
            part2: "Variation concerning yesterday",
          },
          showChart: {
            part1: "Today's outlay",
            part2: "concerning yesterday",
            part3: "Outlay - Last week",
            part4: "Sun Mon Tue Wed Thu Fri Sat",
          },
        },
      },
    },
  });

export default i18n;
