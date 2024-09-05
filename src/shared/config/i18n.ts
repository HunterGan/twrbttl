import i18next from "i18next";
import {initReactI18next} from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "@/shared/lib/translations/en"
import ru from "@/shared/lib/translations/ru"

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {...en},
      ru: {...ru}
    }
  })
  .then()