import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './eng.json';
import fr from './fr.json';
import it from './it.json'
import esp from "./esp.json"
import de from "./de.json"
i18n.use(initReactI18next).init({
  resources: {
    fr,
    en,
    it,
    esp,
    de
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Set the fallback language
  keySeparator: '.', // Set the key separator character
  interpolation: {
    escapeValue: false, // React already escapes the values, so no need to escape again
  },
});

export default i18n;