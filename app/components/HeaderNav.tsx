'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function HeaderNav() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{language === 'zh-CN' ? '指' : language === 'ja' ? '指' : 'Mi'}</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {language === 'zh-CN' ? '美团指数' : language === 'ja' ? '美団インデックス' : language === 'es' ? 'Índice Meituan' : 'Meituan Index'}
              </span>
            </a>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-orange-50 text-orange-600 text-xs rounded-full border border-orange-200 font-medium">
              {t.nav.authorityBadge}
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              {t.nav.home}
            </a>
            <a href="/trends" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              {t.nav.trends}
            </a>
            <a href="/categories" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              {t.nav.categories}
            </a>
            <a href="/cities" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              {t.nav.cities}
            </a>
            <a href="/reports" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              {t.nav.reports}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t.nav.dataUpdating}
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
