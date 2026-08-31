import fr from './fr';
import en from './en';

export const translations = { fr, en };

export const defaultLanguage = 'fr';

export function getTranslations(language = defaultLanguage) {
  return translations[language] || translations.fr;
}
