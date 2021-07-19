import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// const resources = {
//   'en-US': {
//     translation: {
//       goodMorning: 'Good morning'
//     }
//   },
//   'es-US': {
//     translation: {
//       goodMorning: 'Buenos días'
//     }
//   }
// };

const fallbackLng = ['en'];
const availableLanguages = ['es', 'en'];

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources,
    debug: true,
    // lng: 'en-US',
    fallbackLng,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;
