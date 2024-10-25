import { Globe } from 'lucide-react';
import { useLanguageStore } from '../store/language';
import type { Language } from '../store/language';

const LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'or', name: 'Afaan Oromoo', nativeName: 'Afaan Oromoo' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali' }
];

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguageStore();
  
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-100">
        <Globe className="w-5 h-5" />
        <span>{LANGUAGES.find(l => l.code === currentLanguage)?.nativeName}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            className={`
              w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg
              ${currentLanguage === lang.code ? 'bg-blue-50 text-blue-600' : ''}
            `}
            onClick={() => setLanguage(lang.code)}
          >
            <div className="font-medium">{lang.nativeName}</div>
            <div className="text-sm text-gray-500">{lang.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}