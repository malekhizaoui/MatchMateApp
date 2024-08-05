import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from './eng.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
  resources: {
    fr,
    eng,
  },
  lng: 'eng', // Set the default language
  fallbackLng: 'eng', // Set the fallback language
  keySeparator: '.', // Set the key separator character
  interpolation: {
    escapeValue: false, // React already escapes the values, so no need to escape again
  },
});

export default i18n;