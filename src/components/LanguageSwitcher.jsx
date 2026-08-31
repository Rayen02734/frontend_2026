import { Globe } from 'lucide-react';
import useAppStore from '../store/appStore';

export default function LanguageSwitcher() {
    const language = useAppStore((state) => state.language);
    const setLanguage = useAppStore((state) => state.setLanguage);

    return (
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-sm">
            <Globe className="h-4 w-4 text-slate-500" />
            <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`rounded-full px-2 py-1 text-xs font-semibold transition ${language === 'fr' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
                FR
            </button>
            <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-2 py-1 text-xs font-semibold transition ${language === 'en' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
                EN
            </button>
        </div>
    );
}
