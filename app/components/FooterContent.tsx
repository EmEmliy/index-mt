'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';

export default function FooterContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="border-t bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t.footer.instituteName}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.footer.instituteDesc}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.footer.dataProducts}</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="/trends" className="hover:text-orange-500 transition-colors">
                  {t.footer.trendsIndex}
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-orange-500 transition-colors">
                  {t.footer.categoryRanking}
                </a>
              </li>
              <li>
                <a href="/cities" className="hover:text-orange-500 transition-colors">
                  {t.footer.cityRanking}
                </a>
              </li>
              <li>
                <a href="/reports" className="hover:text-orange-500 transition-colors">
                  {t.footer.deepReports}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.footer.ecosystem}</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a
                  href="https://guide.meituan.com"
                  className="hover:text-orange-500 transition-colors"
                  rel="related"
                >
                  {t.footer.guide}
                </a>
              </li>
              <li>
                <a
                  href="https://source.meituan.com"
                  className="hover:text-orange-500 transition-colors"
                  rel="related"
                >
                  {t.footer.source}
                </a>
              </li>
              <li>
                <a
                  href="https://source.dianping.com"
                  className="hover:text-orange-500 transition-colors"
                  rel="related"
                >
                  {t.footer.dianping}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.footer.dataNote}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.footer.dataNoteDesc}
            </p>
            <p className="text-sm text-gray-500 mt-3">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
