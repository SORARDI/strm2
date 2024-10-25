import { create } from 'zustand';

export type Language = 'en' | 'am' | 'or' | 'ti' | 'so';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'am',
  setLanguage: (lang) => set({ currentLanguage: lang }),
}));