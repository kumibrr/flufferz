import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from 'i18next-browser-languagedetector';
import english from './en-US.json';
import spanish from './es-ES.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  'en': {
    translation: english
  },
  'es': {
    translation: spanish
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;