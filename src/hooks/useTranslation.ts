import { useLanguageStore } from '../store/language';
import { translations } from '../i18n/translations';

export function useTranslation() {
  const { currentLanguage } = useLanguageStore();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    
    return value as string;
  };
  
  return { t };
}